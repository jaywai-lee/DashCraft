begin;

-- 1. 공용 함수: updated_at 트리거 함수
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- 공용 함수: 행 수 제한 트리거 함수
create or replace function public.enforce_row_limit()
returns trigger
language plpgsql
set search_path = ''
as $$
declare
  max_rows int;
  cnt int;
begin
  max_rows := tg_argv[0]::int;
  execute format('select count(*) from %I.%I where user_id = $1', tg_table_schema, tg_table_name)
    into cnt using new.user_id;
  if cnt >= max_rows then
    raise exception 'row limit exceeded for table %', tg_table_name
      using errcode = 'check_violation';
  end if;
  return new;
end;
$$;

-- 2. 테이블 생성
create table public.widgets (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  type        varchar(50)  not null check (type in ('todo','clock','dday','memo')),
  title       varchar(255) not null,
  color       varchar(50)  not null default 'default'
              check (color in ('default','blue','green','yellow','purple','red')),
  layout_w    int not null default 1 check (layout_w in (1, 2)),
  layout_h    int not null default 1 check (layout_h >= 1),
  layout_x    int not null default 0 check (layout_x >= 0),
  layout_y    int not null default 0 check (layout_y >= 0),
  sort_order  int not null default 0,
  config      jsonb not null default '{}'::jsonb
              constraint widgets_config_check
              check (jsonb_typeof(config) = 'object' and octet_length(config::text) <= 4096),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_widget_id unique (user_id, widget_id)
);

create table public.todos (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  todo_id     varchar(255) not null,
  text        text not null check (char_length(text) between 1 and 500),
  completed   boolean not null default false,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_todo_id unique (user_id, widget_id, todo_id),
  constraint todos_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.memos (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  content     text not null default '' check (char_length(content) <= 10000),
  highlight   varchar(50) not null default 'none'
              check (highlight in ('none','yellow','green','pink','blue')),
  updated_at  timestamptz not null default now(),
  constraint unique_user_memo_widget unique (user_id, widget_id),
  constraint memos_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.ddays (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  widget_id   varchar(255) not null,
  dday_id     varchar(255) not null,
  title       varchar(255) not null check (char_length(title) >= 1),
  target_date date not null,
  created_at  timestamptz not null default now(),
  constraint unique_user_dday_id unique (user_id, widget_id, dday_id),
  constraint ddays_widget_fk foreign key (user_id, widget_id)
    references public.widgets (user_id, widget_id) on delete cascade
);

create table public.schedules (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null default auth.uid() references auth.users(id) on delete cascade,
  schedule_id varchar(255) not null,
  date_str    varchar(10)  not null check (date_str ~ '^\d{4}-\d{2}-\d{2}$'),
  title       varchar(255) not null check (char_length(title) >= 1),
  time_str    varchar(5)   check (time_str is null or time_str ~ '^([01]\d|2[0-3]):[0-5]\d$'),
  color       varchar(50),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  constraint unique_user_schedule_id unique (user_id, schedule_id)
);

-- 3. 트리거 설정
create trigger trg_widgets_updated   before update on public.widgets
  for each row execute function public.set_updated_at();
create trigger trg_todos_updated     before update on public.todos
  for each row execute function public.set_updated_at();
create trigger trg_memos_updated     before update on public.memos
  for each row execute function public.set_updated_at();
create trigger trg_schedules_updated before update on public.schedules
  for each row execute function public.set_updated_at();

create trigger trg_widgets_limit   before insert on public.widgets
  for each row execute function public.enforce_row_limit('50');
create trigger trg_todos_limit     before insert on public.todos
  for each row execute function public.enforce_row_limit('2000');
create trigger trg_ddays_limit     before insert on public.ddays
  for each row execute function public.enforce_row_limit('300');
create trigger trg_schedules_limit before insert on public.schedules
  for each row execute function public.enforce_row_limit('5000');

-- 4. 위젯 순서 변경 RPC 함수
create or replace function public.reorder_widgets(p_widget_ids text[])
returns void
language sql
security invoker
set search_path = ''
as $$
  update public.widgets w
  set sort_order = t.ord
  from unnest(p_widget_ids) with ordinality as t(widget_id, ord)
  where w.user_id = (select auth.uid())
    and w.widget_id = t.widget_id;
$$;

-- 5. RLS 설정
alter table public.widgets   enable row level security;
alter table public.todos     enable row level security;
alter table public.memos     enable row level security;
alter table public.ddays     enable row level security;
alter table public.schedules enable row level security;

create policy "owner_all" on public.widgets
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.todos
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.memos
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.ddays
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "owner_all" on public.schedules
  for all to authenticated
  using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);

-- 6. API 권한 부여
grant select, insert, update, delete
  on public.widgets, public.todos, public.memos, public.ddays, public.schedules
  to authenticated;

revoke execute on function public.reorder_widgets(text[]) from public, anon;
grant  execute on function public.reorder_widgets(text[]) to authenticated;

-- 7. 인덱스
create index idx_widgets_user_sort   on public.widgets (user_id, sort_order);
create index idx_schedules_user_date on public.schedules (user_id, date_str);

commit;
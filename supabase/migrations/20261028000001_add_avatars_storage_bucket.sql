begin;

-- 1. avatars 스토리지 버킷 생성 및 속성 정의 (5MB 제한, png/jpeg/webp 허용)
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'avatars',
  'avatars',
  true,
  5242880, -- 5MB
  array['image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = array['image/png', 'image/jpeg', 'image/webp'];

-- 2. 기존 동일 이름 정책 제거 (마이그레이션 재실행 충돌 방지)
drop policy if exists "Avatar Public Read" on storage.objects;
drop policy if exists "Avatar User Insert" on storage.objects;
drop policy if exists "Avatar User Update" on storage.objects;
drop policy if exists "Avatar User Delete" on storage.objects;

-- 3. storage.objects RLS 보안 정책 추가
-- 3-1. 아바타 이미지 전체 공개 읽기 허용
create policy "Avatar Public Read"
  on storage.objects for select
  using (bucket_id = 'avatars');

-- 3-2. 인증 유저 본인 폴더({user_id}/*) 업로드 권한
create policy "Avatar User Insert"
  on storage.objects for insert
  to authenticated
  with check (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

-- 3-3. 인증 유저 본인 폴더({user_id}/*) 수정 권한
create policy "Avatar User Update"
  on storage.objects for update
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

-- 3-4. 인증 유저 본인 폴더({user_id}/*) 삭제 권한
create policy "Avatar User Delete"
  on storage.objects for delete
  to authenticated
  using (
    bucket_id = 'avatars'
    and (storage.foldername(name))[1] = (select auth.uid()::text)
  );

commit;
-- 기존 전역 공개 조회 정책 삭제
drop policy if exists "Avatar Public Read" on storage.objects;

-- 인증된 소유자 본인 폴더만 SELECT 및 목록 조회가 가능하도록 강화
create policy "Avatar Own Read" on storage.objects
  for select to authenticated
  using (bucket_id = 'avatars' and (storage.foldername(name))[1] = (select auth.uid()::text));
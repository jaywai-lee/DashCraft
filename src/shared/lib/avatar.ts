import { createClient } from "./client";

export const getAvatarPublicUrl = (
  userMetadata?: Record<string, unknown> | null,
): string | undefined => {
  if (!userMetadata) return undefined;

  const avatarPath = userMetadata.avatar_path as string | undefined;
  if (avatarPath) {
    const supabase = createClient();
    const { data } = supabase.storage.from("avatars").getPublicUrl(avatarPath);
    return data.publicUrl;
  }

  const avatarUrl = userMetadata.avatar_url as string | undefined;
  if (avatarUrl) {
    return avatarUrl;
  }

  return undefined;
};

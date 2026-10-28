import { createClient } from "@/shared/lib/client";

export interface UserMetadataLike {
  avatar_path?: string | null;
  avatar_url?: string | null;
}

export const getAvatarPublicUrl = (
  metadata?: UserMetadataLike | null,
): string | undefined => {
  if (!metadata) return undefined;

  if (metadata.avatar_path) {
    const supabase = createClient();
    const { data } = supabase.storage
      .from("avatars")
      .getPublicUrl(metadata.avatar_path);
    return data.publicUrl;
  }

  if (metadata.avatar_url) {
    return metadata.avatar_url;
  }

  return undefined;
};

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SettingsView } from "@/features/settings/ui/SettingsView";

export default async function SettingsPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const avatarPath = user.user_metadata?.avatar_path as string | undefined;
  let avatarUrl: string | undefined = undefined;

  if (avatarPath) {
    const { data } = supabase.storage.from("avatars").getPublicUrl(avatarPath);
    avatarUrl = data.publicUrl;
  }

  return <SettingsView userEmail={user.email} avatarUrl={avatarUrl} />;
}

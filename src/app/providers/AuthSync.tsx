"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/shared/lib/client";
import { setAccessToken } from "@/features/memo-widget/api/memoKeepalive";

export function AuthSync() {
  const queryClient = useQueryClient();

  useEffect(() => {
    const supabase = createClient();
    let currentUserId: string | null = null;

    supabase.auth.getSession().then(({ data }) => {
      setAccessToken(data.session?.access_token ?? null);
      currentUserId = data.session?.user.id ?? null;
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setAccessToken(session?.access_token ?? null);
      const nextUserId = session?.user.id ?? null;

      const userChanged =
        currentUserId !== null &&
        nextUserId !== null &&
        currentUserId !== nextUserId;

      if (event === "SIGNED_OUT" || userChanged) {
        queryClient.clear();
        localStorage.removeItem("dashcraft-clock-runtime-v1");
      }

      if (
        event === "SIGNED_OUT" &&
        window.location.pathname.match(/^\/(dashboard|calendar|settings)/)
      ) {
        window.location.href = "/login";
      }

      currentUserId = nextUserId;
    });

    return () => subscription.unsubscribe();
  }, [queryClient]);

  return null;
}

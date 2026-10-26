let accessToken: string | null = null;

export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

export function flushMemoKeepalive(
  widgetId: string,
  content: string,
  highlight: string,
) {
  if (!accessToken) return;

  void fetch(
    `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/memos?on_conflict=user_id,widget_id`,
    {
      method: "POST",
      keepalive: true,
      headers: {
        "Content-Type": "application/json",
        apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        Authorization: `Bearer ${accessToken}`,
        Prefer: "resolution=merge-duplicates,return=minimal",
      },
      body: JSON.stringify({ widget_id: widgetId, content, highlight }),
    },
  );
}

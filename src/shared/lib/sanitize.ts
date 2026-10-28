import DOMPurify from "dompurify";

const MEMO_PURIFY_CONFIG = {
  ALLOWED_TAGS: [
    "p",
    "br",
    "b",
    "i",
    "u",
    "s",
    "strong",
    "em",
    "mark",
    "span",
    "div",
  ],
  ALLOWED_ATTR: ["style", "class"],
};

export const sanitizeMemoHtml = (html: string): string => {
  if (!html) return "";

  if (typeof window === "undefined") {
    return html;
  }

  return String(DOMPurify.sanitize(html, MEMO_PURIFY_CONFIG));
};

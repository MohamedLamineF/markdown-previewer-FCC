import { useMemo } from "react";
import { marked } from "marked";
import { MarkdownContent } from "../types";
import { stripHtml } from "../utils/stripHtml";

marked.setOptions({
  breaks: true,
  gfm: true,
});

export function useMarkdown(markdown: string): MarkdownContent {
  return useMemo(() => {
    const html = marked(markdown);
    const plainText = stripHtml(html);
    return { markdown, html, plainText };
  }, [markdown]);
}

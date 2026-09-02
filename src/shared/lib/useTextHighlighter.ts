"use client";

import React, { RefObject } from "react";
import { HIGHLIGHT_OPTIONS, HighlightColor } from "../config/highlight.config";
import { cn } from "./utils";

export const useTextHighLighter = (
  containerRef: RefObject<HTMLElement | null>,
  onContentChange?: (html: string) => void,
) => {
  const unwrapMarksInRange = (selection: Selection) => {
    if (!containerRef.current) return;

    const marksInContainer = Array.from(
      containerRef.current.querySelectorAll("mark"),
    );

    marksInContainer.forEach((mark) => {
      if (
        selection.containsNode(mark, true) ||
        !mark.innerText.replace(/\u200B/g, "").trim()
      ) {
        const parent = mark.parentNode;
        if (!parent) return;

        while (mark.firstChild) {
          parent.insertBefore(mark.firstChild, mark);
        }
        parent.removeChild(mark);
      }
    });
  };

  const applyHighlight = (color: HighlightColor) => {
    const selection = window.getSelection();
    if (!selection || selection.isCollapsed || !containerRef.current) return;

    const range = selection.getRangeAt(0);
    if (!containerRef.current.contains(range.commonAncestorContainer)) return;

    const selectedOption = HIGHLIGHT_OPTIONS.find((opt) => opt.id === color);

    if (color === "none") {
      unwrapMarksInRange(selection);
    } else {
      unwrapMarksInRange(selection);
      const mark = document.createElement("mark");
      mark.className = cn(
        "rounded-xs px-0 transition-colors",
        selectedOption?.bgClass,
      );
      mark.style.color = "inherit";

      try {
        range.surroundContents(mark);
      } catch {
        const fragment = range.extractContents();
        mark.appendChild(fragment);
        range.insertNode(mark);
      }
    }
    selection.removeAllRanges();

    if (containerRef.current) {
      const emptyMarks = containerRef.current.querySelectorAll("mark");
      emptyMarks.forEach((m) => {
        if (!m.textContent?.replace(/\u200B/g, "").trim()) {
          m.remove();
        }
      });

      if (onContentChange) {
        onContentChange(containerRef.current.innerHTML);
      }
    }
  };

  const exitHighlightOnKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.preventDefault();
      const selection = window.getSelection();
      if (selection) selection.removeAllRanges();
      return;
    }

    if (e.key === "Enter") {
      const selection = window.getSelection();
      if (!selection || !selection.rangeCount) return;

      const range = selection.getRangeAt(0);
      let currentElement: HTMLElement | null =
        range.startContainer.parentElement;

      while (currentElement && currentElement !== containerRef.current) {
        if (currentElement.tagName === "MARK") {
          e.preventDefault();

          const br = document.createElement("br");
          const textNode = document.createTextNode("\u200B");

          const markParent = currentElement.parentNode;
          if (markParent) {
            markParent.insertBefore(br, currentElement.nextSibling);
            markParent.insertBefore(textNode, br.nextSibling);

            const newRange = document.createRange();
            newRange.setStartAfter(br);
            newRange.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newRange);
          }

          if (onContentChange && containerRef.current) {
            onContentChange(containerRef.current.innerHTML);
          }
          break;
        }
        currentElement = currentElement.parentElement;
      }
    }
  };

  return { applyHighlight, exitHighlightOnKey };
};

"use client";

import { useState, useCallback } from "react";

export function useCopyCode() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyCode = useCallback((code: string, id: string) => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => {
          setCopiedId(id);
          setTimeout(() => setCopiedId(null), 2000);
        }).catch(() => {
          fallbackCopy(code, id);
        });
      } else {
        fallbackCopy(code, id);
      }
    } catch {
      fallbackCopy(code, id);
    }
  }, []);

  return { copiedId, copyCode };
}

function fallbackCopy(code: string, id: string) {
  try {
    const ta = document.createElement("textarea");
    ta.value = code;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  } catch {
    // silently fail
  }
  setCopiedId(id);
  setTimeout(() => setCopiedId(null), 2000);
}

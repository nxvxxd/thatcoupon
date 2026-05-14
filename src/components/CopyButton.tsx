"use client";

import { useState } from "react";

export function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="bg-emerald-800 text-white border-none px-5 py-2.5 rounded-lg font-bold text-sm cursor-pointer hover:bg-emerald-700 transition-colors"
    >
      {copied ? "COPIED!" : "COPY"}
    </button>
  );
}

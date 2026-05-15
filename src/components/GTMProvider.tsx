"use client";

import { useEffect } from "react";

const GTM_ID = "G-SLYQCDC3M5";

/**
 * Client-only Google Tag Manager provider.
 * Uses useEffect to inject scripts AFTER hydration,
 * preventing hydration mismatches caused by browser extensions
 * (e.g., Bitdefender Anti-Tracker) that modify <script> attributes.
 */
export function GTMProvider() {
  useEffect(() => {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      (window.dataLayer as unknown[]).push(args);
    }
    gtag("js", new Date());
    gtag("config", GTM_ID);

    // Inject gtag.js script dynamically
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return null;
}

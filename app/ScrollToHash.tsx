"use client";

import { useEffect } from "react";

/**
 * On load, if the URL has a hash (e.g. #writing), scroll to that section.
 * Fixes direct visits to andrewcv.vercel.app/#writing etc.
 */
export default function ScrollToHash() {
  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, []);
  return null;
}

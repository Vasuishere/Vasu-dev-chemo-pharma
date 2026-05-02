"use client";

import { useEffect } from "react";

export default function CopyProtection() {
  useEffect(() => {
    const block = (event: Event) => {
      event.preventDefault();
    };

    const blockCopyShortcut = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if ((event.ctrlKey || event.metaKey) && (key === "c" || key === "x")) {
        event.preventDefault();
      }
    };

    document.addEventListener("copy", block, true);
    document.addEventListener("cut", block, true);
    document.addEventListener("contextmenu", block, true);
    document.addEventListener("selectstart", block, true);
    document.addEventListener("dragstart", block, true);
    document.addEventListener("keydown", blockCopyShortcut, true);

    return () => {
      document.removeEventListener("copy", block, true);
      document.removeEventListener("cut", block, true);
      document.removeEventListener("contextmenu", block, true);
      document.removeEventListener("selectstart", block, true);
      document.removeEventListener("dragstart", block, true);
      document.removeEventListener("keydown", blockCopyShortcut, true);
    };
  }, []);

  return null;
}

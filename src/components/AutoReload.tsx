"use client";

import { useEffect, useRef } from "react";

export default function AutoReload() {
  const initialVersion = useRef<string | null>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    const checkVersion = async () => {
      try {
        const res = await fetch("/api/version", { cache: "no-store" });
        const data = await res.json();

        if (initialVersion.current === null) {
          // First load — store the current version
          initialVersion.current = data.version;
        } else if (data.version !== initialVersion.current) {
          // Version changed — new deployment detected, reload!
          window.location.reload();
        }
      } catch {
        // Silently ignore errors (offline, etc.)
      }
    };

    // Check immediately, then every 30 seconds
    checkVersion();
    intervalId = setInterval(checkVersion, 30_000);

    return () => clearInterval(intervalId);
  }, []);

  return null; // This component renders nothing
}

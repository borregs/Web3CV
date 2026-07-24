"use client";

import { useEffect, useRef, type ReactNode } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// Replace these placeholders with your real AdSense values
// ─────────────────────────────────────────────────────────────────────────────
const ADSENSE_CLIENT = "ca-pub-XXXXXXXXXXXXXXXX"; // your publisher ID
const ADSENSE_SLOT_HORIZONTAL = "XXXXXXXXXX"; // horizontal banner slot
const ADSENSE_SLOT_VERTICAL = "XXXXXXXXXX"; // vertical / sidebar slot

type AdFormat = "horizontal" | "vertical";

type AdBannerProps = {
  format?: AdFormat;
  className?: string;
};

/**
 * Google AdSense responsive ad unit.
 *
 * - `horizontal` — full-width banner (leaderboard / responsive)
 * - `vertical` — tall sidebar unit, hidden below lg breakpoint
 */
export function AdBanner({
  format = "horizontal",
  className = "",
}: AdBannerProps): ReactNode {
  const adRef = useRef<HTMLModElement>(null);
  const pushed = useRef(false);

  const slot =
    format === "vertical" ? ADSENSE_SLOT_VERTICAL : ADSENSE_SLOT_HORIZONTAL;

  useEffect(() => {
    if (pushed.current) return;
    try {
      ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push(
        {},
      );
      pushed.current = true;
    } catch {
      // AdSense not loaded yet — consent may not have been given
    }
  }, []);

  if (format === "vertical") {
    return (
      <aside
        className={`hidden lg:block ${className}`}
        aria-label="Advertisement"
      >
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: 160, minHeight: 600 }}
          data-ad-client={ADSENSE_CLIENT}
          data-ad-slot={slot}
          data-ad-format="vertical"
          data-full-width-responsive="false"
        />
      </aside>
    );
  }

  return (
    <aside className={`w-full ${className}`} aria-label="Advertisement">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
}

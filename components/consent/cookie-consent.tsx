"use client";

import { useEffect, useState, type ReactNode } from "react";

const CONSENT_KEY = "cookie-consent";

type ConsentState = "pending" | "accepted" | "rejected";

/**
 * Lightweight GDPR / cookie consent banner.
 *
 * When the user accepts, the AdSense script is injected dynamically so that
 * no tracking cookies are set before consent is given.
 */
export function CookieConsent(): ReactNode {
  const [consent, setConsent] = useState<ConsentState>("pending");
  const [visible, setVisible] = useState(false);

  // Read stored preference on mount
  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY) as ConsentState | null;
    if (stored === "accepted" || stored === "rejected") {
      setConsent(stored);
      if (stored === "accepted") injectAdSense();
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsent("accepted");
    setVisible(false);
    injectAdSense();
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setConsent("rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed right-4 bottom-4 left-4 z-[10000] mx-auto max-w-lg rounded-2xl border border-foreground/10 bg-background p-5 shadow-lg sm:left-auto sm:right-6 sm:bottom-6"
    >
      <p className="text-sm leading-relaxed text-foreground/80">
        This site uses cookies from Google AdSense to serve personalised ads.
        By clicking <strong>&ldquo;Accept&rdquo;</strong> you consent to the
        use of cookies for advertising purposes.{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-foreground"
        >
          Learn more
        </a>
      </p>
      <div className="mt-4 flex items-center gap-3">
        <button
          onClick={accept}
          className="focus-ring rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Accept
        </button>
        <button
          onClick={reject}
          className="focus-ring rounded-lg border border-foreground/15 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
        >
          Reject
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Dynamically inject the AdSense script only after consent
// ─────────────────────────────────────────────────────────────────────────────
function injectAdSense() {
  if (document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
    return; // already loaded
  }
  const script = document.createElement("script");
  script.src =
    "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX";
  script.async = true;
  script.crossOrigin = "anonymous";
  document.head.appendChild(script);
}

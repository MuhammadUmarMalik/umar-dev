"use client";
import { useEffect, useRef } from "react";

type Props = {
  publisherId: string;
};

export default function AdSenseLoader({ publisherId }: Props) {
  const loadedRef = useRef(false);

  useEffect(() => {
    function loadScript() {
      if (loadedRef.current) return;
      loadedRef.current = true;
      const existing = document.querySelector(
        'script[src^="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
      ) as HTMLScriptElement | null;
      if (existing) return;
      const script = document.createElement("script");
      script.setAttribute("data-ad-client", publisherId);
      script.async = true;
      script.crossOrigin = "anonymous";
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
      document.head.appendChild(script);
    }

    function onConsentUpdated() {
      // When consent is granted, load AdSense
      loadScript();
    }

    // If the user previously accepted, load immediately
    try {
      const stored = localStorage.getItem("cookie-consent");
      if (stored) {
        loadScript();
      }
    } catch {}

    window.addEventListener("consent-updated", onConsentUpdated as EventListener);
    return () => window.removeEventListener("consent-updated", onConsentUpdated as EventListener);
  }, [publisherId]);

  return null;
}



"use client";
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";

export const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const value = localStorage.getItem(STORAGE_KEY);
      if (!value) setVisible(true);
    } catch {}
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ acceptedAt: Date.now() }));
    } catch {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-3 sm:px-4 md:px-6 lg:px-8 pb-4">
      <div className="mx-auto max-w-4xl glass rounded-lg p-4 md:p-5 shadow-xl border border-slate-800/60 bg-slate-900/70">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <p className="text-sm text-gray-300 flex-1">
            This site uses cookies to enhance your experience, analyze traffic, and remember
            preferences. By using the site, you agree to this use.
          </p>
          <div className="flex items-center gap-2">
            <a href="/privacy-policy" className="text-xs text-gray-300 hover:text-white underline underline-offset-2">
              Learn more
            </a>
            <button
              onClick={accept}
              className="inline-flex items-center justify-center rounded-md bg-blue-600 hover:bg-blue-500 transition-colors px-3 py-2 text-sm font-medium"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



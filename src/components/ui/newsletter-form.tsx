"use client";
import React, { useMemo, useState } from "react";

type Props = {
  className?: string;
  inputClassName?: string;
  buttonClassName?: string;
  placeholder?: string;
  buttonText?: string;
};

export default function NewsletterForm({
  className,
  inputClassName,
  buttonClassName,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Prefer env, but fall back to the known working script the site already uses
  const GOOGLE_SHEET_WEBAPP_URL = useMemo(() => {
    return "https://script.google.com/macros/s/AKfycbzFKYjND8hoA4e0Isggn-mUkyZoJfMWzqGiqh-l1DpyfPsTgrcCypzSivuJsTZKOEsdrA/exec";
  }, []);

  const validateEmail = (val: string) => /.+@.+\..+/.test(val.trim());

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!validateEmail(trimmed)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    if (!GOOGLE_SHEET_WEBAPP_URL) {
      setStatus("Missing Google Sheet Web App URL.");
      return;
    }

    const payload = {
      email: trimmed,
      form: "newsletter",
      sheet: "newsletter",
      sourcePath: typeof window !== "undefined" ? window.location.pathname : "",
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    } as const;

    let submitted = false;
    try {
      setSubmitting(true);
      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? "")));
      params.append("cb", String(Date.now()));
      const qs = params.toString();

      if (qs.length <= 1900) {
        await fetch(`${GOOGLE_SHEET_WEBAPP_URL}?${qs}`, {
          method: "GET",
          mode: "no-cors",
          keepalive: true,
        });
        setEmail("");
        setStatus("Thanks! You are subscribed.");
        submitted = true;
        return;
      }
      throw new Error("QUERY_TOO_LONG");
    } catch {
      try {
        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? "")));
        params.append("cb", String(Date.now()));
        const blob = new Blob([params.toString()], { type: "application/x-www-form-urlencoded" });
        const ok = typeof navigator !== "undefined" && navigator.sendBeacon
          ? navigator.sendBeacon(String(GOOGLE_SHEET_WEBAPP_URL), blob)
          : false;
        if (ok) {
          setEmail("");
          setStatus("Thanks! You are subscribed.");
          submitted = true;
          return;
        }
      } catch {}

      try {
        const fd = new FormData();
        Object.entries(payload).forEach(([k, v]) => fd.append(k, String(v ?? "")));
        await fetch(GOOGLE_SHEET_WEBAPP_URL + `?cb=${Date.now()}` , {
          method: "POST",
          body: fd,
          mode: "no-cors",
          keepalive: true,
        });
        setEmail("");
        setStatus("Thanks! You are subscribed.");
        submitted = true;
      } catch {
        setStatus("Something went wrong. Please try again later.");
      }
    } finally {
      setSubmitting(false);
      if (submitted) {
        try { setEmail(""); } catch {}
      }
    }
  };

  return (
    <form onSubmit={handleSubscribe} className={className} aria-describedby={status ? "newsletter-status" : undefined}>
      <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          required
          className={inputClassName || "flex-1 px-4 py-3 bg-slate-800/50 border border-slate-700/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50"}
        />
        <button
          type="submit"
          disabled={submitting}
          className={buttonClassName || "px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-900/30 border border-blue-500/30 disabled:opacity-70 disabled:cursor-not-allowed"}
        >
          {submitting ? "Subscribing..." : buttonText}
        </button>
      </div>
      {status && (
        <div id="newsletter-status" className={`mt-3 text-sm text-center ${status.includes("Thanks") ? "text-emerald-300" : "text-amber-300"}`}>
          {status}
        </div>
      )}
    </form>
  );
}

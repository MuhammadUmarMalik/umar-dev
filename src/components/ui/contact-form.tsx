"use client";
import React, { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  // Configure your Google Apps Script Web App URL in .env.local as NEXT_PUBLIC_GSHEET_WEBAPP_URL
  const GOOGLE_SHEET_WEBAPP_URL = "https://script.google.com/macros/s/AKfycbyKF2oed8mTTmElPMtwd3gWxQUfajnDkz7aX06MHHOquhp7ZNcOWO0p0yukGB28DlcZPA/exec";

  // Ensures all fields clear (including selects with placeholder)
  const resetFormFields = (form: HTMLFormElement) => {
    form.reset();
    try {
      const sel1 = form.querySelector('#projectType') as HTMLSelectElement | null;
      if (sel1) sel1.selectedIndex = 0;
      const sel2 = form.querySelector('#referralSource') as HTMLSelectElement | null;
      if (sel2) sel2.selectedIndex = 0;
      const inputs = form.querySelectorAll('input');
      inputs.forEach((inp) => { if ((inp as HTMLInputElement).type !== 'submit') (inp as HTMLInputElement).value = ''; });
      const ta = form.querySelector('textarea') as HTMLTextAreaElement | null;
      if (ta) ta.value = '';
    } catch {}
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;
    const formData = new FormData(formEl);
    const name = (formData.get("name") as string | null)?.toString().trim();
    const email = (formData.get("email") as string | null)?.toString().trim();
    const country = (formData.get("country") as string | null)?.toString().trim() || "";
    const projectType = (formData.get("projectType") as string | null)?.toString().trim() || "";
    const deadline = (formData.get("deadline") as string | null)?.toString().trim() || "";
    const referralSource = (formData.get("referralSource") as string | null)?.toString().trim() || "";
    const message = (formData.get("message") as string | null)?.toString().trim();

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    if (!GOOGLE_SHEET_WEBAPP_URL) {
      setStatus("Missing Google Sheet Web App URL. Please set NEXT_PUBLIC_GSHEET_WEBAPP_URL.");
      return;
    }

    const payload = {
      name,
      email,
      country,
      projectType,
      deadline,
      referralSource,
      message,
      submittedAt: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : '',
      form: 'contact'
    } as const;

    let submitted = false;
    try {
      setSubmitting(true);
      // Single, preflight-free submission: GET with query params (handled by doGet) when short enough
      const params = new URLSearchParams();
      Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));
      params.append('cb', String(Date.now()));
      const queryString = params.toString();
      if (queryString.length <= 1900) {
        await fetch(`${GOOGLE_SHEET_WEBAPP_URL}?${queryString}`, {
          method: 'GET',
          mode: 'no-cors',
          keepalive: true,
        });
        resetFormFields(formEl);
        setStatus("Thanks! Your message has been sent.");
        submitted = true;
        return;
      }
      // If the query is too long for a safe GET, use fallbacks
      throw new Error('QUERY_TOO_LONG');
    } catch {
      // Fallback 1: sendBeacon (fires-and-forgets without CORS/preflight)
      try {
        const params = new URLSearchParams();
        Object.entries(payload).forEach(([k, v]) => params.append(k, String(v ?? '')));
        params.append('cb', String(Date.now()));
        const blob = new Blob([params.toString()], { type: 'application/x-www-form-urlencoded' });
        const ok = typeof navigator !== 'undefined' && navigator.sendBeacon
          ? navigator.sendBeacon(GOOGLE_SHEET_WEBAPP_URL, blob)
          : false;
        if (ok) {
          resetFormFields(formEl);
          setStatus("Thanks! Your message has been sent.");
          submitted = true;
          return;
        }
      } catch {}

      // Fallback 2: last-chance fetch with FormData no-cors
      try {
        const fd = new FormData();
        Object.entries(payload).forEach(([k, v]) => fd.append(k, String(v ?? '')));
        await fetch(GOOGLE_SHEET_WEBAPP_URL + `?cb=${Date.now()}`, {
          method: 'POST',
          body: fd,
          mode: 'no-cors',
          keepalive: true,
        });
        resetFormFields(formEl);
        setStatus("Thanks! Your message has been sent.");
        submitted = true;
      } catch {
        setStatus("Something went wrong. Please try again later.");
      }
    } finally {
      setSubmitting(false);
      // Extra safety: ensure fields are cleared when submission succeeded
      if (submitted) {
        try { resetFormFields(formEl); } catch {}
      }
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4" aria-describedby={status ? 'form-status' : undefined}>
      <div className="space-y-3 [&>div]:transition-all [&>div]:duration-200 [&>div:focus-within]:translate-x-0.5 [&>div:focus-within]:scale-[1.01]">
        {/* Name field */}
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Name"
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white placeholder:text-slate-400/70 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          />
        </div>
        
        {/* Email field */}
        <div className="relative">
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Email"
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white placeholder:text-slate-400/70 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          />
        </div>

        {/* Country field */}
        <div className="relative">
          <input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white placeholder:text-slate-400/70 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          />
        </div>
        
        {/* Project type field - simplified dropdown */}
        <div className="relative">
          <select 
            id="projectType" 
            name="projectType" 
            defaultValue=""
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          >
            <option value="" disabled>Select project type</option>
            <option value="Web App">Web App</option>
            <option value="Mobile App">Mobile App</option>
            <option value="WordPress Development">WordPress Development</option>
            <option value="API/Backend">API/Backend</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>

        {/* Deadline field */}
        <div className="relative">
          <input
            id="deadline"
            name="deadline"
            type="date"
            placeholder="Project Deadline"
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white placeholder:text-slate-400/70 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          />
        </div>

        {/* How did you find me field */}
        <div className="relative">
          <select 
            id="referralSource" 
            name="referralSource" 
            defaultValue=""
            className="w-full h-11 px-4 rounded-lg bg-[#131b2e] border border-slate-700/30 text-white appearance-none focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 hover:border-slate-600/50 transition-all duration-200 shadow-sm shadow-blue-500/5"
          >
            <option value="" disabled>How did you find me?</option>
            <option value="Google">Google Search</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="GitHub">GitHub</option>
            <option value="Referral">Personal Referral</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
        
        {/* Message field */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Your message"
            className="w-full px-4 py-3 rounded-lg bg-[#131b2e] border border-blue-500/40 text-white placeholder:text-slate-400/70 focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 hover:border-blue-500/50 transition-all duration-200 resize-none shadow-[0_0_5px_rgba(59,130,246,0.3)]"
          />
        </div>
      </div>
      
      {/* Status message */}
      {status && (
        <div id="form-status" className={`rounded-md p-3 text-sm animate-fadeIn flex items-center ${status.includes('Thanks') ? 'bg-emerald-900/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-900/20 text-amber-300 border border-amber-500/30'}`}>
          <span className={`mr-2 flex-shrink-0 ${status.includes('Thanks') ? 'text-emerald-400' : 'text-amber-400'}`}>
            {status.includes('Thanks') ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            )}
          </span>
          {status}
        </div>
      )}
      
      {/* Submit button */}
      <div className="flex flex-col sm:flex-row gap-3 items-center">
        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-medium transition-all duration-300 shadow-lg hover:shadow-[0_4px_20px_rgba(79,70,229,0.45)] hover:-translate-y-0.5 active:translate-y-0 border border-indigo-500/30 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none relative overflow-hidden group"
        >
          <span className="absolute inset-0 overflow-hidden rounded-lg">
            <span className="absolute left-0 aspect-square w-16 -translate-x-full animate-[shine_1.5s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shine_1s_ease-in-out_infinite]"></span>
          </span>
          {submitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
              Submit Message
            </>
          )}
        </button>
        
        <div className="flex w-full sm:w-auto gap-3">
          <a
            href="https://wa.me/923062617205?text=Hi%20Umar%2C%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
            WhatsApp
          </a>
          <a
            href="https://calendly.com/umarmalik-cs711/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book a call
          </a>
        </div>
      </div>
    </form>
  );
}



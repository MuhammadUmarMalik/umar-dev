"use client";
import React, { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const projectType = formData.get("projectType");
    const budget = formData.get("budget");
    const timeline = formData.get("timeline");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setStatus("Please fill out all fields.");
      return;
    }

    try {
      setSubmitting(true);
      await new Promise((res) => setTimeout(res, 800));
      setStatus("Thanks! Your message has been received.");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("Something went wrong. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 glass rounded-lg p-6" aria-describedby={status ? 'form-status' : undefined}>
      <div>
        <label htmlFor="name" className="block text-sm text-gray-300 mb-1">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid sm:grid-cols-3 gap-3">
        <div>
          <label htmlFor="projectType" className="block text-sm text-gray-300 mb-1">Project Type</label>
          <select id="projectType" name="projectType" className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Web App</option>
            <option>Mobile App</option>
            <option>API/Backend</option>
            <option>UI/UX Design</option>
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm text-gray-300 mb-1">Budget</label>
          <select id="budget" name="budget" className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>$500–$1k</option>
            <option>$1k–$5k</option>
            <option>$5k–$10k</option>
            <option>$10k+</option>
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="block text-sm text-gray-300 mb-1">Timeline</label>
          <select id="timeline" name="timeline" className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>ASAP</option>
            <option>1–2 months</option>
            <option>3–6 months</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md bg-slate-900/60 border border-slate-700 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <a
          href="https://wa.me/923062617205?text=Hi%20Umar%2C%20I'd%20like%20to%20discuss%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/10"
        >
          WhatsApp
        </a>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-md border border-blue-500/40 text-blue-300 hover:bg-blue-500/10"
        >
          Book a call
        </a>
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] transition-colors px-4 py-2 font-medium active:scale-[0.98]"
      >
        {submitting ? 'Sending…' : 'Send Message'}
      </button>
      {status && <p id="form-status" className="text-sm text-gray-300">{status}</p>}
    </form>
  );
}



import React from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How this site uses cookies, analytics, and handles your data, including AdSense disclosures.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy",
    description: "Cookie usage, analytics, and data handling details.",
    url: "/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy",
    description: "Cookie usage, analytics, and data handling details.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle={`Last updated: ${new Date().toLocaleDateString()}`}
      />
      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
            <p>
              This Privacy Policy describes how this website collects, uses, and
              protects your information. By using this site, you agree to the
              terms described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Cookies</h2>
            <p className="mb-3">
              We use cookies and similar technologies to improve user
              experience, analyze site traffic, and understand where our
              audience is coming from. You can control cookies through your
              browser settings.
            </p>
            <p className="text-sm text-gray-400">
              Example: We may remember your preferences (such as theme or
              language) and measure anonymized usage metrics to improve the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Data We Collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details you voluntarily provide (e.g., name, email) via
                forms or direct email.
              </li>
              <li>
                Usage data such as pages visited, approximate location, device
                and browser information collected via analytics tools.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">How We Use Data</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide services.</li>
              <li>To improve site performance, content, and user experience.</li>
              <li>To measure engagement and traffic using analytics tools.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Advertising and Google Ads</h2>
            <p>
              After AdSense approval, we may display Google ads on this site.
              Google and its partners may use cookies to serve ads based on
              your prior visits to this and other websites. This may include the
              use of anonymized identifiers. You can opt out of personalized
              advertising by visiting Google’s Ads Settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Services</h2>
            <p>
              We may use third-party analytics or form services. These providers
              process data on our behalf and are bound by their own privacy
              policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Data Retention</h2>
            <p>
              We retain personal information only as long as necessary for the
              purposes set out in this policy, unless a longer retention period
              is required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Your Choices</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Disable cookies in your browser settings.</li>
              <li>Request access, correction, or deletion of your data.</li>
              <li>Opt out of personalized ads via Google’s Ads Settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              For privacy questions, contact: <a className="text-blue-400 hover:underline" href="mailto:umarmalik.cs711@gmail.com">umarmalik.cs711@gmail.com</a>
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}



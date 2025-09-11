import React from "react";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";

export const metadata = {
  title: "Terms & Conditions",
  description: "Terms of use and disclaimer for Muhammad Umar's portfolio website.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle={`Last updated: ${new Date().toLocaleDateString()}`}
      />
      <Section>
        <div className="max-w-3xl mx-auto space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Acceptance of Terms</h2>
            <p>
              By accessing and using this website, you agree to comply with and be bound by these Terms &
              Conditions. If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Use of Content</h2>
            <p>
              Content on this site is for informational and portfolio purposes only. You may not copy,
              reproduce, redistribute, or use content without prior written permission, except where
              explicitly allowed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">No Warranties</h2>
            <p>
              This website is provided "as is" without warranties of any kind. We do not warrant that the
              site will be error-free or uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for any indirect, incidental,
              consequential, or punitive damages arising from your use of the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Third-Party Links</h2>
            <p>
              This site may contain links to third-party websites. We are not responsible for their content
              or practices and provide such links for convenience only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Advertising Disclaimer</h2>
            <p>
              After approval, Google AdSense or other ads may be displayed. Ads are provided by third
              parties and may use cookies to serve relevant content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Intellectual Property Disclaimer</h2>
            <p>
              All trademarks, logos, and brand names used in showcased projects belong to their respective
              owners. Use of these names, logos, and brands does not imply endorsement.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms & Conditions from time to time. Continued use of the site following
              changes indicates your acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-3">Contact</h2>
            <p>
              Questions about these Terms? Contact <a className="text-blue-400 hover:underline" href="mailto:umarmalik.cs711@gmail.com">umarmalik.cs711@gmail.com</a>.
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}



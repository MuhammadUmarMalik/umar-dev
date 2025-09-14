import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function GoogleAnalytics() {
  if (!GA_ID || process.env.NODE_ENV !== 'production') return null;
  return (
    <>
      {/* GA4 with Consent Mode: consent defaults are set in layout beforeInteractive */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-gtag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);} 
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });

          // Optional: send page_view after consent updates
          window.addEventListener('consent-updated', function(){
            try { gtag('event', 'page_view'); } catch(e) {}
          });
        `}
      </Script>
    </>
  );
}



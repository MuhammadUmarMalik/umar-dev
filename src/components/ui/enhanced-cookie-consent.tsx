"use client";
import React, { useEffect, useState } from "react";

const STORAGE_KEY = "cookie-consent";
const REGION_STORAGE_KEY = "user-region";

// TCF v2.0 purposes
const PURPOSES = [
  {
    id: "analytics",
    title: "Analytics",
    description: "We use analytics cookies to understand how visitors interact with our website.",
    required: false,
  },
  {
    id: "ad_storage",
    title: "Advertising Storage",
    description: "Enables storage (such as cookies) related to advertising.",
    required: false,
  },
  {
    id: "ad_user_data",
    title: "Ad User Data",
    description: "Allows the use of user data for advertising purposes.",
    required: false,
  },
  {
    id: "ad_personalization",
    title: "Ad Personalization",
    description: "Enables personalized advertising based on user data.",
    required: false,
  },
];

type ConsentState = {
  analytics: boolean;
  ad_storage: boolean;
  ad_user_data: boolean;
  ad_personalization: boolean;
  acceptedAt?: number;
};

const DEFAULT_CONSENT: ConsentState = {
  analytics: false,
  ad_storage: false,
  ad_user_data: false,
  ad_personalization: false,
};

export const EnhancedCookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(DEFAULT_CONSENT);
  const [isEEARegion, setIsEEARegion] = useState(false);

  useEffect(() => {
    // Check if user is in EEA, UK, or Switzerland
    const checkRegion = async () => {
      try {
        // First check if we've already determined region
        const storedRegion = localStorage.getItem(REGION_STORAGE_KEY);
        if (storedRegion) {
          setIsEEARegion(storedRegion === "true");
          return;
        }

        // Attempt to detect region - in production you'd use a proper geolocation service
        // For demo purposes, we'll assume EEA for everyone
        const isEEA = true; // Replace with actual region detection
        
        localStorage.setItem(REGION_STORAGE_KEY, isEEA.toString());
        setIsEEARegion(isEEA);
      } catch {
        // Default to showing consent for safety
        setIsEEARegion(true);
      }
    };

    // Check for existing consent
    const checkConsent = () => {
      try {
        const storedConsent = localStorage.getItem(STORAGE_KEY);
        if (!storedConsent) {
          setVisible(true);
          return;
        }

        const parsedConsent = JSON.parse(storedConsent);
        setConsent(parsedConsent);
      } catch {
        setVisible(true);
      }
    };

    checkRegion().then(checkConsent);
  }, []);

  const updateConsent = (newConsent: ConsentState) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newConsent));
    } catch {}

    try {
      // Update Google Consent Mode
      type DataLayerType = unknown[];
      
      const w = window as unknown as { dataLayer?: DataLayerType };
      w.dataLayer = w.dataLayer || [];
      
      function gtag(...args: unknown[]) {
        if (w.dataLayer) w.dataLayer.push(args);
      }

      gtag("consent", "update", {
        analytics_storage: newConsent.analytics ? "granted" : "denied",
        ad_storage: newConsent.ad_storage ? "granted" : "denied",
        ad_user_data: newConsent.ad_user_data ? "granted" : "denied",
        ad_personalization: newConsent.ad_personalization ? "granted" : "denied",
      });

      // Notify listeners (e.g., AdSenseLoader)
      window.dispatchEvent(
        new CustomEvent("consent-updated", { detail: { consent: newConsent } })
      );
    } catch {}

    setConsent(newConsent);
    setVisible(false);
  };

  const acceptAll = () => {
    const newConsent: ConsentState = {
      analytics: true,
      ad_storage: true,
      ad_user_data: true,
      ad_personalization: true,
      acceptedAt: Date.now(),
    };
    updateConsent(newConsent);
  };

  const rejectAll = () => {
    const newConsent: ConsentState = {
      ...DEFAULT_CONSENT,
      acceptedAt: Date.now(),
    };
    updateConsent(newConsent);
  };

  const savePreferences = () => {
    const newConsent: ConsentState = {
      ...consent,
      acceptedAt: Date.now(),
    };
    updateConsent(newConsent);
  };

  const handleToggle = (id: keyof ConsentState) => {
    setConsent((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Only show for EEA/UK/Switzerland users or if we can't determine region
  if (!visible || (!isEEARegion && localStorage.getItem(STORAGE_KEY))) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-5 sm:p-6">
          <h2 className="text-xl font-semibold mb-2">Cookie Consent</h2>
          <p className="text-sm text-gray-300 mb-4">
            We use cookies to enhance your browsing experience, serve personalized ads or content, and 
            analyze our traffic. By clicking &quot;Accept All&quot;, you consent to our use of cookies as described 
            in our <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a>.
          </p>

          {expanded && (
            <div className="mt-4 mb-5 space-y-4 border-t border-slate-800 pt-4">
              <p className="text-sm text-gray-400">
                Customize your cookie preferences below. Required cookies are necessary for the website to function and 
                cannot be disabled.
              </p>
              
              {PURPOSES.map((purpose) => (
                <div key={purpose.id} className="flex items-start gap-3">
                  <div className="pt-0.5">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={!!consent[purpose.id as keyof ConsentState]}
                        onChange={() => handleToggle(purpose.id as keyof ConsentState)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium">{purpose.title}</h3>
                    <p className="text-xs text-gray-400">{purpose.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3 mt-5">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-4 py-2 text-sm border border-slate-700 hover:border-slate-600 rounded-md transition-colors"
            >
              {expanded ? "Hide Preferences" : "Customize Preferences"}
            </button>
            <button
              onClick={rejectAll}
              className="px-4 py-2 text-sm border border-slate-700 hover:border-slate-600 rounded-md transition-colors"
            >
              Reject All
            </button>
            {expanded ? (
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition-colors font-medium"
              >
                Save Preferences
              </button>
            ) : (
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-md transition-colors font-medium"
              >
                Accept All
              </button>
            )}
          </div>
        </div>
        <div className="bg-slate-950/50 px-6 py-3 text-xs text-gray-400">
          <p>
            This site uses cookies to improve your experience and for advertising purposes. 
            By clicking &quot;Accept All&quot;, you agree to our use of cookies.
          </p>
        </div>
      </div>
    </div>
  );
};

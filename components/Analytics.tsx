import Script from "next/script";

// Renders nothing until NEXT_PUBLIC_GA_ID is set (Vercel/Netlify env var or
// .env.local) — no fabricated measurement ID, so this is safe to ship now
// and activates the moment a real GA4 ID is added.
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}

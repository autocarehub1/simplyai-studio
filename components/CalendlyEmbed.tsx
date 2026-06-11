"use client";

import { useEffect } from "react";
import Script from "next/script";

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export default function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
      <div
        className="calendly-inline-widget w-full"
        data-url={url}
        style={{ minWidth: "320px", height: `${height}px` }}
      />
    </>
  );
}

import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#0D1F35",
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201,146,42,0.25) 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 900,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
          }}
        >
          <span>Simply</span>
          <span style={{ color: "#E8B84B" }}>AI</span>
          <span>&nbsp;Studio</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "rgba(255,255,255,0.7)",
          }}
        >
          AI Voice Agents for Small Businesses
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            color: "#E8B84B",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          San Antonio, TX
        </div>
      </div>
    ),
    { ...size }
  );
}

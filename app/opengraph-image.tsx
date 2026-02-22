import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default async function og() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #000, #0a0a0a)",
          color: "#e5ecff",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              letterSpacing: -1,
              textAlign: "center",
              lineHeight: 1.1,
            }}
          >
            Idearockers — Create clarity. Unlock growth. Live better.
          </div>
          <div style={{ fontSize: 28, opacity: 0.9 }}>
            Built with AI, designed for humans.
          </div>
        </div>
      </div>
    ),
    size,
  )
}



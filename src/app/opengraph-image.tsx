import { ImageResponse } from "next/og";

export const alt = "DigiProspect Agency : agence web à Abidjan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", padding: 72 }}>
        <div style={{ display: "flex", height: 12, width: 240 }}>
          <div style={{ flex: 1, background: "#f77f00" }} />
          <div style={{ flex: 1, background: "#e3e5e1" }} />
          <div style={{ flex: 1, background: "#009a44" }} />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 84, fontWeight: 800, color: "#1f2326", lineHeight: 1.05 }}>Agence web à Abidjan</div>
          <div style={{ fontSize: 38, color: "#565d63", marginTop: 24 }}>Sites web, boutiques en ligne et référencement local</div>
        </div>
        <div style={{ fontSize: 34, fontWeight: 700, color: "#1f2326" }}>DigiProspect Agency</div>
      </div>
    ),
    size,
  );
}

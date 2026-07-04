import { ImageResponse } from "next/og";
import { WEDDING } from "@/lib/constants";

export const runtime = "edge";
export const alt = `دعوة زفاف ${WEDDING.groomName} و${WEDDING.brideName}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        dir="rtl"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at center, #fffaf6 0%, #f8e7db 58%, #e9cfc2 100%)",
          color: "#4a3a2a",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 30,
            display: "flex",
            border: "3px solid #c9a227",
            borderRadius: 34,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 48,
            display: "flex",
            border: "1px solid rgba(201,162,39,.65)",
            borderRadius: 24,
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 34, color: "#9a7412", marginBottom: 32 }}>
            دعوة زفاف
          </div>
          <div style={{ fontSize: 92, lineHeight: 1.1, fontWeight: 700 }}>
            {WEDDING.groomName}
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              margin: "18px 0",
              color: "#c9a227",
              fontSize: 36,
            }}
          >
            <span>────────</span>
            <span>♥</span>
            <span>────────</span>
          </div>
          <div style={{ fontSize: 92, lineHeight: 1.1, fontWeight: 700 }}>
            {WEDDING.brideName}
          </div>
          <div style={{ fontSize: 27, color: "#806c5c", marginTop: 34 }}>
            نتشرف بدعوتكم لمشاركتنا فرحتنا
          </div>
        </div>
      </div>
    ),
    size,
  );
}

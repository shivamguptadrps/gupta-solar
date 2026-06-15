import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Gupta Solar Energy — Banda | Rooftop Solar & PM Surya Ghar Subsidy",
  description:
    "Banda (UP) ki bharosemand solar dukaan, 2012 se. On-grid, off-grid aur hybrid solar installation. PM Surya Ghar subsidy ka pura paperwork. Free survey ke liye call 8354809020.",
  keywords: "solar Banda, rooftop solar UP, PM Surya Ghar Banda, solar installation Banda, Gupta Solar Energy",
  openGraph: {
    title: "Gupta Solar Energy — Banda",
    description: "Apni chhat se bijli banao, bill ko zero karo. Solar installation Banda, Estd. 2012.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

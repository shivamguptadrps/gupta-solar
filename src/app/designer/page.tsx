import Navbar from "@/components/Navbar";
import DesignerClient from "@/components/DesignerClient";
import { WhatsAppFloat } from "@/components/Footer";

export const metadata = {
  title: "3D Solar Designer — Gupta Solar Energy, Banda",
  description: "Apni chhat pe solar khud design karein. Ghar ko rotate karke dekhiye, panel badhaiye, turant kW aur subsidy dekhiye.",
};

export default function DesignerPage() {
  return (
    <>
      <Navbar />
      <div className="intro">
        <div className="eyebrow">Interactive 3D Tool</div>
        <h1>
          Apni chhat pe solar <span style={{ color: "var(--sun-deep)" }}>khud design karein</span>
        </h1>
        <p>Ghar ko ghumaakar dekhiye, panel ki sankhya badhaiye, aur turant kW, subsidy aur bachat dekhiye.</p>
      </div>
      <DesignerClient />
      <WhatsAppFloat />
    </>
  );
}

"use client";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import { BUSINESS, CONFIG, calcSubsidy } from "@/lib/data";

// 3D ko sirf browser mein load karo (server pe nahi)
const House3D = dynamic(() => import("@/components/House3D"), {
  ssr: false,
  loading: () => (
    <div className="loader3d">
      <div className="spin" />
      <span>3D ghar load ho raha hai…</span>
    </div>
  ),
});

const rupee = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function DesignerClient() {
  const [panels, setPanels] = useState(6);
  const [ctype, setCtype] = useState<"res" | "com">("res");
  const [sys, setSys] = useState<"on" | "hy" | "off">("on");

  const kw = (panels * CONFIG.wattPerPanel) / 1000;
  const cost = kw * CONFIG.costPerKw * (sys === "hy" ? 1.35 : sys === "off" ? 1.5 : 1);
  const sub = calcSubsidy(kw, ctype === "res", sys !== "off");
  const final = cost - sub.total;
  const unitsDay = kw * CONFIG.genPerKwDay;
  const save = unitsDay * 30 * CONFIG.unitRate;

  const sysName = { on: "On-grid", hy: "Hybrid", off: "Off-grid" }[sys];
  const typeName = { res: "Ghar", com: "Dukaan" }[ctype];
  const waMsg = encodeURIComponent(
    `Namaste ${BUSINESS.name}! Maine 3D tool pe design banaya:\n` +
      `Type: ${typeName} / ${sysName}\n` +
      `Panels: ${panels} (${kw.toFixed(1)} kW)\n` +
      `Anumaanit kharch: ${rupee(final)} (subsidy ke baad)\n` +
      `Mujhe quote chahiye.`
  );

  return (
    <div className="studio">
      <div className="stage">
        <div className="stage-badge">🏠 Aapka ghar (demo)</div>
        <House3D panels={panels} />
        <div className="hint">🖱️ Drag karke ghumaayein • scroll se zoom</div>
      </div>

      <div className="panel">
        <h3>System banayein</h3>
        <div className="psub">Slider aur button se apna system set karein.</div>

        <div className="ctrl">
          <label>
            Panel ki sankhya <b>{panels} panel</b>
          </label>
          <input
            type="range" min={2} max={18} step={2} value={panels}
            onChange={(e) => setPanels(parseInt(e.target.value))}
          />
        </div>

        <div className="ctrl">
          <label>Customer type</label>
          <div className="seg">
            <button className={ctype === "res" ? "active" : ""} onClick={() => setCtype("res")}>Ghar</button>
            <button className={ctype === "com" ? "active" : ""} onClick={() => setCtype("com")}>Dukaan</button>
          </div>
        </div>

        <div className="ctrl">
          <label>System type</label>
          <div className="seg">
            <button className={sys === "on" ? "active" : ""} onClick={() => setSys("on")}>On-grid</button>
            <button className={sys === "hy" ? "active" : ""} onClick={() => setSys("hy")}>Hybrid</button>
            <button className={sys === "off" ? "active" : ""} onClick={() => setSys("off")}>Off-grid</button>
          </div>
        </div>

        <div className="stats">
          <Stat cls="kw" label="System size" value={`${kw.toFixed(1)} kW`} />
          <Stat label="System kharch" value={rupee(cost)} />
          <Stat label="Subsidy" value={sub.total ? "– " + rupee(sub.total) : "Nahi milegi"} />
          <Stat cls="final" label="Aapka kharch" value={rupee(final)} />
          <Stat cls="save" label="Mahine ki bachat" value={`${rupee(save)} /mo`} />
          <Stat label="Roz bijli banegi" value={`${unitsDay.toFixed(0)} units`} />
        </div>

        <a className="cta" href={`https://wa.me/${BUSINESS.whatsapp}?text=${waMsg}`} target="_blank" rel="noopener noreferrer">
          💬 Ye design WhatsApp pe bhejein
        </a>
        <div className="note3d">
          *Andaaza hai. Asli daam survey, chhat aur brand pe depend karta hai.
          <br />Subsidy PM Surya Ghar + UPNEDA ke hisaab se.
        </div>
        <Link href="/" className="back-link">← Wapas website pe</Link>
      </div>
    </div>
  );
}

function Stat({ label, value, cls = "" }: { label: string; value: string; cls?: string }) {
  return (
    <div className={"stat " + cls}>
      <span>{label}</span>
      <span className="v">{value}</span>
    </div>
  );
}

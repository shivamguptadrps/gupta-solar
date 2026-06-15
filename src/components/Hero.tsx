"use client";
import Link from "next/link";
import { useState } from "react";
import { BUSINESS, CONFIG, calcSubsidy } from "@/lib/data";

const rupee = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Hero() {
  const [mode, setMode] = useState<"bill" | "area">("bill");
  const [bill, setBill] = useState("");
  const [area, setArea] = useState("");
  const [ctype, setCtype] = useState<"res" | "com">("res");

  let kw = 0;
  if (mode === "bill") {
    const b = parseFloat(bill) || 0;
    kw = b / CONFIG.unitRate / (CONFIG.genPerKwDay * 30);
  } else {
    const a = parseFloat(area) || 0;
    kw = a / CONFIG.roofPerKw;
  }
  const show = kw > 0.2;
  kw = Math.min(10, Math.max(1, Math.round(kw * 10) / 10));

  const cost = kw * CONFIG.costPerKw;
  const sub = calcSubsidy(kw, ctype === "res", true);
  const final = cost - sub.total;
  const monthlySave = kw * CONFIG.genPerKwDay * 30 * CONFIG.unitRate;
  const months = final / monthlySave;
  const py = Math.floor(months / 12);
  const pm = Math.round(months % 12);

  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">
            Rooftop Solar • On-Grid • Hybrid • Off-Grid • Banda, UP • Estd. {BUSINESS.estd}
          </div>
          <h1>
            Apni chhat se <span className="hl">bijli banao</span>, bill ko zero karo.
          </h1>
          <p className="lead">
            Banda district ke ghar aur dukaano ke liye hum solar ka design, installation aur PM
            Surya Ghar subsidy ka pura paperwork karte hain. Kam paisa lagao, 25+ saal bachao.
          </p>
          <div className="hero-cta">
            <Link href="/designer" className="btn">
              🏠 3D mein design karein
            </Link>
            <a href="#contact" className="btn btn-sky">
              Baat karein
            </a>
          </div>
          <div className="trust">
            <div>
              <span>₹1.08L</span>3kW pe total subsidy*
            </div>
            <div>
              <span>3–4 saal</span>Paisa wasool
            </div>
            <div>
              <span>25 saal</span>Panel ki life
            </div>
          </div>
        </div>

        <div className="calc-card" id="calculator">
          <h3>☀ Solar Bachat Calculator</h3>
          <div className="csub">Apna bill YA chhat daaliye — turant kharch aur subsidy dekhiye.</div>

          <div className="toggle">
            <button className={mode === "bill" ? "active" : ""} onClick={() => setMode("bill")}>
              Bill se
            </button>
            <button className={mode === "area" ? "active" : ""} onClick={() => setMode("area")}>
              Chhat area se
            </button>
          </div>

          {mode === "bill" ? (
            <div className="field">
              <label>Mahine ka bijli bill (₹)</label>
              <input type="number" placeholder="jaise 2500" value={bill} onChange={(e) => setBill(e.target.value)} />
            </div>
          ) : (
            <div className="field">
              <label>Khali chhat (sq ft)</label>
              <input type="number" placeholder="jaise 300" value={area} onChange={(e) => setArea(e.target.value)} />
            </div>
          )}

          <div className="field">
            <label>Customer type</label>
            <select value={ctype} onChange={(e) => setCtype(e.target.value as "res" | "com")}>
              <option value="res">Ghar / Residential (subsidy milti hai)</option>
              <option value="com">Dukaan / Commercial (subsidy nahi)</option>
            </select>
          </div>

          {show && (
            <div className="result">
              <div className="big">
                Aapke liye system: <b>{kw.toFixed(1)} kW</b>
              </div>
              <Row label="System kharch (approx.)" value={rupee(cost)} />
              <Row label="Central subsidy" value={sub.central ? "– " + rupee(sub.central) : "Nahi milegi"} />
              <Row label="UP (UPNEDA) subsidy" value={sub.state ? "– " + rupee(sub.state) : "Nahi milegi"} />
              <Row label="Subsidy ke baad aapka kharch" value={rupee(final)} cls="final" />
              <Row label="Mahine ki bachat (approx.)" value={rupee(monthlySave) + " /mo"} cls="save" />
              <Row label="Paisa wasool hone ka time" value={(py ? py + " yr " : "") + pm + " mo"} />
              <div className="note">
                *Andaaza hai. Asli daam survey, chhat aur brand pe depend karta hai. Subsidy PM
                Surya Ghar + UPNEDA ke hisaab se.
              </div>
              <a href="#contact" className="btn" style={{ width: "100%", textAlign: "center", marginTop: 14 }}>
                Free site survey book karein
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, cls = "" }: { label: string; value: string; cls?: string }) {
  return (
    <div className={"rrow " + cls}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}

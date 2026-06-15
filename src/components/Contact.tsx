"use client";
import { useState } from "react";
import { BUSINESS } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bill, setBill] = useState("");

  const send = () => {
    const msg = encodeURIComponent(
      `Namaste ${BUSINESS.name}! Mujhe free quote chahiye.\nNaam: ${name}\nPhone: ${phone}\nMahine ka bill: ₹${bill}`
    );
    window.open(`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`, "_blank");
  };

  return (
    <section className="block contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">Sampark Karein</div>
          <h2 style={{ fontSize: "2rem", marginBottom: 22 }}>Free site survey aur quote</h2>

          <InfoLine icon="📞" label="Call / WhatsApp" value={`+91 ${BUSINESS.phone}`} />
          <InfoLine icon="👨‍🔧" label="Maalik" value={`${BUSINESS.owner} ji • ${BUSINESS.estd} se aapki seva mein`} />
          <InfoLine icon="📍" label="Dukaan pe aayein" value={BUSINESS.address} />
          <InfoLine icon="🕐" label="Khula" value={BUSINESS.hours} />
          <InfoLine icon="☀️" label="Hum serve karte hain" value="Banda aur aaspaas ka Bundelkhand — ghar, dukaan aur khet" />

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 8 }}>
            <a
              href={`https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent("Namaste " + BUSINESS.name + "! Mujhe solar ki jaankari chahiye.")}`}
              target="_blank" rel="noopener noreferrer" className="btn btn-green"
            >
              💬 WhatsApp karein
            </a>
            <a href={`tel:+91${BUSINESS.phone}`} className="btn btn-sky">📞 Call karein</a>
            <a href={`https://maps.google.com/?q=${BUSINESS.mapsQuery}`} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">📍 Direction lein</a>
          </div>
        </div>

        <div className="lead-form">
          <h3 style={{ marginBottom: 6 }}>Callback maangein</h3>
          <p style={{ fontSize: ".88rem", color: "var(--muted)", marginBottom: 18 }}>
            Apni detail bhariye — hum free estimate ke saath call karenge.
          </p>
          <div className="field">
            <label>Aapka naam</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Pura naam" />
          </div>
          <div className="field">
            <label>Mobile number</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="10-digit mobile" />
          </div>
          <div className="field">
            <label>Mahine ka bijli bill (₹)</label>
            <input type="number" value={bill} onChange={(e) => setBill(e.target.value)} placeholder="jaise 2500" />
          </div>
          <button className="btn btn-green" style={{ width: "100%" }} onClick={send}>
            WhatsApp pe bhejein
          </button>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="info-line">
      <div className="ic">{icon}</div>
      <div>
        <b>{label}</b>
        <span>{value}</span>
      </div>
    </div>
  );
}

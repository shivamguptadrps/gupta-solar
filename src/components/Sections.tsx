import { PACKAGES, SUBSIDY_TABLE, SYSTEM_TYPES, WHY_US, FAQ } from "@/lib/data";

export function HowItWorks() {
  const steps = [
    { n: 1, b: "Panel bijli banate hain", s: "Din mein chhat pe lage solar panel DC bijli banate hain." },
    { n: 2, b: "Inverter convert karta hai", s: "Solar inverter use DC se AC bana deta hai, jo ghar mein chalti hai." },
    { n: 3, b: "Ghar chalta hai", s: "Pehle aapke pankhe, light, fridge, AC chalte hain." },
    { n: 4, b: "Extra grid ko jaati", s: "Bachi bijli net meter se company ko jaati — credit milta hai." },
  ];
  return (
    <section className="block howworks" id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Samajhdaari se chuniye</div>
          <h2>On-grid, Hybrid aur Off-grid — farq kya hai?</h2>
          <p>Aapke liye kaun sa sahi hai, ye aapki bijli aur budget pe depend karta hai. Aasaan bhasha mein samjhiye.</p>
        </div>

        <div className="ongrid-flow">
          <h3>☀ On-Grid system kaise kaam karta hai?</h3>
          <p className="flow-intro">Ye sabse popular system hai — isi pe subsidy milti hai. Ismein battery nahi lagti.</p>
          <div className="flow">
            {steps.map((st, i) => (
              <div key={st.n} style={{ display: "contents" }}>
                <div className="step">
                  <div className="n">{st.n}</div>
                  <b>{st.b}</b>
                  <span>{st.s}</span>
                </div>
                {i < steps.length - 1 && <div className="arrow">→</div>}
              </div>
            ))}
          </div>
          <div className="flow-note">
            🌙 <b>Raat mein?</b> Jab panel band hote hain, aap grid se bijli lete hain. Mahine ke
            end mein net metering ka hisaab hota hai — isi liye bill lagbhag <b>zero</b> ho jaata hai.
          </div>
        </div>

        <div className="type-cards">
          {SYSTEM_TYPES.map((t) => (
            <div key={t.name} className={"tcard" + (t.highlight ? " hl" : "")}>
              <div className="ic">{t.icon}</div>
              <h3>{t.name}</h3>
              <p className="best">{t.best}</p>
              <ul>
                {t.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Packages() {
  return (
    <section className="block" id="packages">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Ready Packages</div>
          <h2>Standard on-grid solar packages</h2>
          <p>Fixed, clear pricing — koi chhupa charge nahi. Har package mein panel, inverter, structure, wiring aur subsidy paperwork shaamil hai.</p>
        </div>
        <div className="pkgs">
          {PACKAGES.map((p) => (
            <div key={p.title} className={"pkg" + (p.popular ? " pop" : "")}>
              {p.popular && <div className="tag">SABSE POPULAR</div>}
              <div className="kw">
                {p.kw === "off" ? "Off" : p.kw}
                <small>{p.kw === "off" ? "grid" : "kW"}</small>
              </div>
              <div className="price">{p.price}</div>
              <div className="after">{p.after}</div>
              <ul>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Subsidy() {
  return (
    <section className="block subsidy" id="subsidy">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow" style={{ color: "var(--sun)" }}>PM Surya Ghar Yojana</div>
          <h2>Kitni subsidy milegi aapko?</h2>
          <p>UP mein central subsidy ke saath UPNEDA ₹15,000 per kW extra deti hai (max ₹30,000). Poora application hum bharte hain.</p>
        </div>
        <div className="sub-table">
          <div className="row head">
            <div>System</div><div>Central</div><div>UP (UPNEDA)</div><div>Total Subsidy</div>
          </div>
          {SUBSIDY_TABLE.map((r) => (
            <div className="row" key={r.sys}>
              <div>{r.sys}</div><div>{r.central}</div><div>{r.state}</div><div><b>{r.total}</b></div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <span className="up-badge">✓ Survey se subsidy credit tak — pura kaam humara</span>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="block" id="why">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Gupta Solar Energy kyun</div>
          <h2>Aapke shahar ke local solar expert</h2>
        </div>
        <div className="why-grid">
          {WHY_US.map((w) => (
            <div className="why" key={w.title}>
              <div className="ic">{w.icon}</div>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="block faq" id="faq">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Sawaal-Jawaab</div>
          <h2>Aksar poochhe jaane waale sawaal</h2>
        </div>
        <div className="faq-list">
          {FAQ.map((f) => (
            <details key={f.q} className="faq-item">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

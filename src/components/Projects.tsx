import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section className="block projects" id="projects">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Hamare kaam</div>
          <h2>Recent solar installations</h2>
          <p>Banda district mein humne ye systems lagaye hain. (Apni asli photos baad mein yahan lag jaayengi.)</p>
        </div>
        <div className="proj-grid">
          {PROJECTS.map((p, idx) => (
            <div className="proj-card" key={idx}>
              <div className="proj-img" style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}>
                <PanelArt />
                <div className="proj-kw">{p.kw}</div>
              </div>
              <div className="proj-body">
                <b>{p.title}</b>
                <div className="proj-meta">
                  <span>📍 {p.place}</span>
                  <span className="proj-type">{p.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Simple SVG of a roof with solar panels — placeholder until real photos
function PanelArt() {
  return (
    <svg viewBox="0 0 200 120" className="panel-art" xmlns="http://www.w3.org/2000/svg">
      <circle cx="165" cy="28" r="16" fill="#ffd968" opacity="0.9" />
      <g opacity="0.95">
        <polygon points="30,95 95,95 80,55 45,55" fill="#11335c" stroke="#0a223e" strokeWidth="1.5" />
        <line x1="49" y1="68" x2="84" y2="68" stroke="#2b5688" strokeWidth="1" />
        <line x1="46" y1="82" x2="88" y2="82" stroke="#2b5688" strokeWidth="1" />
        <line x1="58" y1="55" x2="50" y2="95" stroke="#2b5688" strokeWidth="1" />
        <line x1="68" y1="55" x2="65" y2="95" stroke="#2b5688" strokeWidth="1" />
      </g>
      <g opacity="0.95">
        <polygon points="105,95 170,95 155,55 120,55" fill="#11335c" stroke="#0a223e" strokeWidth="1.5" />
        <line x1="124" y1="68" x2="159" y2="68" stroke="#2b5688" strokeWidth="1" />
        <line x1="121" y1="82" x2="163" y2="82" stroke="#2b5688" strokeWidth="1" />
        <line x1="133" y1="55" x2="125" y2="95" stroke="#2b5688" strokeWidth="1" />
        <line x1="143" y1="55" x2="140" y2="95" stroke="#2b5688" strokeWidth="1" />
      </g>
      <rect x="20" y="95" width="160" height="6" fill="#7a4a23" opacity="0.6" />
    </svg>
  );
}

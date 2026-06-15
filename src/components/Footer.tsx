import { BUSINESS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <b>{BUSINESS.name}</b> — Rooftop solar installation, {BUSINESS.address} · Estd. {BUSINESS.estd}
        <br />
        On-grid • Off-grid • Hybrid • PM Surya Ghar subsidy assistance
        <br />
        <a href={`tel:+91${BUSINESS.phone}`}>📞 {BUSINESS.phone}</a> · © {new Date().getFullYear()}
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  const msg = encodeURIComponent(
    `Namaste ${BUSINESS.name}! Mujhe solar ke baare mein jaankari chahiye.`
  );
  return (
    <a
      href={`https://wa.me/${BUSINESS.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      title="WhatsApp"
    >
      💬
    </a>
  );
}

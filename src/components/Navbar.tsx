import Link from "next/link";
import { BUSINESS } from "@/lib/data";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <span className="disc" /> {BUSINESS.name}{" "}
          <small>Estd. {BUSINESS.estd}</small>
        </Link>
        <nav className="nav-links">
          <a href="/#how">Kaise kaam karta hai</a>
          <a href="/#packages">Packages</a>
          <a href="/#subsidy">Subsidy</a>
          <a href="/#projects">Hamare kaam</a>
          <Link href="/designer" className="btn btn-sky">
            🏠 3D Designer
          </Link>
          <a href="/#contact" className="btn">
            Free Quote
          </a>
        </nav>
      </div>
    </header>
  );
}

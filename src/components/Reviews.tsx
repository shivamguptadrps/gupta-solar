"use client";
import { useState } from "react";
import { REVIEWS } from "@/lib/data";

export default function Reviews() {
  const [i, setI] = useState(0);
  const per = 3;
  const pages = Math.ceil(REVIEWS.length / per);
  const slice = REVIEWS.slice(i * per, i * per + per);

  return (
    <section className="block reviews" id="reviews">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">Hamare customer</div>
          <h2>Banda ke logon ka bharosa</h2>
          <p>Saikdon khush customer — ghar, dukaan aur khet, sab jagah.</p>
        </div>

        <div className="review-grid">
          {slice.map((r, k) => (
            <div className="review" key={i + "-" + k}>
              <div className="stars">{"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}</div>
              <p className="rtext">“{r.text}”</p>
              <div className="rwho">
                <div className="avatar">{r.name.charAt(0)}</div>
                <div>
                  <b>{r.name}</b>
                  <span>{r.place}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {pages > 1 && (
          <div className="dots">
            {Array.from({ length: pages }).map((_, p) => (
              <button
                key={p}
                className={p === i ? "dot active" : "dot"}
                onClick={() => setI(p)}
                aria-label={"Page " + (p + 1)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

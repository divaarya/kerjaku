"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./Navbar.css";

function Navbar({ nama }) {
  const [buka, setBuka] = useState(false);
  const tutup = () => setBuka(false);

  return (
    <header className="navbar">
      <div className="logo">{nama}</div>

      <nav className={buka ? "menu buka" : "menu"}>
        <a href="#fitur" onClick={tutup}>
          Fitur
        </a>
        <a href="#keunggulan" onClick={tutup}>
          Keunggulan
        </a>
        <a href="#carakerja" onClick={tutup}>
          Cara kerja
        </a>
        <a href="#testimoni" onClick={tutup}>
          Testimoni
        </a>
        <a href="#harga" onClick={tutup}>
          Harga
        </a>
        <a href="#faq" onClick={tutup}>
          Tanya jawab
        </a>
        <a href="#kontak" onClick={tutup}>
          Kontak
        </a>
      </nav>

      <button className="btn-nav">Coba gratis</button>

      <button
        className="btn-menu"
        onClick={() => setBuka(!buka)}
        aria-label="Buka menu"
      >
        {buka ? <X size={24} /> : <Menu size={24} />}
      </button>
    </header>
  );
}

export default Navbar;

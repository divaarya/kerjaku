"use client";

import { useState } from "react";
import "./Harga.css";

const paket = [
  {
    nama: "Mulai",
    bulanan: 0,
    tahunan: 0,
    catatan: "Untuk tim hingga 10 karyawan",
    fitur: ["Absensi dan lokasi", "Perizinan dasar", "Library dokumen"],
  },
  {
    nama: "Bisnis",
    bulanan: 7900,
    tahunan: 5900,
    catatan: "per karyawan, per bulan",
    unggulan: true,
    fitur: [
      "Semua fitur Mulai",
      "Penggajian otomatis",
      "Exam karyawan",
      "Slip gaji digital",
    ],
  },
  {
    nama: "Penuh",
    bulanan: 14900,
    tahunan: 11900,
    catatan: "per karyawan, per bulan",
    fitur: [
      "Semua fitur Bisnis",
      "Persetujuan bertingkat",
      "Library tanpa batas",
      "Dukungan prioritas",
    ],
  },
];

function formatHarga(angka) {
  if (angka === 0) return "Gratis";
  return "Rp" + angka.toLocaleString("id-ID");
}

function Harga() {
  const [tahunan, setTahunan] = useState(false);

  return (
    <section className="harga" id="harga">
      <h2>Pilih paket sesuai ukuran tim Anda</h2>

      <div className="toggle">
        <button
          className={!tahunan ? "aktif" : ""}
          onClick={() => setTahunan(false)}
        >
          Bulanan
        </button>
        <button
          className={tahunan ? "aktif" : ""}
          onClick={() => setTahunan(true)}
        >
          Tahunan (hemat)
        </button>
      </div>

      <div className="harga-grid">
        {paket.map((p) => (
          <div className={p.unggulan ? "paket unggulan" : "paket"} key={p.nama}>
            {p.unggulan && <span className="label">Paling dipilih</span>}
            <h3>{p.nama}</h3>
            <div className="angka">
              {formatHarga(tahunan ? p.tahunan : p.bulanan)}
            </div>
            <small>{p.catatan}</small>
            <ul>
              {p.fitur.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="btn-paket">Pilih paket {p.nama}</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Harga;

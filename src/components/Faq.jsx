"use client";

import { useState } from "react";
import "./Faq.css";

const daftar = [
  {
    tanya: "Apakah ada paket gratis?",
    jawab:
      "Ada. Paket Mulai gratis selamanya untuk perusahaan dengan hingga 10 karyawan.",
  },
  {
    tanya: "Apa yang dibutuhkan untuk mulai menggunakan KerjaKu?",
    jawab:
      "Tim HR cukup memakai komputer dengan koneksi internet, dan karyawan memakai ponsel.",
  },
  {
    tanya: "Apakah data gaji terhubung dengan absensi?",
    jawab:
      "Ya. Data kehadiran, lembur, dan izin otomatis masuk ke perhitungan gaji.",
  },
  {
    tanya: "Bisakah KerjaKu dipakai untuk pelatihan karyawan?",
    jawab:
      "Bisa. Gunakan fitur Exam untuk ujian dan Library untuk menyimpan materi pelatihan.",
  },
  {
    tanya: "Apakah data perusahaan aman?",
    jawab:
      "Data dienkripsi dan hak akses diatur per peran, sehingga setiap orang hanya melihat data yang diperlukan.",
  },
];

function Faq() {
  const [buka, setBuka] = useState(0);

  return (
    <section className="faq" id="faq">
      <h2>Pertanyaan yang sering diajukan</h2>
      <div className="faq-list">
        {daftar.map((item, i) => (
          <div className="faq-item" key={item.tanya}>
            <button
              className="faq-tanya"
              onClick={() => setBuka(buka === i ? -1 : i)}
            >
              <span>{item.tanya}</span>
              <span>{buka === i ? "−" : "+"}</span>
            </button>
            {buka === i && <p className="faq-jawab">{item.jawab}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;

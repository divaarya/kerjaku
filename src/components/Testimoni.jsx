import "./Testimoni.css";

const daftar = [
  {
    isi: "Rekap absensi yang dulu memakan dua hari sekarang selesai sebelum jam makan siang.",
    nama: "Rina Wulandari",
    jabatan: "Kepala HR, Toko Sinar Jaya",
  },
  {
    isi: "Karyawan tidak perlu lagi menanyakan slip gaji lewat pesan. Semuanya sudah tersedia di sistem.",
    nama: "Dimas Prakoso",
    jabatan: "Pemilik, Kopi Tepi Kali",
  },
  {
    isi: "Materi pelatihan dan SOP tersimpan di satu tempat, jadi karyawan baru lebih cepat memahami pekerjaannya.",
    nama: "Sari Anggraini",
    jabatan: "Manajer Operasional, Klinik Sehat Bersama",
  },
];

function Testimoni() {
  return (
    <section className="testimoni" id="testimoni">
      <h2>Cerita dari pengguna</h2>
      <div className="testimoni-grid">
        {daftar.map((t) => (
          <figure className="testimoni-card" key={t.nama}>
            <blockquote>{t.isi}</blockquote>
            <figcaption>
              <b>{t.nama}</b>
              <span>{t.jabatan}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Testimoni;

import "./CaraKerja.css";

const langkah = [
  {
    judul: "Daftarkan perusahaan",
    isi: "Buat akun, lalu masukkan data perusahaan dan daftar karyawan.",
  },
  {
    judul: "Atur aturan kerja",
    isi: "Tentukan jam kerja, komponen gaji, jenis cuti, dan hak akses tiap divisi.",
  },
  {
    judul: "Tim mulai memakainya",
    isi: "Karyawan absen, mengajukan izin, dan mengikuti ujian. HR memantau semuanya dari satu tempat.",
  },
];

function CaraKerja() {
  return (
    <section className="cara" id="carakerja">
      <h2>Mulai dalam tiga langkah</h2>
      <div className="cara-list">
        {langkah.map((l, i) => (
          <div className="cara-item" key={l.judul}>
            <div className="cara-nomor">{i + 1}</div>
            <h3>{l.judul}</h3>
            <p>{l.isi}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CaraKerja;

import {
  Fingerprint,
  Wallet,
  GraduationCap,
  CalendarCheck,
  Library,
} from "lucide-react";
import "./Fitur.css";

const daftarFitur = [
  {
    ikon: Fingerprint,
    nama: "Absensi",
    isi: "Karyawan absen lewat ponsel dengan verifikasi lokasi dan foto. Rekap kehadiran, keterlambatan, dan lembur tersusun otomatis.",
  },
  {
    ikon: Wallet,
    nama: "Gaji",
    isi: "Gaji, tunjangan, dan potongan dihitung otomatis dari data kehadiran. Slip gaji langsung terkirim ke setiap karyawan.",
  },
  {
    ikon: GraduationCap,
    nama: "Exam",
    isi: "Susun soal, jadwalkan ujian, dan lihat hasilnya langsung. Cocok untuk onboarding, pelatihan, dan seleksi internal.",
  },
  {
    ikon: Library,
    nama: "Library",
    isi: "Simpan SOP, kebijakan, dan materi pelatihan di satu tempat, dengan hak akses sesuai divisi.",
  },
  {
    ikon: CalendarCheck,
    nama: "Perizinan",
    isi: "Pengajuan cuti, izin, dan sakit diproses dalam satu alur persetujuan. Sisa cuti terhitung otomatis.",
  },
];

function Fitur() {
  return (
    <section className="fitur" id="fitur">
      <h2>Satu sistem untuk seluruh kebutuhan HR perusahaan Anda</h2>
      <p className="fitur-sub">
        Dari kehadiran hingga pelatihan, semua terhubung dan mudah dipantau.
      </p>
      <div className="fitur-grid">
        {daftarFitur.map((f) => {
          const Ikon = f.ikon;
          return (
            <article className="fitur-card" key={f.nama}>
              <div className="fitur-ikon">
                <Ikon size={26} />
              </div>
              <h3>{f.nama}</h3>
              <p>{f.isi}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Fitur;

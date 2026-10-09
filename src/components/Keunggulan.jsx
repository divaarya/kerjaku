import { ShieldCheck, Smartphone, Zap, Headphones } from "lucide-react";
import "./Keunggulan.css";

const daftar = [
  {
    ikon: Smartphone,
    judul: "Bisa diakses dari mana saja",
    isi: "Karyawan dan HR dapat memakai KerjaKu dari ponsel maupun komputer, tanpa perlu memasang aplikasi tambahan.",
  },
  {
    ikon: Zap,
    judul: "Pekerjaan administrasi lebih cepat",
    isi: "Rekap kehadiran, perhitungan gaji, dan persetujuan izin tersusun otomatis sehingga waktu HR tidak habis untuk input manual.",
  },
  {
    ikon: ShieldCheck,
    judul: "Data tertata dan terlindungi",
    isi: "Hak akses diatur per peran, sehingga setiap orang hanya membuka data yang memang menjadi tanggung jawabnya.",
  },
  {
    ikon: Headphones,
    judul: "Pendampingan saat mulai",
    isi: "Tim kami membantu proses awal, mulai dari memasukkan data karyawan sampai tim siap menggunakannya.",
  },
];

function Keunggulan() {
  return (
    <section className="keunggulan" id="keunggulan">
      <div className="keunggulan-kiri">
        <h2>Dibuat agar HR bekerja lebih tenang</h2>
        <p>
          KerjaKu dirancang untuk perusahaan yang ingin urusan karyawan lebih
          rapi tanpa sistem yang rumit.
        </p>
        <img src="/web1.jpg" alt="Ilustrasi keamanan dan kemudahan data HR" />
      </div>

      <div className="keunggulan-kanan">
        {daftar.map((d) => {
          const Ikon = d.ikon;
          return (
            <div className="keunggulan-item" key={d.judul}>
              <div className="keunggulan-ikon">
                <Ikon size={22} />
              </div>
              <div>
                <h3>{d.judul}</h3>
                <p>{d.isi}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Keunggulan;

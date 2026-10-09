// Data bawaan. Nanti diganti oleh data dari API admin panel.
export const siteConfig = {
  nama: "KerjaKu",
  warnaUtama: "#2563eb",
  warnaAksen: "#facc15",
  heroJudul: "Urus karyawan jadi lebih mudah",
  heroDeskripsi:
    "Kelola absensi, penggajian, ujian, perizinan, dan dokumen perusahaan dalam satu aplikasi yang mudah digunakan.",
  ctaTeks: "Mulai gratis",
  // Nomor asli cukup ditulis di .env.local, bukan di file ini.
  whatsappNomor: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6281234567890",
  whatsappPesan: "Halo, saya ingin mengetahui lebih lanjut tentang KerjaKu.",
  email: "halo@kerjaku.gmail",
  kota: "Semarang, Jawa Tengah",
  seo: {
    metaTitle: "KerjaKu - HRIS",
    metaDescription:
      "Sistem HR untuk absensi, gaji, exam, library, dan perizinan perusahaan.",
    ogImage: "",
  },
};

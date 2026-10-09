import "./Footer.css";

function Footer({ site }) {
  return (
    <>
      <section className="cta">
        <h2>Mulai kelola tim Anda dengan lebih rapi</h2>
        <p>Coba gratis tanpa kartu kredit.</p>
        <button className="btn-cta">{site.ctaTeks}</button>
      </section>

      <footer className="footer">
        <div className="footer-merek">
          <div className="logo">{site.nama}</div>
          <p>Sistem HR untuk absensi, gaji, exam, perizinan, dan library.</p>
        </div>

        <div className="footer-kontak">
          <h4>Navigasi</h4>
          <a href="#fitur">Fitur</a>
          <a href="#harga">Harga</a>
          <a href="#kontak">Kontak</a>
        </div>

        <p className="hak-cipta">
          © 2026 {site.nama}. Seluruh hak dilindungi.
        </p>
      </footer>
    </>
  );
}

export default Footer;
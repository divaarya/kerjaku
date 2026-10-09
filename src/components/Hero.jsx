import "./Hero.css";

function Hero({ site }) {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>{site.heroJudul}</h1>
        <p>{site.heroDeskripsi}</p>
        <div className="hero-buttons">
          <button className="btn-utama">{site.ctaTeks}</button>
          <button className="btn-kedua">Lihat demo</button>
        </div>
      </div>

      <div className="hero-card">
        <h3>Hari ini</h3>
        <div className="card-row">
          <span>Hadir</span>
          <b>128</b>
        </div>
        <div className="card-row">
          <span>Izin menunggu</span>
          <b>7</b>
        </div>
        <div className="card-row">
          <span>Gaji bulan ini</span>
          <b className="siap">Siap dibayar</b>
        </div>
      </div>
    </section>
  );
}

export default Hero;

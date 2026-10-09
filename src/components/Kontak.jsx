import { MessageCircle, Mail, MapPin } from "lucide-react";
import { buatLinkWa, formatNomor } from "@/lib/whatsapp";
import "./Kontak.css";

function Kontak({ site }) {
  const link = buatLinkWa(site.whatsappNomor, site.whatsappPesan);

  return (
    <section className="kontak" id="kontak">
      <div className="kontak-kiri">
        <h2>Ada pertanyaan? Hubungi kami</h2>
        <p>
          Tim kami siap membantu menjelaskan fitur dan memilihkan paket yang
          sesuai dengan kebutuhan perusahaan Anda.
        </p>
        <a className="btn-wa" href={link} target="_blank" rel="noreferrer">
          <MessageCircle size={20} />
          Hubungi kami via WhatsApp
        </a>
      </div>

      <div className="kontak-daftar">
        <div className="kontak-item">
          <MessageCircle size={20} />
          <span>WhatsApp: {formatNomor(site.whatsappNomor)}</span>
        </div>
        <div className="kontak-item">
          <Mail size={20} />
          <span>{site.email}</span>
        </div>
        <div className="kontak-item">
          <MapPin size={20} />
          <span>{site.kota}</span>
        </div>
      </div>
    </section>
  );
}

export default Kontak;

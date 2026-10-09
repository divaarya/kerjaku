import { MessageCircle } from "lucide-react";
import { buatLinkWa } from "@/lib/whatsapp";
import "./WhatsApp.css";

function WhatsApp({ site }) {
  const link = buatLinkWa(site.whatsappNomor, site.whatsappPesan);

  return (
    <a
      className="wa"
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Chat WhatsApp</span>
    </a>
  );
}

export default WhatsApp;

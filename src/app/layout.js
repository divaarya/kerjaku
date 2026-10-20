import { Playfair_Display, Manrope } from "next/font/google";
import { getSite } from "@/lib/getSite";
import "./globals.css";

const judul = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-judul",
});

const isi = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata() {
  const site = await getSite();

  return {
    metadataBase: new URL("https://kerjaku.vercel.app"),

    title: site.seo.metaTitle || "Kerjaku",
    description:
      site.seo.metaDescription ||
      "Kelola tim kerja dengan lebih mudah bersama Kerjaku.",

    openGraph: {
      title: site.seo.metaTitle || "Kerjaku",
      description:
        site.seo.metaDescription ||
        "Kelola tim kerja dengan lebih mudah bersama Kerjaku.",
      siteName: "Kerjaku",
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: "/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Kerjaku - Kelola Tim Kerja dengan Lebih Mudah",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: site.seo.metaTitle || "Kerjaku",
      description:
        site.seo.metaDescription ||
        "Kelola tim kerja dengan lebih mudah bersama Kerjaku.",
      images: ["/opengraph-image.png"],
    },
  };
}

export default async function RootLayout({ children }) {
  const site = await getSite();

  return (
    <html lang="id">
      <body
        className={`${judul.variable} ${isi.className}`}
        style={{
          "--warna-utama": site.warnaUtama,
          "--warna-aksen": site.warnaAksen,
        }}
      >
        {children}
      </body>
    </html>
  );
}

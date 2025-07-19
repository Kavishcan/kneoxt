import { Source_Sans_3, Roboto } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "slick-carousel/slick/slick.css";
import "./assets/main.css";
import Image from "next/image";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const source_sans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--heading-font",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--body-font",
});

export const metadata = {
  title: {
    absolute: "",
    default: "Kneoxt - Your website design and development partner",
    template: "%s | Kneoxt - Your website design and development partner",
  },
  description: "Kneoxt - Your website design and development partner",
  openGraph: {
    title: "Kneoxt - Your website design and development partner",
    description: "Kneoxt - Your website design and development partner",
  },
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Kneoxt" />
        <link
          rel="icon"
          href="/assets/images/Kneoxt-shortLogo-black.svg"
          sizes="any"
        />
      </head>
      <body className={`${source_sans.variable} ${roboto.variable}`}>
        <a
          className="whatsapp-fixed"
          aria-label="Chat on WhatsApp"
          href="https://wa.me/94784672933"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/assets/images/whatsapp2.png"
            alt="WhatsApp Icon"
            width={48}
            height={48}
          />
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

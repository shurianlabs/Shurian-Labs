import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SHURIAN [LABS] — Software Architecture & Business Automation",
  description:
    "Desarrollamos aplicaciones web de alto rendimiento, sistemas de gestión a medida y flujos automatizados que eliminan tareas manuales y potencian tus ventas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`dark ${plusJakarta.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[#090D16] text-white font-sans antialiased selection:bg-[#00D2FF] selection:text-[#090D16] relative">
        {/* Ambient Cyber Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-[920px] h-[360px] bg-gradient-to-b from-[#00D2FF]/10 via-[#00F5A0]/5 to-transparent blur-3xl -z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none fixed top-[35%] right-[-10%] w-[520px] h-[520px] bg-[#00D2FF]/[0.04] blur-[130px] -z-10"
        />
        {children}
      </body>
    </html>
  );
}

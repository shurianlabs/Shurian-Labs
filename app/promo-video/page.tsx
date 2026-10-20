import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shurian Labs — Video Promocional 9:16 (Reels & TikTok)",
  description:
    "Estudio audiovisual interactivo para generar y descargar el video promocional de 15 segundos en formato vertical 9:16 para Instagram Reels y TikTok.",
};

export default function PromoVideoPage() {
  return (
    <div className="w-full min-h-screen bg-[#05070B]">
      <iframe
        src="/promo-video.html"
        className="w-full h-screen border-0"
        title="Shurian Labs Video Promocional 9:16"
      />
    </div>
  );
}

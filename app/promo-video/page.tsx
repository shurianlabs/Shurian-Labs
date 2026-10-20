import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Video Promocional 9:16 (Remotion) — Shurian Labs",
  description:
    "Componente de video programático en React/Remotion (1080x1920, 30fps, 15 segundos) para Instagram Reels y TikTok.",
};

const RemotionPlayerClient = dynamic(
  () => import("./RemotionPlayerClient"),
  { ssr: false }
);

export default function PromoVideoPage() {
  return <RemotionPlayerClient />;
}

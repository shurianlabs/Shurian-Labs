import Image from "next/image";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  priority?: boolean;
}

export default function Logo({
  className = "w-8 h-8",
  iconOnly = true,
  priority = false,
}: LogoProps) {
  if (iconOnly) {
    return (
      <Image
        src="/logo-icon.png"
        alt="Shurian Labs Isotipo"
        width={96}
        height={96}
        className={`object-contain drop-shadow-[0_0_12px_rgba(0,210,255,0.4)] ${className}`}
        priority={priority}
      />
    );
  }

  return (
    <Image
      src="/logoshurianlabs.jpeg"
      alt="Shurian Labs"
      width={300}
      height={300}
      className={`object-contain rounded-xl ${className}`}
      priority={priority}
    />
  );
}
import Image from "next/image";

const fallbackImage =
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=2200&q=85";

export function HeroBackground() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Image
        src={fallbackImage}
        alt=""
        fill
        priority
        sizes="100vw"
        quality={78}
        className="object-cover"
      />
      <video
        className="hero-video absolute inset-0 hidden size-full object-cover md:block"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={fallbackImage}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

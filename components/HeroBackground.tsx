import Image from "next/image";

const fallbackImage =
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=2400&q=84";

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
        className="object-cover object-center"
      />
    </div>
  );
}

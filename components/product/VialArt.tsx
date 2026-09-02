import Image from "next/image";
import type { Product, ProductSlug } from "@/lib/products";

const VIAL_IMAGES: Record<ProductSlug, string> = {
  semaglutide: "/images/vials/semaglutide.webp",
  tirzepatide: "/images/vials/tirzepatide.webp",
};

const VIAL_GLOW: Record<ProductSlug, string> = {
  semaglutide: "from-cyan-100 via-sky-50 to-white",
  tirzepatide: "from-amber-100 via-orange-50 to-white",
};

type Props = {
  product: Product;
  className?: string;
  priority?: boolean;
  showGlow?: boolean;
};

export function VialArt({ product, className = "", priority = false, showGlow = true }: Props) {
  const src = VIAL_IMAGES[product.slug];
  const glow = VIAL_GLOW[product.slug];

  const image = (
    <Image
      src={src}
      alt={`${product.name} ${product.strength} ${product.form}, RX ONLY`}
      width={400}
      height={400}
      priority={priority}
      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
      className={`relative z-10 mx-auto h-full w-full object-contain object-center drop-shadow-[0_18px_28px_rgba(11,19,43,0.12)] ${className}`}
    />
  );

  if (!showGlow) return image;

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-[280px] items-center justify-center">
      <div className={`absolute inset-[8%] rounded-full bg-gradient-to-br ${glow} shadow-inner`} aria-hidden />
      <div className="absolute inset-[18%] rounded-full border border-white/70 bg-white/35 blur-[1px]" aria-hidden />
      <div className="relative h-[88%] w-[88%]">{image}</div>
    </div>
  );
}

export function getVialImage(slug: ProductSlug): string {
  return VIAL_IMAGES[slug];
}

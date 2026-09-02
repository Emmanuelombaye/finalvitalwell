import Image from "next/image";

type MediaImageProps = {
  src: string;
  alt: string;
  aspect?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  loading?: "lazy" | "eager";
  sizes?: string;
  className?: string;
};

export function MediaImage({
  src,
  alt,
  aspect = "4 / 3",
  fit = "cover",
  priority = false,
  loading = "lazy",
  sizes = "100vw",
  className = "",
}: MediaImageProps) {
  return (
    <div className={`media-frame ${className}`.trim()} style={{ aspectRatio: aspect }}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : loading}
        sizes={sizes}
        className={fit === "contain" ? "media-frame__img media-frame__img--contain" : "media-frame__img media-frame__img--cover"}
      />
    </div>
  );
}

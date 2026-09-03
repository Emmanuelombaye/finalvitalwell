import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import type { BrowseCard } from "@/data/browse-cards";

type ImageBrowseCardProps = {
  card: BrowseCard;
  variant?: "tile" | "wide" | "compact";
};

const ASPECT: Record<string, string> = {
  tile: "4 / 5",
  wide: "16 / 10",
  compact: "1 / 1",
};

export function ImageBrowseCard({ card, variant = "tile" }: ImageBrowseCardProps) {
  const fit = card.imageFit ?? "cover";

  return (
    <Link href={card.href} className={`browse-card browse-card--${variant} group`}>
      <MediaImage
        src={card.image}
        alt={card.title}
        aspect={ASPECT[variant]}
        fit={fit}
        objectPosition={fit === "cover" ? "center top" : "center"}
        sizes={
          variant === "wide"
            ? "(max-width: 768px) 100vw, 50vw"
            : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        }
        className={fit === "contain" ? "browse-card__media browse-card__media--contain" : "browse-card__media"}
      />
      <div className="browse-card__body">
        <h3 className="browse-card__title">{card.title}</h3>
        <p className="browse-card__text">{card.description}</p>
        <span className="browse-card__cta">
          Learn more <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

type BrowseSectionBlockProps = {
  title: string;
  description?: string;
  cards: BrowseCard[];
  columns?: 2 | 3 | 4;
};

export function BrowseSectionBlock({ title, description, cards, columns = 3 }: BrowseSectionBlockProps) {
  return (
    <section className="browse-section">
      <div className="browse-section__header">
        <h2 className="browse-section__title">{title}</h2>
        {description ? <p className="browse-section__description">{description}</p> : null}
      </div>
      <div className={`browse-section__grid browse-section__grid--${columns}`}>
        {cards.map((card) => (
          <ImageBrowseCard key={`${card.href}-${card.title}`} card={card} />
        ))}
      </div>
    </section>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  priority?: boolean;
  imageFit?: "cover" | "contain";
};

export function PageHero({ eyebrow, title, description, image, imageAlt, priority = false, imageFit = "cover" }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-page page-hero__grid">
        <div className="page-hero__copy">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        <div className="page-hero__visual">
          <MediaImage
            src={image}
            alt={imageAlt}
            aspect="16 / 11"
            fit={imageFit}
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className={imageFit === "contain" ? "page-hero__image-wrap page-hero__image-wrap--contain" : "page-hero__image-wrap"}
          />
        </div>
      </div>
    </section>
  );
}

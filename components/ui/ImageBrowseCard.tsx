import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BrowseCard } from "@/data/browse-cards";

type ImageBrowseCardProps = {
  card: BrowseCard;
  variant?: "tile" | "wide" | "compact";
};

export function ImageBrowseCard({ card, variant = "tile" }: ImageBrowseCardProps) {
  return (
    <Link href={card.href} className={`browse-card browse-card--${variant} group`}>
      <div className="browse-card__media">
        <Image
          src={card.image}
          alt=""
          fill
          sizes={
            variant === "wide"
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="browse-card__overlay" aria-hidden />
        {card.badge ? <span className="browse-card__badge">{card.badge}</span> : null}
        {card.price ? <span className="browse-card__price">{card.price}</span> : null}
      </div>
      <div className="browse-card__body">
        {card.eyebrow ? <p className="browse-card__eyebrow">{card.eyebrow}</p> : null}
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
};

export function PageHero({ eyebrow, title, description, image, imageAlt }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container-page page-hero__grid">
        <div className="page-hero__copy">
          <p className="page-hero__eyebrow">{eyebrow}</p>
          <h1 className="page-hero__title">{title}</h1>
          <p className="page-hero__description">{description}</p>
        </div>
        <div className="page-hero__visual">
          <div className="page-hero__image-wrap">
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MediaImage } from "@/components/ui/MediaImage";
import type { HomeFeatureCard } from "@/data/home";

export function HomeFeatureCard({ card }: { card: HomeFeatureCard }) {
  const fit = card.imageFit ?? "contain";

  return (
    <Link href={card.href} className="home-feature-card group">
      <MediaImage
        src={card.image}
        alt={card.title}
        aspect="4 / 3"
        fit={fit}
        objectPosition="center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        className={fit === "contain" ? "home-feature-card__media home-feature-card__media--contain" : "home-feature-card__media"}
      />
      <div className="home-feature-card__body">
        <p className="home-feature-card__eyebrow">{card.eyebrow}</p>
        <h3 className="home-feature-card__title">{card.title}</h3>
        <p className="home-feature-card__text">{card.description}</p>
        <span className="home-feature-card__link">
          Learn more <ArrowRight className="size-4" />
        </span>
      </div>
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { HomeFeatureCard } from "@/data/home";

export function HomeFeatureCard({ card }: { card: HomeFeatureCard }) {
  return (
    <Link
      href={card.href}
      className="home-feature-card group"
    >
      <div className="home-feature-card__media">
        <Image
          src={card.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="home-feature-card__overlay" aria-hidden />
      </div>
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

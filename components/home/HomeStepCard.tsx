import Image from "next/image";
import type { HomeStepCard } from "@/data/home";

export function HomeStepCard({ card }: { card: HomeStepCard }) {
  return (
    <li className="home-step-card">
      <div className="home-step-card__media">
        <Image
          src={card.image}
          alt=""
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover"
        />
        <span className="home-step-card__badge">{card.step}</span>
      </div>
      <div className="home-step-card__body">
        <h3 className="home-step-card__title">{card.title}</h3>
        <p className="home-step-card__text">{card.description}</p>
      </div>
    </li>
  );
}

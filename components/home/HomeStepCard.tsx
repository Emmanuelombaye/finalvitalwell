import { MediaImage } from "@/components/ui/MediaImage";
import type { HomeStepCard } from "@/data/home";

export function HomeStepCard({ card }: { card: HomeStepCard }) {
  const fit = card.imageFit ?? "cover";

  return (
    <li className="home-step-card">
      <div className="home-step-card__media-wrap">
        <MediaImage
          src={card.image}
          alt={card.title}
          aspect="16 / 10"
          fit={fit}
          objectPosition={fit === "cover" ? "50% 30%" : "center"}
          sizes="(max-width: 768px) 100vw, 25vw"
          className={fit === "contain" ? "home-step-card__media home-step-card__media--contain" : "home-step-card__media"}
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

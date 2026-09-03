import { MediaImage } from "@/components/ui/MediaImage";
import type { HomeStepCard } from "@/data/home";

export function HowItWorksStepCard({ card }: { card: HomeStepCard }) {
  return (
    <li className="hiw-step">
      <div className="hiw-step__media-wrap">
        <MediaImage
          src={card.image}
          alt={card.title}
          aspect="1 / 1"
          fit="contain"
          objectPosition="center"
          sizes="(max-width: 768px) 30vw, 140px"
          className="hiw-step__media"
        />
        <span className="hiw-step__badge" aria-hidden="true">
          {card.step}
        </span>
      </div>
      <div className="hiw-step__body">
        <p className="hiw-step__index">Step {card.step}</p>
        <h3 className="hiw-step__title">{card.title}</h3>
        <p className="hiw-step__text">{card.description}</p>
      </div>
    </li>
  );
}

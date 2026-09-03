import { MediaImage } from "@/components/ui/MediaImage";
import type { HomeStepCard } from "@/data/home";

export function HowItWorksStepCard({ card }: { card: HomeStepCard }) {
  const stepLabel = String(card.step).padStart(2, "0");

  return (
    <li className="hiw-step">
      <div className="hiw-step__media-wrap">
        <MediaImage
          src={card.image}
          alt={card.title}
          aspect="16 / 10"
          fit="contain"
          objectPosition="center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="hiw-step__media"
        />
        <span className="hiw-step__badge" aria-hidden="true">
          {stepLabel}
        </span>
      </div>
      <div className="hiw-step__body">
        <p className="hiw-step__index">Step {stepLabel}</p>
        <h3 className="hiw-step__title">{card.title}</h3>
        <p className="hiw-step__text">{card.description}</p>
      </div>
    </li>
  );
}

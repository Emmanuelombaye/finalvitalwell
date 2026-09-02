import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Subscription policy" };

export default function Page() {
  return (
    <LegalPage kicker="Legal" title="Subscription policy">
      <p>
        Programs renew every 30 days at the listed monthly price. Pause, switch between Semaglutide and Tirzepatide
        between cycles subject to clinical review, or cancel before the next renewal date.
      </p>
    </LegalPage>
  );
}

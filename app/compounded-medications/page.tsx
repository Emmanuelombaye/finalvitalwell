import type { Metadata } from "next";
import { LegalPage } from "@/components/ui/LegalPage";

export const metadata: Metadata = { title: "Compounded medications" };

export default function Page() {
  return (
    <LegalPage kicker="Resources" title="Compounded medications">
      <p>
        A compounded medication is prepared by a licensed pharmacy for an individual patient. It is not the same as an
        FDA-approved branded drug.
      </p>
      <p>
        VitaWellRx® Semaglutide and Tirzepatide programs may involve a compounded formulation. VitaWellRx® does not
        describe a compounded product as Ozempic, Wegovy, Mounjaro, or Zepbound.
      </p>
    </LegalPage>
  );
}

import ProposalSubNav from "./ProposalSubNav";
import ProposalHero from "./ProposalHero";
import Differentiator from "./Differentiator";
import Panorama from "./Panorama";
import EstadoActual from "./EstadoActual";
import ElPlan from "./ElPlan";
import MasAllaDelVoice from "./MasAllaDelVoice";
import CasosReales from "./CasosReales";
import Inversion from "./Inversion";
import FAQ from "./FAQ";
import ProximosPasos from "./ProximosPasos";
import ProposalFooter from "./ProposalFooter";

export default function ProposalTab() {
  return (
    <div>
      <ProposalSubNav />
      <ProposalHero />
      <Differentiator />
      <Panorama />
      <EstadoActual />
      <ElPlan />
      <MasAllaDelVoice />
      <Differentiator />
      <CasosReales />
      <Inversion />
      <FAQ />
      <ProximosPasos />
      <ProposalFooter />
    </div>
  );
}

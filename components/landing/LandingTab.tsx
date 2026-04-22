import Hero from "./Hero";
import TrustBand from "./TrustBand";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

export default function LandingTab() {
  return (
    <div>
      <Hero />
      <TrustBand />
      <Services />
      <Portfolio />
      <Testimonials />
    </div>
  );
}

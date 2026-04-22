import Hero from "./Hero";
import VoiceOrb from "./VoiceOrb";
import TrustBand from "./TrustBand";
import Services from "./Services";
import IstuetaDifference from "./IstuetaDifference";
import Portfolio from "./Portfolio";
import ProcessTimeline from "./ProcessTimeline";
import Testimonials from "./Testimonials";
import ServiceAreas from "./ServiceAreas";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function LandingTab() {
  return (
    <div>
      <Hero />
      <VoiceOrb />
      <TrustBand />
      <Services />
      <IstuetaDifference />
      <Portfolio />
      <ProcessTimeline />
      <Testimonials />
      <ServiceAreas />
      <ContactForm />
      <Footer />
    </div>
  );
}

import HeroSection from "@/components/home/heroSection";
import Aboutus from "@/components/home/aboutUs";

import SolutionsSlider from "@/components/home/SolutionsSlider";
import CallToAction from "@/components/home/CallToAction";
import ProcessFlow from "@/components/home/ProcessFlow";
import ServicesSection from "@/components/home/ServicesSection";
import Testimonials from "@/components/home/Testimonial";
import CtaSection from "@/components/home/CtaSection";


export default function Home() {
  return (
    <>
    <HeroSection />
    <Aboutus />
    <SolutionsSlider />
    <CallToAction />
    <ServicesSection />
    <Testimonials />
    <ProcessFlow />
    <CtaSection />

    </>
  );
}

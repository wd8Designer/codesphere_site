import Image from "next/image";
import HeroSection from "@/components/heroSection";
import Aboutus from "@/components/aboutUs";
import VideoBg from "@/components/videoBg";
import SolutionsSlider from "@/components/SolutionsSlider";
import CallToAction from "@/components/CallToAction";
import ProcessFlow from "@/components/ProcessFlow";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonial";


export default function Home() {
  return (
    <>
    <VideoBg />
    <HeroSection />
    <Aboutus />
    <SolutionsSlider />
    <CallToAction />
    <ServicesSection />
    <Testimonials />
    <ProcessFlow />
    </>
  );
}

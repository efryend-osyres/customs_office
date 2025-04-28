import { Footer } from "@/components/shared/footer";
import HeroSection from "./components/HeroSection";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import Section8 from "./components/Section8";
import Section9 from "./components/Section9";
import Contact from "./components/Contact";
import Section2_5 from "./components/Section2_5";
import Section4_5 from "./components/Section4_5";
import ParallaxGear from "./components/ParallaxGear";

export default function Home() {
    return (
        <>
            <HeroSection />
            <Section1 />
            <div id="bussines" className="pt-20" />
            <Section2 />
            <Section2_5 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section4_5 />
            <Section6 />
            <Section7 />
            <ParallaxGear />
            <div id="specialty" className="pt-20" />
            <Section8 />
            <div id="coverage" className="pt-32" />
            <Section9 />
            <div id="contact" className="pt-20" />
            <Contact />
            <Footer />
        </>
    );
}

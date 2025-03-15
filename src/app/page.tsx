import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import StandOutSection from "@/components/standout/Standout";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import ChooseUs from "@/components/sections/ChooseUs";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<ChooseUs />
			<HowItWorks />
			<StandOutSection/>
			<Testimonials/>
			<CTA />
			<FAQ/>
		</>
	);
}

import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import StandOutSection from "@/components/standout/Standout";

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<HowItWorks />
			<Benefits />
			<StandOutSection/>
			<Pricing />
			<CTA />
		</>
	);
}

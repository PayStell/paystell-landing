import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import ChooseUs from "@/components/layout/ChooseUs";

export default function Home() {
	return (
		<>
			<Hero />
			<ChooseUs />
			<Features />
			<HowItWorks />
			<Benefits />
			<Pricing />
			<CTA />
		</>
	);
}

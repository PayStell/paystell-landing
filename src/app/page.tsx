import Benefits from "@/components/sections/Benefits";
import CTA from "@/components/sections/CTA";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Testimonials from "@/components/sections/Testimonials";
import ChooseUs from "@/components/layout/ChooseUs";

export default function Home() {
	return (
		<>
			<Hero />
			<ChooseUs />
			<Features />
			<ChooseUs />
			<HowItWorks />
			<Benefits />
			<Testimonials/>
			<Pricing />
			<CTA />
			<FAQ/>
		</>
	);
}

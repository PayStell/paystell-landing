import { Button } from "@/components/ui/button";

const Hero = () => {
	return (
		<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-[#000F24]">
			<div className="container">
				<div className="max-w-3xl mx-auto text-center">
					<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
						<span className="text-white">Transform the way you accept payments</span>
						<span className="text-primary">—secure, fast, and reliable</span>
						{" "}
						<span className="text-white">with PayStell</span>
						<span className="inline-block animate-pulse">💫</span>
					</h1>

					<p className="mt-6 text-lg leading-8 text-muted-foreground">
						Easily accept payments reduce transaction cost, and expand your business
						globally with PayStell's fast, secure payment solutions.
					</p>

					<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="lg">Get Started</Button>
						<Button variant="outline" size="lg" className="border-primary text-primary">
							Request Demo
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

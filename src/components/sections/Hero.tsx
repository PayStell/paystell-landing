import { Button } from "@/components/ui/button";
import AnimatedBackground from "@/components/ui/animation/AnimatedBackground";

const Hero = () => {
	return (
		<section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
			<AnimatedBackground />
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] aspect-[5/1]">
				<div className="absolute top-0 w-[150%] left-1/2 -translate-x-1/2 h-[290%] rounded-[50%] bg-[#00040b]/80 backdrop-blur-sm blur-sm/20" />
				{/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/20 animate-pulse-slow blur-3xl opacity-10 z-1" /> */}
				<div className="absolute top-0 w-[200%] left-1/2 -translate-x-1/2 h-[300%] rounded-[50%] bg-white/25 backdrop-blur-sm blur-xl opacity-30 animate-pulse-slow" />
			</div>
			<div className="container relative z-10">
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

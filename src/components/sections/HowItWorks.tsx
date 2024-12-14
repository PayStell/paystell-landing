import { ArrowRight } from "lucide-react";

const steps = [
	{
		number: "01",
		title: "Register & Setup",
		description: "Get paid instantly, anywhere in the world",
	},
	{
		number: "02",
		title: "Share Link",
		description:
			"Get paid instantly, anywhere in the world",
	},
	{
		number: "03",
		title: "Receive Payments",
		description:
			"Get paid instantly, anywhere in the world",
	},
];

const HowItWorks = () => {
	return (
		<section id="how-it-works" className="py-24 bg-background">
			<div className="container">
				<div className="flex justify-center items-center mb-4">
					<div className="px-3 py-1 text-sm font-semibold rounded-full bg-[rgb(229,247,255)] text-[rgb(1,158,255)]" >
						BENEFITS 💫
					</div> 
				</div>	
				<div className="mt-4 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						How it works!
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Getting started is this simple - from creating a payment link to receiving funds, we've made every step smooth and hassle-free.
					</p>
				</div>

				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{steps.map((step, index) => (
						<div
							key={step.number}
							className="relative flex flex-col items-center text-center"
						>
							<div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
								<span className="text-xl font-bold text-primary">
									{step.number}
								</span>
							</div>
							<h3 className="text-xl font-semibold mb-2">{step.title}</h3>
							<p className="text-muted-foreground">{step.description}</p>

							{index < steps.length - 1 && (
								<ArrowRight className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-muted-foreground/30" />
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;

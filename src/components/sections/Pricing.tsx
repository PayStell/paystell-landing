import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const tiers = [
	{
		name: "Starter",
		price: "0",
		description: "Perfect for small businesses starting their journey.",
		features: [
			"Up to 100 transactions/month",
			"Basic payment gateway",
			"Email support",
			"Basic analytics",
			"Standard security features",
		],
	},
	{
		name: "Professional",
		price: "49",
		description:
			"Ideal for growing businesses with higher transaction volumes.",
		features: [
			"Up to 1,000 transactions/month",
			"Custom branded gateway",
			"Priority support",
			"Advanced analytics",
			"Enhanced security features",
			"Multiple payment methods",
		],
		featured: true,
	},
	{
		name: "Enterprise",
		price: "Custom",
		description: "For large businesses needing custom solutions.",
		features: [
			"Unlimited transactions",
			"Custom integration support",
			"24/7 dedicated support",
			"Custom analytics",
			"Advanced security suite",
			"Custom payment methods",
			"API access",
		],
	},
];

const Pricing = () => {
	return (
		<section id="pricing" className="py-24 bg-background">
			<div className="container">
				<div className="text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Simple, transparent pricing
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Choose the plan that best fits your business needs
					</p>
				</div>

				<div className="mt-16 grid gap-8 md:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.name}
							className={cn(
								"relative rounded-lg p-8 shadow-sm",
								tier.featured
									? "border-2 border-primary bg-background"
									: "border bg-background/50",
							)}
						>
							{tier.featured && (
								<span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
									Popular
								</span>
							)}

							<div className="mb-8">
								<h3 className="text-xl font-semibold">{tier.name}</h3>
								<div className="mt-4 flex items-baseline">
									<span className="text-4xl font-bold">${tier.price}</span>
									{tier.price !== "Custom" && (
										<span className="ml-2 text-muted-foreground">/month</span>
									)}
								</div>
								<p className="mt-4 text-sm text-muted-foreground">
									{tier.description}
								</p>
							</div>

							<ul className="space-y-3 mb-8">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
										<span className="text-sm">{feature}</span>
									</li>
								))}
							</ul>

							<Button
								variant={tier.featured ? "default" : "outline"}
								className="w-full"
							>
								Get started
							</Button>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Pricing;

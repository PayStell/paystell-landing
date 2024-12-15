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
		content: (
			<div className="flex flex-col items-center justify-center w-full p-4 rounded-lg shadow-md">
				<h4 className="text-sm font-semibold mb-2">Share your payment link</h4>
				<p className="text-xs mb-2">Share as you prefer</p>

				<div className="w-full mb-2">
					<input type="text"
							value="https://link.paystell.com/11aa22"
							readOnly
							className="w-full p-2 text-xs border rounded-lg" />
				</div>

				<button className="bg-[rgb(1,158,255)] text-white text-sm font-semibold px-4 py-1 rounded-md">Copy Link</button>

				<p className="text-xs mt-4 mb-2">Charge for a payment button on your website</p>

				<div className="w-full mb-2">
					<input type="text"
							value={`<script src="https://integrate.paystell.com/"`}
							readOnly
							className="w-full p-2 text-xs border rounded-l" />
				</div>
			</div>
		),
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
					<div className="px-3 py-1 text-sm font-semibold rounded-full bg-[rgb(229,247,255)] text-[rgb(1,158,255)] flex items-center gap-1" >
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

				<div className="relative mt-16 flex justify-between items-center">
					{steps.map((step, index) => (
						<div
							key={index}
							className="relative z-10 w-1/3 flex flex-col items-center text-center px-4">
							<div className="flex items-center justify-center w-60 h-60 bg-white rounded-lg shadow-lg">
								{step.content || null}
							</div>
							<h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
							<p className="text-muted-foreground">{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;

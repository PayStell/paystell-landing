const steps = [
  {
    number: "01",
    title: "Register & Setup",
    description: "Get paid instantly, anywhere in the world",
  },
  {
    number: "02",
    title: "Share Link",
    description: "Get paid instantly, anywhere in the world",
    content: (
      <div className="flex flex-col items-center justify-center w-full p-4 ">
        <h4 className="text-sm font-semibold mb-2 text-left w-full">
          Share your payment link
        </h4>
        <div className="border border-gray-100 rounded-lg shadow-lg w-full mb-4 p-4">
          <p className="text-xs mb-2 text-left w-full">Share as you prefer</p>

          <div className="w-full mb-2">
            <input
              type="text"
              value="https://link.paystell.com/11aa22"
              readOnly
              className="w-full p-2 text-xs border rounded-lg"
            />
          </div>

          <button className="bg-[rgb(1,158,255)] text-white text-sm font-semibold w-full p-1 rounded-md">
            Copy Link
          </button>
        </div>
        <div className="border border-gray-100 rounded-lg shadow-lg w-full mb-4 p-2">
          <p className="text-xs mt-2 mb-2 text-left w-full ">
            Charge for a payment button on your website
          </p>

          <div className="w-full mb-2">
            <input
              type="text"
              value={`<script src="https://integrate.paystell.com/"`}
              readOnly
              className="w-full p-2 text-xs border rounded-lg"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "Receive Payments",
    description: "Get paid instantly, anywhere in the world",
  },
];

const HowItWorks = () => {
	return (
		<section id="how-it-works" className="py-24 bg-background">
			<div className="container w-full max-w-full">
				<div className="flex justify-center items-center mb-4">
					<div className="px-3 py-1 text-sm font-semibold rounded-full bg-[rgb(229,247,255)] text-[rgb(1,158,255)] flex items-center gap-1" >
						BENEFITS <img src="/files/star.png" className="w-5 h-5"/>
					</div> 
				</div>	
				<div className="mt-4 text-center max-w-3xl mx-auto">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						How it Works!
					</h2>
					<p className="mt-4 text-lg text-muted-foreground">
						Getting started is this simple - from creating a payment link to receiving funds, we've made every step smooth and hassle-free.
					</p>
				</div>

				<div className="relative mt-16 flex justify-between items-center ">
					{steps.map((step, index) => (
						<div
							key={index}
							className="relative z-10 w-1/2 flex flex-col items-center text-center px-4">
							<div className="flex items-center justify-center w-80 h-60 bg-white rounded-lg shadow-lg overflow-hidden">
								{step.content || null}
							</div>
							<div className="max-w-40">

							<h3 className="mt-4 font-semibold text-lg">{step.title}</h3>
							
								<p className="text-muted-foreground">{step.description}</p>
							</div>
						</div>
						
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;

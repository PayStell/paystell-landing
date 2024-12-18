
import Image from "next/image"
import ImageOne from "@/components/standout/assets/star.svg"
import ImageTwo from  "@/components/standout/assets/Frame 2147223741.png"
import ImageThree from  "@/components/standout/assets/tick-circle.svg"
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const StandOutSection = () => {
  return (
		<section id="how-it-works" className="py-24 bg-background">
			<div className="container flex flex-col md:flex-row md:justify-between md:items-start">
     
      <div className="md:w-[608px]">
          <div className="flex mb-4">
            <Badge className="w-fit bg-primary/10 px-3 rounded-xl hover:bg-primary/10">
              <h2 className="text-lg font-bold text-primary mr-3">FEATURES</h2>
              <Image src="/star.svg" width={28} height={28} alt="star" />
						</Badge>
					</div>	
        <h2 className="text-2xl md:text-3xl font-semibold mt-4 mb-2">
          Why We Stand Out
        </h2>
        <p className="text-sm md:text-base leading-6 md:leading-7 mt-3">
          Start collecting payments effortlessly with PayStell. Simplify your
          process, skip the hassle, and focus on what matters most—growing your
          business.
        </p>
      </div>
  
      
      <div className="mt-14 md:w-96">
        <ul className="space-y-3">
          <li className="flex items-center text-[#333333] text-lg md:text-xl leading-6 md:leading-7">
            <div className="w-6 h-6 mr-3 animate-bounce">
              <Image
                src={ImageThree}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                alt="Check Icon"
              />
            </div>
            Instant payment processing
          </li>
          <li className="flex items-center text-[#333333] text-lg md:text-xl leading-6 md:leading-7 mt-3">
            <div className="w-6 h-6 mr-3 animate-bounce">
              <Image
                src={ImageThree}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                alt="Check Icon"
              />
            </div>
            No hidden fees
          </li>
          <li className="flex items-center text-[#333333] text-lg md:text-xl leading-6 md:leading-7 mt-3">
            <div className="w-6 h-6 mr-3 animate-bounce">
              <Image
                src={ImageThree}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                alt="Check Icon"
              />
            </div>
            Low transaction fees
          </li>
          <li className="flex items-center text-[#333333] text-lg md:text-xl leading-6 md:leading-7 mt-3">
            <div className="w-6 h-6 mr-3 animate-bounce">
              <Image
                src={ImageThree}
                width={500}
                height={500}
                className="w-full h-full object-contain"
                alt="Check Icon"
              />
            </div>
            Instant Payment Processing
          </li>
        </ul>
      </div>
  
     
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg">
							Get Started Now
						</Button>
          </div>
    </div>
  
  
	<div className="w-full md:w-1/2 flex justify-center items-center animate-fade-in mt-10 md:mt-0">
	  <Image
		  src={ImageTwo}
		  width={500}
		  height={300}
		  className="w-full h-72 object-contain"
		  alt="Why We Stand Out Image"
	  />
	</div>
  </section>
  )
}

export default StandOutSection

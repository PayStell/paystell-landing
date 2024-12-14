import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="h-800 relative pt-32 pb-24 lg:pt-40 lg:pb-32 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <Badge className="bg-primary/10 hover:bg-primary/10 p-2 rounded-xl    ">
            <h2 className="text-xl font-bold text-primary mr-3">STORIES</h2>
            <Image src="/star.svg" width={28} height={28} alt="star" />
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

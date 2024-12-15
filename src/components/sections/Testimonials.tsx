"use client";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/types";
import Image from "next/image";
import Card from "@/components/ui/card";

const testimonials: Testimonial[] = [
  {
    image: "/person-sample.svg",
    quote:
      "As a small business owner, PayStell has been a game-changer. Setting up was effortless, and the payment links make it so simple for my customers to pay. Plus, the low fees help me save money on every transaction. It's the perfect solution for my growing business!",
    author: "Alex J",
    role: "Owner of Crafty Creations",
  },
  {
    image: "/person-sample.svg",
    quote:
      "The platform has transformed how we handle payments. It's intuitive and reliable.",
    author: "Sam T",
    role: "CEO of Digital Solutions",
  },
  {
    image: "/person-sample.svg",
    quote:
      "Customer support is outstanding. They're always there when you need them.",
    author: "Jordan M",
    role: "Founder of Tech Innovators",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative pt-24 bg-background">
      <div className="container">
        <div className="text-center flex flex-col items-center">
          <Badge className="w-fit bg-primary/10 px-3 rounded-xl hover:bg-primary/10">
            <h2 className="text-lg font-bold text-primary mr-3">STORIES</h2>
            <Image src="/star.svg" width={28} height={28} alt="star" />
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mt-4">
            What people say
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our users have to say about PayStell.
          </p>
          <div className="relative mt-12 w-full mx-auto min-h-[700px] sm:min-h-[500px] md:min-h-[410px]">
            <div className="relative flex justify-center">
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                const position = index - activeIndex;

                return (
                  <div
                    key={index}
                    className="absolute w-full transition-all duration-700 ease-in-out"
                    style={{
                      transform: `translateY(${position * 60}px) scale(${
                        0.97 * (1 - Math.abs(position) * 0.05)
                      })`,
                      opacity: position >= 0 ? 1 - position * 0.2 : 0,
                      zIndex: testimonials.length - Math.abs(position),
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    {/* Cambiar el ancho máximo y el padding interno aquí */}
                    <Card className="py-12 px-20 bg-white rounded-lg shadow-md max-w-5xl mx-auto">
                      <div className="flex flex-col items-center text-center gap-6">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden bg-pink-100">
                          <Image
                            src={testimonial.image}
                            alt={`${testimonial.author}'s profile picture`}
                            width={96}
                            height={96}
                            className="object-cover"
                          />
                        </div>
                        <blockquote className="text-gray-700 text-xl">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-2">
                          <cite className="not-italic font-semibold text-gray-900 text-lg">
                            {testimonial.author}
                          </cite>
                          <p className="text-gray-500 text-base">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

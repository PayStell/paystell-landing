"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is Paystell secure for payments?",
    answer: "PayStell uses Stellar blockchain technology to ensure secure, reliable transactions with encryption that protects your data and funds."
  },
  {
    question: "How do I create a payment link?",
    answer: "Creating a payment link is simple and only takes a few steps. You can generate a unique payment link from your dashboard."
  },
  {
    question: "What are the transactions fee?",
    answer: "Our transaction fees are competitive and transparent. Please check our pricing page for detailed information."
  },
  {
    question: "Can I accept international payments?",
    answer: "Yes, PayStell supports international payments across multiple currencies."
  },
  {
    question: "How long does it take to receive payments?",
    answer: "Payment processing times vary depending on the payment method and location."
  },
  {
    question: "Do I need technical skills to use Paystell?",
    answer: "No, PayStell is designed to be user-friendly and requires no technical expertise to use."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-primary mb-4">
            <span className="font-medium">SUPPORT</span>
            <span className="text-lg">★</span>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to about Paystell. Can't find the answer you're looking for?{" "}
              <a href="#contact" className="text-primary hover:underline">
                Contact our friendly team
              </a>
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`border rounded-lg bg-background/50 ${
                  openIndex === index ? "border-primary" : ""
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center hover:bg-muted/50 transition-colors"
                >
                  <span className="font-medium text-left">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 border-t text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
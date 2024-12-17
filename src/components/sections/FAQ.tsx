"use client"

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Is Paystell secure for payments?",
    answer: "Yes, Paystell is highly secure for payments. Our platform leverages the advanced security features of the Stellar blockchain, including encryption, decentralized ledger technology, and multi-signature capabilities. These ensure that all transactions are safe, transparent, and resistant to fraud. Additionally, Paystell implements robust security protocols and complies with industry standards to protect your data and funds at every step."
  },
  {
    question: "How do I create a payment link?",
    answer: "To create a payment link with Paystell, simply sign up for an account, log in, and go to the 'Create Payment Link' section. Customize the link with the amount, description, and any other details you need. Once created, copy the link and share it with your customers via email, social media, or messaging apps. Your payment link is then live and ready to accept payments securely from anywhere in the world, instantly."
  },
  {
    question: "What are the transaction fees?",
    answer: "Paystell operates with ultra-low transaction fees, leveraging the efficiency of the Stellar network. Each transaction costs just a fraction of a cent, plus a 0.5% commission per transaction. This makes Paystell one of the most affordable and competitive payment solutions available."
  },
  {
    question: "Can I accept international payments?",
    answer: "Yes, you can accept payments from anywhere in the world! Paystell allows you to receive international payments seamlessly, thanks to the global reach of the Stellar network. Whether your customers are in the next city or across the globe, you can easily receive payments in multiple currencies, all with low transaction fees and high security."
  },
  {
    question: "How long does it take to receive payments?",
    answer: "Payments through Paystell are processed almost instantly! Thanks to the efficiency of the Stellar network, funds are typically available within seconds, ensuring you can access your money quickly and securely. No long waiting times—just fast, reliable transactions."
  },
  {
    question: "Do I need technical skills to use Paystell?",
    answer: "No, you don't need any technical skills to use Paystell. Our platform is designed to be user-friendly and intuitive, allowing anyone to create payment links, manage transactions, and receive payments with ease. Whether you're a small business owner or an entrepreneur, Paystell makes it simple to get started without any technical expertise."
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
          <div className="text-center mb-12">
            <Badge className="w-fit bg-primary/10 px-3 rounded-xl hover:bg-primary/10">
              <h2 className="text-lg font-bold text-primary mr-3">SUPPORT</h2>
              <Image src="/star.svg" width={28} height={28} alt="star" />
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Everything you need to know about Paystell. Can't find the answer you're looking for?{" "}
              <br/>
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

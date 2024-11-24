import { ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Register and Setup',
    description: 'Register and set up a customized gateway with your branding.',
  },
  {
    number: '02',
    title: 'Integration',
    description: 'Integrate PayStell with your store and set payment parameters.',
  },
  {
    number: '03',
    title: 'Accept Payments',
    description: 'Accept payments in local currency via Stellar-powered transactions.',
  },
]

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get started in minutes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple steps to transform your payment experience
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center text-center"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <span className="text-xl font-bold text-primary">{step.number}</span>
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
  )
}

export default HowItWorks 
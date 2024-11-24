import { Check } from 'lucide-react'

const benefits = [
  {
    title: 'Localized Solutions',
    description: 'Tailored payment solutions designed specifically for LATAM markets.',
    items: [
      'Support for local currencies',
      'Regional payment methods',
      'Local language support',
      'Compliance with regional regulations'
    ]
  },
  {
    title: 'Secure Transactions',
    description: 'Built on Stellar blockchain for maximum security and reliability.',
    items: [
      'Blockchain-powered security',
      'Real-time transaction tracking',
      'Fraud prevention',
      'Transparent operations'
    ]
  },
  {
    title: 'Cost Effective',
    description: 'Minimize costs while maximizing your business potential.',
    items: [
      'Low transaction fees',
      'No hidden charges',
      'Volume-based pricing',
      'Free basic features'
    ]
  }
]

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why choose PayStell
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Designed for LATAM businesses, powered by blockchain technology
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-background rounded-lg p-8 shadow-sm border"
            >
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground mb-6">{benefit.description}</p>
              
              <ul className="space-y-3">
                {benefit.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits 
import { Button } from '@/components/ui/button'

const CTA = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Ready to transform your payment experience?
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/90">
            Join thousands of businesses in LATAM using PayStell to power their payments.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
            >
              Get Started Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA 
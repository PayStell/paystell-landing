import { Shield, Banknote, Gauge, Globe, BarChart3, Lock } from 'lucide-react'
import Section from '@/components/ui/section'
import SectionHeader from '@/components/ui/section-header'
import Container from '@/components/ui/container'
import Card from '@/components/ui/card'
import FeatureIcon from '@/components/ui/feature-icon'

const features = [
  {
    name: 'Customizable Payment Gateways',
    description: 'Brand your payment gateway and set your own parameters for a unique payment experience.',
    icon: Shield,
  },
  {
    name: 'Local Currency Support',
    description: 'Accept payments in LATAM currencies with real-time Stellar exchange rates.',
    icon: Banknote,
  },
  {
    name: 'Minimal Transaction Fees',
    description: 'Keep more of your earnings with our cost-effective payment processing.',
    icon: Gauge,
  },
  {
    name: 'Global Integration',
    description: 'Seamlessly integrate with local and online payment systems.',
    icon: Globe,
  },
  {
    name: 'Intuitive Dashboard',
    description: 'Track and manage payments with our easy-to-use merchant dashboard.',
    icon: BarChart3,
  },
  {
    name: 'Blockchain Security',
    description: 'Leverage Stellar blockchain for secure, transparent transactions.',
    icon: Lock,
  },
]

const Features = () => {
  return (
    <Section id="features" variant="muted">
      <Container>
        <SectionHeader
          title="Everything you need to accept payments"
          description="Powerful features to help your business grow in the digital economy."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.name}>
              <div className="flex items-center gap-4">
                <FeatureIcon icon={feature.icon} />
                <h3 className="font-semibold">{feature.name}</h3>
              </div>
              <p className="mt-4 text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}

export default Features 
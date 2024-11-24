import type { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureIconProps {
  icon: LucideIcon
  className?: string
}

const FeatureIcon = ({ icon: Icon, className }: FeatureIconProps) => {
  return <Icon className={cn("h-6 w-6 text-primary", className)} aria-hidden="true" />
}

export default FeatureIcon 
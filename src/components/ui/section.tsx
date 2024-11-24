import { cn } from "@/lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  variant?: 'default' | 'muted' | 'primary'
}

const Section = ({ 
  children, 
  className, 
  variant = 'default',
  ...props 
}: SectionProps) => {
  return (
    <section
      className={cn(
        "py-24",
        {
          'bg-background': variant === 'default',
          'bg-muted/50': variant === 'muted',
          'bg-primary': variant === 'primary',
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export default Section 
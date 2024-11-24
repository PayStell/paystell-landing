'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useScrollDirection } from '@/hooks/use-scroll-direction'
import { cn } from '@/lib/utils'

const Header = () => {
  const { scrollDirection, isAtTop } = useScrollDirection()

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0',
        isAtTop 
          ? 'bg-background' 
          : 'bg-background/80 backdrop-blur-md border-b'
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">PayStell</span>
          <span className="text-2xl">💫</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How it Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm">
            Login
          </Button>
          <Button size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header 
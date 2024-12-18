"use client";

import { Button } from "@/components/ui/button";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	const { scrollDirection, isAtTop } = useScrollDirection();

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full transition-all duration-300 ",
				scrollDirection === "down" ? "-translate-y-full" : "translate-y-0",
				isAtTop
					? "bg-[#000F24]"
					: "bg-[#000F24]/80 backdrop-blur-md border-b",
			)}
		>
			<div className="container flex h-16 items-center justify-between">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="/logo.svg"
						alt="PayStell Logo"
						width={120}
						height={30}
						priority
					/>
				</Link>

				{/* Navigation */}
				<nav className="hidden md:flex items-center gap-6 text-gray-200 bg-white/10 rounded-full p-2 px-8">
					<Link
						href="#home"
						className="text-sm font-medium hover:text-primary"
					>
						Home
					</Link>
					<Link
						href="#features"
						className="text-sm font-medium hover:text-primary"
					>
						Features
					</Link>
					<Link
						href="#contact"
						className="text-sm font-medium hover:text-primary"
					>
						Contact
					</Link>
					<Link
						href="#docs"
						className="text-sm font-medium hover:text-primary"
					>
						Docs
					</Link>
					<Link
						href="#pricing"
						className="text-sm font-medium hover:text-primary"
					>
						Pricing
					</Link>
					<Link
						href="#faqs"
						className="text-sm font-medium hover:text-primary"
					>
						FAQs
					</Link>
				</nav>

				{/* Buttons */}
				<div className="flex items-center gap-4">
					<Button
						variant="ghost"
						size="sm"
						className="border border-primary text-primary hover:bg-primary hover:text-white"
					>
						Login
					</Button>
					<Button
						size="sm"
						className="bg-primary text-white hover:bg-primary-dark"
					>
						Get Started
					</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
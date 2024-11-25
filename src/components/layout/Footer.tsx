import Link from "next/link";

const Footer = () => {
	return (
		<footer className="border-t bg-background">
			<div className="container py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
				<div>
					<h3 className="font-semibold mb-4">Product</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#features" className="text-sm hover:text-primary">
								Features
							</Link>
						</li>
						<li>
							<Link href="#pricing" className="text-sm hover:text-primary">
								Pricing
							</Link>
						</li>
						<li>
							<Link href="#demo" className="text-sm hover:text-primary">
								Request Demo
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-4">Resources</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/docs" className="text-sm hover:text-primary">
								Documentation
							</Link>
						</li>
						<li>
							<Link href="/api" className="text-sm hover:text-primary">
								API Reference
							</Link>
						</li>
						<li>
							<Link href="/faq" className="text-sm hover:text-primary">
								FAQ
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-4">Company</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/about" className="text-sm hover:text-primary">
								About
							</Link>
						</li>
						<li>
							<Link href="/contact" className="text-sm hover:text-primary">
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="font-semibold mb-4">Legal</h3>
					<ul className="space-y-2">
						<li>
							<Link href="/privacy" className="text-sm hover:text-primary">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="/terms" className="text-sm hover:text-primary">
								Terms of Service
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="container py-6 border-t">
				<p className="text-sm text-muted-foreground text-center">
					© {new Date().getFullYear()} PayStell. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;

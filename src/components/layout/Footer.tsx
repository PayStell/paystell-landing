import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<footer className="border-t bg-background">
			<div className="container py-16 grid grid-cols-2 md:grid-cols-7 gap-8">
				<div>
					<div className="flex flex-col items-center">
						{/* Logo */}
						<Link href="/" className="mb-4">
							<Image
								src="/logoPayStell.svg"
								alt="PayStell Logo"
								width={120}
								height={30}
								priority
							/>
						</Link>
						{/* Redes sociales */}
						<div className="flex gap-4">
							<Link target="_blank" href="https://www.facebook.com/paystell">
								<Image
									src="/facebook.svg"
									alt="Facebook PayStell"
									width={40}
									height={40}
									priority
								/>
							</Link>
							<Link target="_blank" href="https://x.com/paystell">
								<Image
									src="/x.svg"
									alt="X PayStell"
									width={40}
									height={40}
									priority
								/>
							</Link>
							<Link target="_blank" href="https://www.instagram.com/paystell/">
								<Image
									src="/instagram.svg"
									alt="Instagram PayStell"
									width={40}
									height={40}
									priority
								/>
							</Link>
						</div>
					</div>
				</div>
				<div></div>
				<div>
					<h3 className="font-semibold mb-4">Company</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#home" className="text-sm hover:text-primary text-[#606060]">
								Home
							</Link>
						</li>
						<li>
							<Link href="#about" className="text-sm hover:text-primary text-[#606060]">
								About
							</Link>
						</li>
						<li>
							<Link href="#contact" className="text-sm hover:text-primary text-[#606060]">
								Contact Us
							</Link>
						</li>
						<li>
							<Link href="#how-it-works" className="text-sm hover:text-primary text-[#606060]">
								How it works
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-4">Product</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#testimonials" className="text-sm hover:text-primary text-[#606060]">
								Testimonials
							</Link>
						</li>
						<li>
							<Link href="#pricing" className="text-sm hover:text-primary text-[#606060]">
								Pricing
							</Link>
						</li>
						<li>
							<Link href="#faq" className="text-sm hover:text-primary text-[#606060]">
								FAQ
							</Link>
						</li>
						<li>
							<Link href="#request-demo" className="text-sm hover:text-primary text-[#606060]">
								Request Demo
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-4">Legals</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#privacy-policy" className="text-sm hover:text-primary text-[#606060]">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href="#terms-of-service" className="text-sm hover:text-primary text-[#606060]">
								Terms of Service
							</Link>
						</li>
						<li>
							<Link href="#cookie-policy" className="text-sm hover:text-primary text-[#606060]">
								Cookie Policy
							</Link>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-semibold mb-4">Resources</h3>
					<ul className="space-y-2">
						<li>
							<Link href="#documentation" className="text-sm hover:text-primary text-[#606060]">
								Documentation
							</Link>
						</li>
						<li>
							<Link href="#api-reference" className="text-sm hover:text-primary text-[#606060]">
								API Reference
							</Link>
						</li>
						<li>
							<Link href="#faqs" className="text-sm hover:text-primary text-[#606060]">
								FAQs
							</Link>
						</li>
						<li>
							<Link href="#cookie-policy" className="text-sm hover:text-primary text-[#606060]">
								Cookie Policy
							</Link>
						</li>
					</ul>
				</div>
			</div>
			<div className="container py-6 border-t">
				<p className="text-sm text-muted-foreground text-center">
					Copyright © {new Date().getFullYear()} paystell.com
				</p>
				<br />
				<br />
			</div>
		</footer>
	);
};

export default Footer;

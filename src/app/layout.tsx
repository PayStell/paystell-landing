import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import ErrorBoundary from "@/components/error-boundary";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "PayStell - Secure Payments for LATAM",
	description:
		"Transform the way you accept payments—secure, fast, and reliable with PayStell 💫",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen bg-background font-sans antialiased",
					inter.className,
				)}
			>
				<ErrorBoundary
					fallback={
						<div className="flex min-h-screen items-center justify-center">
							<div className="text-center">
								<h2 className="text-2xl font-bold">Something went wrong</h2>
								<p className="mt-2 text-muted-foreground">
									Please try refreshing the page
								</p>
							</div>
						</div>
					}
				>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</ErrorBoundary>
			</body>
		</html>
	);
}

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
	title: string;
	description?: string;
	className?: string;
	align?: "left" | "center";
}

const SectionHeader = ({
	title,
	description,
	className,
	align = "center",
}: SectionHeaderProps) => {
	return (
		<div
			className={cn(
				"max-w-3xl",
				align === "center" && "mx-auto text-center",
				className,
			)}
		>
			<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
			{description && (
				<p className="mt-4 text-lg text-muted-foreground">{description}</p>
			)}
		</div>
	);
};

export default SectionHeader;

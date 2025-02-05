import { MouseEventHandler } from "react";
import { Separator } from "./ui/separator";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "./ui/tooltip";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SeparatorButton({
	icon: Icon,
	onClick,
	tooltipText,
	className,
}: {
	onClick: MouseEventHandler<HTMLButtonElement> | undefined;
	icon: LucideIcon;
	tooltipText: string;
	className?: string;
}) {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					className={cn(
						"w-full h-14 flex items-center gap-4 group",
						className
					)}
					onClick={onClick}
					type="button"
				>
					<Separator className="flex-1 bg-border group-hover:bg-primary transition-colors" />
					<Icon className="text-border group-hover:text-primary transition-colors" />
					<Separator className="flex-1 bg-border group-hover:bg-primary transition-colors" />
				</TooltipTrigger>
				<TooltipContent>
					<p>{tooltipText}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

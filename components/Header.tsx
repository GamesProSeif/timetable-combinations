import Link from "next/link";
import GithubLogo from "../app/assets/github.svg";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { CalendarRange } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
	return (
		<header className="bg-accent flex px-10 py-4 justify-start items-center gap-2">
			<CalendarRange className="text-white" />
			<h3 className="text-xl text-white font-bold">
				Timetable Combinations
				<span className="opacity-60 font-normal">
					{ " / "}
					<Link href="https://github.com/GamesProSeif" target="_blank" className="hover:underline">
						@Seif Mansour
					</Link>
				</span>
			</h3>
			<div className="flex-1"></div>
			<Link
				href="https://github.com/GamesProSeif/timetable-combinations"
				target="_blank"
				className={buttonVariants({ variant: "ghost", size: "icon" })}
			>
				<Image src={GithubLogo} alt="github logo" />
			</Link>
			<ModeToggle />
		</header>
	);
}

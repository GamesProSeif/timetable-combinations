import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Combiner from "@/lib/Combiner";
import { applyFilters } from "@/lib/Filters";
import { capitalizeFirstLetter, keyToDay } from "@/lib/utils";
import { Ban } from "lucide-react";

const colors = [
	"bg-violet-700/50 hover:bg-violet-700/80",
	"bg-pink-700/50 hover:bg-pink-700/80",
	"bg-blue-700/50 hover:bg-blue-700/80",
	"bg-teal-700/50 hover:bg-teal-700/80"
];

export default function Timetable({
	slots
}: {
	slots: ReturnType<Combiner["generate"]>[number]
}) {
	const maxSlotTime = Math.max(slots.reduce(
		(max, current) => Math.max(max, current.end),
		1
	), 6);

	const uniqueSubjects = Array.from(new Set(slots.map(s => s.subjectName)));
	uniqueSubjects.sort();

	function Cell({ day, time }: { day: number; time: number; }) {
		const hasClashes = applyFilters([slots.filter(slot => slot.day === day)], [{ name: "no-clash" }]).length !== 0;

		if (!hasClashes) {
			const filteredSlots = slots.filter(
				(slot) =>
					slot.day === day && (time >= slot.start && time <= slot.end)
			);
			if (filteredSlots.length === 0)
				return <TableCell className={"border last:border-r-0"}></TableCell>
			else
				return <TableCell className={"border last:border-r-0"}>
					<div className="flex gap-2 items-center">
						{filteredSlots.length > 1 && <Ban className="text-destructive" />} { filteredSlots.map(slot => `${slot.subjectName} ${capitalizeFirstLetter(slot.type).slice(0, 3)} ${slot.group}`).join("\n") }
					</div>
				</TableCell>
		} else {
			const slot = slots.find(s =>
				s.day === day && (time >= s.start && time <= s.end)
			);

			if (!slot)
				return <TableCell className={"border last:border-r-0"}></TableCell>
			else if (slot.start === time)
				return <TableCell
					colSpan={slot.end - slot.start + 1}
					className={
						"bg-muted/80 dark:bg-muted/30 text-center border last:border-r-0"
					}
				>
					<div className="flex gap-2 justify-center items-center">
						<Badge className={colors[uniqueSubjects.indexOf(slot.subjectName)]}>
							{ slot.subjectName }
						</Badge>
						<p>
							{ `${capitalizeFirstLetter(slot.type).slice(0, 3)} ${slot.group}` }
						</p>
					</div>
				</TableCell>
			return undefined;
		}
	}

	return (
		<>
			<div className="border rounded-md">
				<Table>
					<TableCaption className="my-2">
						<div className="flex items-center justify-center gap-2">
							{ uniqueSubjects.map((subject, i) => (
								<Badge key={i} className={colors[i]}>{ subject }</Badge>
							)) }
						</div>
					</TableCaption>
					<TableHeader>
						<TableRow>
							<TableHead className="border border-t-0 border-l-0">Day\Slot</TableHead>
							{Array.from(
								{ length: maxSlotTime },
								(_, i) => i + 1
							).map((i) => (
								<TableHead key={i} className="border border-t-0 text-center last:border-r-0">{i}</TableHead>
							))}
						</TableRow>
					</TableHeader>
					<TableBody>
						{Array.from({ length: 7 }, (_, i) => i).map((day) => (
							<TableRow key={day}>
								<TableHead className={"border border-l-0"}>
									{capitalizeFirstLetter(keyToDay(day))}
								</TableHead>
								{Array.from(
									{ length: maxSlotTime },
									(_, i) => i + 1
								).map((i) => <Cell key={i} day={day} time={i} />)}
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</>
	);
}

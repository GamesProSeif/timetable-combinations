import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Combiner from "@/lib/Combiner";
import { capitalizeFirstLetter, keyToDay } from "@/lib/utils";
import { Ban } from "lucide-react";

export default function Timetable({
	slots
}: {
	slots: ReturnType<Combiner["generate"]>[number]
}) {
	const maxSlotTime = Math.max(slots.reduce(
		(max, current) => Math.max(max, current.end),
		1
	), 6);

	function Cell({ day, time }: { day: number; time: number; }) {
		const filteredSlots = slots.filter(
			(slot) =>
				slot.day === day && (time >= slot.start && time <= slot.end)
		);
		if (filteredSlots.length === 0)
			return <TableCell className={"border last:border-r-0 " + (day === 6 ? "border-b-0" : "")}></TableCell>
		else
			return <TableCell className={"border last:border-r-0 " + (day === 6 ? "border-b-0" : "")}>
				<div className="flex gap-2 items-center">
					{filteredSlots.length > 1 && <Ban className="text-destructive" />} { filteredSlots.map(slot => `${slot.subjectName} ${capitalizeFirstLetter(slot.type).slice(0, 3)} ${slot.group}`).join("\n") }
				</div>
			</TableCell>
	}

	return (
		<>
			<div className="border rounded-md">
				<Table>
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
								<TableHead className={"border border-l-0 " + (day === 6 ? "border-b-0" : "")}>
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

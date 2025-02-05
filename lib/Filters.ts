import Combiner from "./Combiner";
import { FormSchema } from "./constants";

type Timetable = ReturnType<Combiner["generate"]>[number];

export function applyFilters(timetables: Timetable[], filters: FormSchema["filters"]): Timetable[] {
	let filteredTimetables = [...timetables];

	for (const filter of filters) {
		switch (filter.name) {
			case "no-clash":
				filteredTimetables = filteredTimetables.filter(timetable => noClash(timetable));
				break;
			case "no-gap":
				filteredTimetables = filteredTimetables.filter(timetable => noGap(timetable));
				break;
			case "no-single-day":
				filteredTimetables = filteredTimetables.filter(timetable => noSingleDay(timetable));
				break;
			case "min-days":
				filteredTimetables = filteredTimetables.filter(timetable => minDays(timetable, filter.days));
				break;
			case "max-days":
				filteredTimetables = filteredTimetables.filter(timetable => maxDays(timetable, filter.days));
				break;
			case "empty-day":
				filteredTimetables = filteredTimetables.filter(timetable => emptyDay(timetable, filter.day));
				break;
			case "busy-day":
				filteredTimetables = filteredTimetables.filter(timetable => busyDay(timetable, filter.day));
				break;
			case "empty-slot":
				filteredTimetables = filteredTimetables.filter(timetable => emptySlot(timetable, filter.day, filter.slot));
				break;
			case "busy-slot":
				filteredTimetables = filteredTimetables.filter(timetable => busySlot(timetable, filter.day, filter.slot));
				break;
			default:
				break;
		}
	}

	return filteredTimetables;
}

function noClash(timetable: Timetable): boolean {
	for (let i = 0; i < timetable.length; i++) {
		for (let j = i + 1; j < timetable.length; j++) {
			const slot1 = timetable[i];
			const slot2 = timetable[j];

			if (slot1.day === slot2.day) {
				if (slot1.start <= slot2.end && slot2.start <= slot1.end) {
					return false;
				}
			}
		}
	}

	return true;
}

function noGap(timetable: Timetable): boolean {
	// Group slots by day
	const slotsByDay: Record<number, Timetable> = {};

	for (const slot of timetable) {
		if (!slotsByDay[slot.day]) {
			slotsByDay[slot.day] = [];
		}
		slotsByDay[slot.day].push(slot);
	}

	// Check for gaps in each day's slots
	for (const day in slotsByDay) {
		const slots = slotsByDay[Number(day)];

		// Sort slots by start time
		slots.sort((a, b) => a.start - b.start);

		// Check for gaps between consecutive slots
		for (let i = 0; i < slots.length - 1; i++) {
			if (slots[i].end < slots[i + 1].start - 1) {
				return false; // Found a gap
			}
		}
	}

	return true; // No gaps found
}

function noSingleDay(timetable: Timetable): boolean {
	const dayCount: Record<number, number> = {};

	for (const slot of timetable) {
		dayCount[slot.day] = (dayCount[slot.day] || 0) + 1;
	}

	return !Object.values(dayCount).includes(1);
}

function minDays(timetable: Timetable, days: number): boolean {
	const dayCount: Record<number, number> = {};

	for (const slot of timetable) {
		dayCount[slot.day] = (dayCount[slot.day] || 0) + 1;
	}

	return Object.values(dayCount).filter(d => d > 0).length >= days;
}

function maxDays(timetable: Timetable, days: number): boolean {
	const dayCount: Record<number, number> = {};

	for (const slot of timetable) {
		dayCount[slot.day] = (dayCount[slot.day] || 0) + 1;
	}

	return Object.values(dayCount).filter(d => d > 0).length <= days;
}

function emptyDay(timetable: Timetable, day: number): boolean {
	for (const slot of timetable) {
		if (slot.day === day)
			return false;
	}
	return true;
}

function busyDay(timetable: Timetable, day: number): boolean {
	for (const slot of timetable) {
		if (slot.day === day)
			return true;
	}
	return false;
}

function emptySlot(timetable: Timetable, day: number, slotNum: number): boolean {
	for (const slot of timetable) {
		if (slot.day === day && slot.start <= slotNum && slot.end >= slotNum)
			return false;
	}
	return true;
}

function busySlot(timetable: Timetable, day: number, slotNum: number): boolean {
	for (const slot of timetable) {
		if (slot.day === day && slot.start <= slotNum && slot.end >= slotNum)
			return true;
	}
	return false;
}
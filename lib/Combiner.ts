import { FormSchema } from "./constants";

export default class Combiner {
	private data?: FormSchema;

	public generate(data: FormSchema) {
		this.data = data;
		const subjects = data.subjects.map((s, id) => ({
			id,
			...s,
			slots: s.slots.map((slot, i) => ({
				id: `${id}.${i}` as `${number}.${number}`,
				...slot,
			})),
		}));
		const requiredSubjects = subjects.filter(s => !s.elective).map(s => s.id);
		const electiveSubjects = subjects.filter(s => s.elective).map(s => s.id);

		const subjectSlotCombinations = subjects.map(subject => {
			const groupedSlots = this.groupBy(subject.slots.filter(s => !s.hide), "type", s => s.id);
			const slotsProduct = this.product(...Object.values(groupedSlots));
			return slotsProduct;
		});

		const electiveCombos = this.combinations(electiveSubjects, Math.min(data.electivesCount, electiveSubjects.length));
		const subjectCombos = electiveSubjects.length > 0
			? electiveCombos.map(combo => [...requiredSubjects, ...combo])
			: [requiredSubjects];

		const combinations = subjectCombos
			.map((combo) =>
				this.product(
					...combo.map(
						(subjectId) => subjectSlotCombinations[subjectId]
					)
				)
			)
			.flat()
			.map((combo) => combo.flat().map(slotId => this.getSlot(subjects, slotId)));

		return combinations
	}

	private getSlot(subjects: FormSchema["subjects"], index: string) {
		const [subjectIndex, slotIndex] = index.split(".").map(i => parseInt(i));
		return {
			subjectName: subjects[subjectIndex].name,
			...subjects[subjectIndex].slots[slotIndex]
		};
	}

	private combinations<T>(sample: T[], r: number): T[][] {
		if (r > sample.length || r <= 0) return [];

		function generate(start: number, current: T[]): T[][] {
			if (current.length === r) return [current];

			let result: T[][] = [];
			for (let i = start; i < sample.length; i++) {
			result = result.concat(generate(i + 1, [...current, sample[i]]));
			}
			return result;
		}

		return generate(0, []);
	}

	private product<T>(...arrays: T[][]): T[][] {
		if (arrays.length === 0) return [[]];

		return arrays.reduce<T[][]>(
			(acc, curr) => acc.flatMap(a => curr.map(b => [...a, b])),
			[[]]
		);
	}

	private groupBy<T, K extends keyof T, V>(array: T[], by: K, mapper: ((input: T) => V)) {
		return array.reduce((acc, item) => {
			const key = item[by] as T[K] & string; // Ensure key is treated as a string
			if (!acc[key]) acc[key] = [];
			acc[key].push(mapper(item))
			return acc;
		}, {} as Record<T[K] & string, V[]>);
	}
}
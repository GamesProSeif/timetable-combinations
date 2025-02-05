"use client";

import { useState } from "react";
import SubjectsForm from "./SubjectsForm";
import { FormSchema } from "@/lib/constants";
import Combiner from "@/lib/Combiner";
import { useToast } from "@/hooks/use-toast";
import ResultsSection from "./ResultsSection";
import { applyFilters } from "@/lib/Filters";

export default function Home() {
	const { toast } = useToast();

	const [generatedSlots, setGeneratedSlots] = useState<ReturnType<Combiner["generate"]>>([]);

	const combiner = new Combiner();

	function onSubmit(values: FormSchema) {
		const slots = combiner.generate(values);

		const filteredSlots = applyFilters(slots, values.filters);

		toast({
			title: `Generated ${slots.length} timetable${slots.length !== 1 ? "s" : ""}.`,
			description: `Your filters narrowed down the results to ${filteredSlots.length} timetable${filteredSlots.length !== 1 ? "s" : ""}.`
		});

		setGeneratedSlots(filteredSlots);
	}

	return (
		<>
			<div className="container px-10 py-4 mx-auto max-w-4xl">
				<h2 className="my-4 text-2xl text-center">Subjects Form</h2>
				<SubjectsForm onSubmit={onSubmit} />
			</div>
			<div className="container px-10 py-4 mx-auto max-w-6xl">
				{ generatedSlots.length > 0 && <ResultsSection generatedSlots={generatedSlots} /> }
			</div>
		</>
	);
}

import SeparatorButton from "@/components/SeparatorButton";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FormField, FormItem, FormLabel, FormControl, FormMessage, FormDescription } from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { defaultSlotValues, defaultSubjectValues, FormSchema } from "@/lib/constants";
import { ChevronsUpDown, PlusCircle, Trash } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Control, useFieldArray, UseFieldArrayRemove, UseFormGetValues, UseFormSetFocus } from "react-hook-form";
import SlotField from "./SlotField";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

export default function SubjectField({
	subjectIndex,
	control,
	getValues,
	setFocus,
	removeSubject,
}: {
	subjectIndex: number;
	control: Control<FormSchema>;
	getValues: UseFormGetValues<FormSchema>;
	setFocus: UseFormSetFocus<FormSchema>;
	removeSubject: UseFieldArrayRemove;
}) {
	const {
		fields: slots,
		append: addSlot,
		remove: removeSlot,
	} = useFieldArray({ control, name: `subjects.${subjectIndex}.slots` });

	const [subjectName, setSubjectName] = useState(getValues(`subjects.${subjectIndex}.name`) || "");
	const [elective, setElective] = useState(getValues(`subjects.${subjectIndex}.elective`) || defaultSubjectValues.elective);

	function onAddSlot() {
		const newSlotIndex = slots.length;
		addSlot(defaultSlotValues);
		setTimeout(() => setFocus(`subjects.${subjectIndex}.slots.${newSlotIndex}.type`), 0);
	}

	return (
		<Collapsible
			className="border p-4 rounded-md space-y-4"
			defaultOpen={true}
		>
			<div className="flex items-center gap-2">
				<div className="flex-1 flex gap-2">
					<p>{ subjectName || `Subject ${subjectIndex + 1}` }</p>
					{ elective && <Badge>Elective</Badge> }
				</div>
				<Button
					variant="outline"
					onClick={() => removeSubject(subjectIndex)}
					className="hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10"
				>
					<Trash />
				</Button>
				<CollapsibleTrigger asChild>
					<Button variant="ghost" className="w-10 h-10 hover:text-white">
						<ChevronsUpDown />
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="space-y-4">
			<hr />
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.name`}
					render={({ field }) => (
						<FormItem>
							<FormLabel>Subject Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Enter subject name"
									{...field}
									onBlur={e => {setSubjectName(e.target.value); field.onBlur()}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.elective`}
					render={({ field }) => (
						<FormItem className="col-span-6 flex items-center gap-2 space-y-0 justify-start">
							<FormControl>
								<Switch
									name={`subjects.${subjectIndex}.elective`}
									checked={field.value}
									onCheckedChange={(newValue) => {
										field.onChange(newValue);
										setElective(newValue)
									}}
								/>
							</FormControl>
							<FormLabel>Elective</FormLabel>
						</FormItem>
					)}
				/>
				<div>
					<p className="text-sm font-medium leading-none">Slots</p>
					<FormDescription className="mb-2">
						Add the subject slots below.
					</FormDescription>
					<div className="space-y-4">
						{slots.map((slot, slotIndex) => (
							<SlotField
								key={slot.id}
								control={control}
								getValues={getValues}
								subjectIndex={subjectIndex}
								slotIndex={slotIndex}
								removeSlot={removeSlot}
							/>
						))}
					</div>
					<SeparatorButton
						onClick={onAddSlot}
						tooltipText="Add slot"
						icon={PlusCircle}
						className="mt-4"
					/>
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}


import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { FormSchema } from "@/lib/constants";
import { Switch } from "@/components/ui/switch";
import { capitalizeFirstLetter } from "@/lib/utils";
import { Trash, ChevronsUpDown, CircleHelp } from "lucide-react";
import { Control, UseFieldArrayRemove, UseFormGetValues } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";

export default function SlotField({
	subjectIndex,
	control,
	getValues,
	slotIndex,
	removeSlot,
}: {
	subjectIndex: number;
	control: Control<FormSchema>;
	getValues: UseFormGetValues<FormSchema>;
	slotIndex: number;
	removeSlot: UseFieldArrayRemove;
}) {
	const [type, setType] = useState<FormSchema["subjects"][number]["slots"][number]["type"]>(getValues(`subjects.${subjectIndex}.slots.${slotIndex}.type`) || "lecture")
	const [group, setGroup] = useState<FormSchema["subjects"][number]["slots"][number]["group"]>(getValues(`subjects.${subjectIndex}.slots.${slotIndex}.group`) || "");
	return (
		<Collapsible
			className="border p-4 rounded-md space-y-4"
			defaultOpen={true}
		>
			<div className="flex items-center gap-2">
				<p className="flex-1">
					{group
						? `${capitalizeFirstLetter(
								type
						  )} ${group.toUpperCase()}`
						: `Slot ${slotIndex + 1}`}
				</p>
				<Button
					variant="outline"
					onClick={() => removeSlot(slotIndex)}
					className="hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10"
				>
					<Trash />
				</Button>
				<CollapsibleTrigger asChild>
					<Button
						variant="ghost"
						className="w-10 h-10 hover:text-white"
					>
						<ChevronsUpDown />
					</Button>
				</CollapsibleTrigger>
			</div>
			<CollapsibleContent className="grid grid-cols-6 gap-4">
				<hr className="col-span-6" />
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.type`}
					render={({ field }) => (
						<FormItem className="col-span-6 sm:col-span-3">
							<FormLabel>Type</FormLabel>
							<Select
								name={`subjects.${subjectIndex}.slots.${slotIndex}.type`}
								onValueChange={(newValue) => {
									field.onChange(newValue);
									setType(
										newValue as FormSchema["subjects"][number]["slots"][number]["type"]
									);
								}}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a type" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value="lecture">
										Lecture
									</SelectItem>
									<SelectItem value="section">
										Section
									</SelectItem>
									<SelectItem value="lab">Lab</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.group`}
					render={({ field }) => (
						<FormItem className="col-span-6 sm:col-span-3">
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger
										style={{ cursor: "default" }}
										type="button"
									>
										<div className="flex gap-2 items-center">
											<FormLabel>Group</FormLabel>
											<CircleHelp className="w-4 h-4 text-gray-400" />
										</div>
									</TooltipTrigger>
									<TooltipContent className="max-w-sm md:max-w-full">
										The group or class of the slot (eg.
										&quot;A&quot;). If a slot is for
										multiple classes, type &quot;AB&quot;
										for example.
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
							<FormControl>
								<Input
									placeholder="AB"
									{...field}
									onBlur={e => {setGroup(e.target.value); field.onBlur()}}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.day`}
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Day</FormLabel>
							<Select
								name={`subjects.${subjectIndex}.slots.${slotIndex}.day`}
								onValueChange={field.onChange}
								defaultValue={field.value.toString()}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a day" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									<SelectItem value={"0"}>Sat</SelectItem>
									<SelectItem value={"1"}>Sun</SelectItem>
									<SelectItem value={"2"}>Mon</SelectItem>
									<SelectItem value={"3"}>Tue</SelectItem>
									<SelectItem value={"4"}>Wed</SelectItem>
									<SelectItem value={"5"}>Thu</SelectItem>
									<SelectItem value={"6"}>Fri</SelectItem>
								</SelectContent>
							</Select>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.start`}
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Start</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter slot start time"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.end`}
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>End</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter slot end time"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={control}
					name={`subjects.${subjectIndex}.slots.${slotIndex}.hide`}
					render={({ field }) => (
						<FormItem className="col-span-6 flex gap-2 space-y-0">
							<FormControl>
								<Switch
									name={`subjects.${subjectIndex}.slots.${slotIndex}.hide`}
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<TooltipProvider>
								<Tooltip>
									<TooltipTrigger
										style={{ cursor: "default" }}
										type="button"
									>
										<div className="flex gap-2 items-center">
											<FormLabel>Hide</FormLabel>
											<CircleHelp className="w-4 h-4 text-gray-400" />
										</div>
									</TooltipTrigger>
									<TooltipContent className="max-w-sm md:max-w-full">
										Hiding a slot will not include it in timetable generation.
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						</FormItem>
					)}
				/>
			</CollapsibleContent>
		</Collapsible>
	);
}

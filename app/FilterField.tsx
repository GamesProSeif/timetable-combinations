"use client";

import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormSchema } from "@/lib/constants";
import { Trash } from "lucide-react";
import { useState } from "react";
import { Control, UseFieldArrayRemove, UseFormGetValues, UseFormSetValue } from "react-hook-form";

const filters = [
	{
		value: "no-clash",
		name: "No Clash",
		description: "No clashing slots.",
		hasParameters: false
	},
	{
		value: "no-gap",
		name: "No Gap",
		description: "No gaps between slots.",
		hasParameters: false
	},
	{
		value: "no-single-day",
		name: "No Single Day",
		description: "No day with single slots.",
		hasParameters: false
	},
	{
		value: "min-days",
		name: "Min Days",
		description: "Ensure schedule has minimum occupied days.",
		hasParameters: true,
		parameters: [{ display: "Days", name: "days", type: "number", default: 1 }]
	},
	{
		value: "max-days",
		name: "Max Days",
		description: "Ensure schedule has maximum occupied days.",
		hasParameters: true,
		parameters: [{ display: "Days", name: "days", type: "number", default: 1 }]
	},
	{
		value: "empty-day",
		name: "Empty Day",
		description: "Ensure this day is empty.",
		hasParameters: true,
		parameters: [{ display: "Day", name: "day", type: "day", default: 0 }]
	},
	{
		value: "busy-day",
		name: "Busy Day",
		description: "Ensure this day is busy.",
		hasParameters: true,
		parameters: [{ display: "Day", name: "day", type: "day", default: 0 }]
	},
	{
		value: "empty-slot",
		name: "Empty Slot",
		description: "Ensure this slot is empty.",
		hasParameters: true,
		parameters: [{ display: "Day", name: "day", type: "day", default: 0 }, { display: "Slot", name: "slot", type: "number", default: 1 }]
	},
	{
		value: "busy-slot",
		name: "Busy Slot",
		description: "Ensure this slot is busy.",
		hasParameters: true,
		parameters: [{ display: "Day", name: "day", type: "day", default: 0 }, { display: "Slot", name: "slot", type: "number", default: 1 }]
	},
] as const;

export default function FilterField({
	filterIndex,
	control,
	removeFilter,
	getValues,
	setValue
}: {
	filterIndex: number;
	control: Control<FormSchema>;
	removeFilter: UseFieldArrayRemove;
	getValues: UseFormGetValues<FormSchema>;
	setValue: UseFormSetValue<FormSchema>;
}) {
	const [selectedFilter, setSelectedFilter] = useState<typeof filters[number]>(() => filters.find(f =>
		f.value === (getValues(`filters.${filterIndex}.name`) || "no-clash")
	)!);

	function onSelect(newValue: string) {
		const oldFilter = selectedFilter;
		const filter = filters.find(f => f.value === newValue)!;
		if (filter.hasParameters) {
			for (const parameter of filter.parameters) {
				let defaultValue: number = parameter.default;
				if (oldFilter.hasParameters) {
					const foundParameter = oldFilter.parameters.find(p => p.name === parameter.name);
					if (foundParameter)
						defaultValue = getValues(`filters.${filterIndex}.${parameter.name}`);
				}
				setValue(`filters.${filterIndex}.${parameter.name}`, defaultValue);
			}
		}
		setSelectedFilter(filter);
	}

	return (
		<div className="border p-4 rounded-md space-y-4">
			<div className="flex gap-2">
				<FormField
					control={control}
					name={`filters.${filterIndex}.name`}
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormLabel>Filter {filterIndex + 1}</FormLabel>
							<Select
								name={`filters.${filterIndex}.name`}
								onValueChange={(newValue) => {
									field.onChange(newValue);
									onSelect(newValue);
								}}
								defaultValue={field.value}
							>
								<FormControl>
									<SelectTrigger>
										<SelectValue placeholder="Select a filter" />
									</SelectTrigger>
								</FormControl>
								<SelectContent>
									{ filters.map((filter, i) => (
										<SelectItem key={i} value={filter.value}>{ filter.name }</SelectItem>
									))}
								</SelectContent>
							</Select>
							<FormDescription>{ selectedFilter.description }</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button
					variant="outline"
					onClick={() => removeFilter(filterIndex)}
					className="hover:bg-destructive hover:text-white text-destructive border-none w-10 h-10 mt-8"
				>
					<Trash />
				</Button>
			</div>
			{ selectedFilter.hasParameters &&
				<div className="flex gap-2">
					{ selectedFilter.parameters.map((parameter, i) => (
						parameter.type === "number"
						? <NormalField
							key={i}
							control={control}
							filterIndex={filterIndex}
							name={parameter.name}
							display={parameter.display}
							number={parameter.type === "number"}
							className="flex-1"
						/>
						: <DaysField
							key={i}
							control={control}
							filterIndex={filterIndex}
							name={parameter.name}
							display={parameter.display}
							className="flex-1"
						/>
					))}
				</div>
			}
		</div>
	);
}

function NormalField({
	control,
	filterIndex,
	name,
	display,
	number = false,
	className
}: {
	control: Control<FormSchema>,
	filterIndex: number,
	name: string,
	display: string;
	number: boolean;
	className?: string;
}) {
	return <FormField
		control={control}
		//@ts-expect-error name will always be correct.
		name={`filters.${filterIndex}.${name}`}
		render={({ field }) => (
			<FormItem className={className}>
				<FormLabel>{ display }</FormLabel>
				<FormControl>
					{/* @ts-expect-error name will always be correct. */}
					<Input
						type={number ? "number" : "text"}
						placeholder="Enter slot start time"
						{...field}
					/>
				</FormControl>
				<FormMessage />
			</FormItem>
		)}
	/>
}

function DaysField({
	control,
	filterIndex,
	name,
	display,
	className
}: {
	control: Control<FormSchema>,
	filterIndex: number,
	name: string,
	display: string;
	className?: string;
}) {
	return <FormField
		control={control}
		//@ts-expect-error name will always be correct.
		name={`filters.${filterIndex}.${name}`}
		render={({ field }) => (
			<FormItem className={className}>
				<FormLabel>{ display }</FormLabel>
				<Select
					name={`filters.${filterIndex}.${name}`}
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
}
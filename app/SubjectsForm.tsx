"use client";

import {
	useForm,
	useFieldArray,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { ArrowBigDownDash, ArrowBigUpDash, CircleAlert, Clipboard, Copy, Merge, PlusCircle } from "lucide-react";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import SeparatorButton from "@/components/SeparatorButton";
import { defaultFilterValues, defaultSubjectValues, FormSchema, formSchema } from "@/lib/constants";
import SubjectField from "./SubjectField";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { ZodError } from "zod";
import { Input } from "@/components/ui/input";
import FilterField from "./FilterField";

export default function SubjectsForm({ onSubmit }: { onSubmit: (values: FormSchema) => void }) {
	const { toast } = useToast();
	const [formData, setFormData] = useState("");
	const [formDataError, setFormDataError] = useState(false);
	const [importedSetup, setImportedSetup] = useState("");
	const [importedSetupError, setImportedSetupError] = useState(false);

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
		defaultValues: { subjects: [defaultSubjectValues], electivesCount: 2, filters: [defaultFilterValues] },
	});

	function copySetup() {
		try {
			navigator.clipboard.writeText(formData);
			toast({
				title: "Copied to clipboard!"
			});
		} catch {
			toast({
				title: "Could not copy to clipboard."
			});
		}
	}

	async function pasteSetup() {
		try {
			const text = await navigator.clipboard.readText();
			onImportedSetupUpdate(text);
			toast({
				title: "Pasted clipboard!"
			});
		} catch {
			toast({
				title: "Could not paste clipboard."
			});
		}
	}

	function updateFormData() {
		const newFormData = form.getValues();
		setFormData(JSON.stringify(newFormData));
		try {
			formSchema.parse(newFormData);
			setFormDataError(false);
		} catch {
			setFormDataError(true);
		}
	}

	function onImportedSetupUpdate(text: string, action = false) {
		setImportedSetup(text);
		try {
			const parsedSetup = JSON.parse(text) as unknown;
			const validatedSetup = formSchema.parse(parsedSetup);
			setImportedSetupError(false);

			if (action) {
				form.setValue("subjects", validatedSetup.subjects);
				form.setValue("electivesCount", validatedSetup.electivesCount);
				form.setValue("filters", validatedSetup.filters);
				toast({
					title: "Successfully imported setup."
				});
			}
		} catch (error: unknown) {
			if (error instanceof SyntaxError)
				setImportedSetupError(true);
			else if (error instanceof ZodError)
				setImportedSetupError(true);
			else
				setImportedSetupError(true);
		}
	}

	const {
		fields: subjects,
		append: addSubject,
		remove: removeSubject,
	} = useFieldArray({ control: form.control, name: "subjects" });

	const {
		fields: filters,
		append: addFilter,
		remove: removeFilter,
	} = useFieldArray({ control: form.control, name: "filters" });

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 p-4 border rounded-md">
				<FormField
					control={form.control}
					name="electivesCount"
					render={({ field }) => (
						<FormItem className="col-span-2">
							<FormLabel>Electives Count</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Enter electives count"
									required
									{...field}
								/>
							</FormControl>
							<FormDescription>Number of elective subjects required this semester.</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div>
					<p className="text-sm font-medium leading-none">Subjects</p>
					<FormDescription className="mb-2">
						Add your desired subjects below.
					</FormDescription>
				</div>

				{subjects.map((subject, subjectIndex) => (
					<SubjectField
						key={subject.id}
						subjectIndex={subjectIndex}
						control={form.control}
						getValues={form.getValues}
						setFocus={form.setFocus}
						removeSubject={removeSubject}
					/>
				))}

				<SeparatorButton
					onClick={() => addSubject(defaultSubjectValues)}
					icon={PlusCircle}
					tooltipText="Add subject"
				/>

				<div>
					<p className="text-sm font-medium leading-none">Filters</p>
					<FormDescription className="mb-2">
						Add filters to narrow down generated timetables.
					</FormDescription>
				</div>

				{filters.map((filter, filterIndex) => (
					<FilterField
						key={filter.id}
						filterIndex={filterIndex}
						control={form.control}
						removeFilter={removeFilter}
						getValues={form.getValues}
						setValue={form.setValue}
					/>
				))}

				<SeparatorButton
					onClick={() => addFilter(defaultFilterValues)}
					icon={PlusCircle}
					tooltipText="Add filter"
				/>

				<div className="grid grid-cols-2 md:grid-cols-3 gap-2">
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="outline"
								onClick={() => updateFormData()}
							>
								<ArrowBigDownDash />
								Import Setup
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Import Setup</DialogTitle>
								<DialogDescription>Import settings from an existing setup.</DialogDescription>
							</DialogHeader>
							<Textarea
								id="importSetup"
								name="importSetup"
								placeholder="Paste setup here"
								value={importedSetup}
								onChange={(e) => onImportedSetupUpdate(e.target.value)}
								rows={7}
							/>
							{ importedSetupError &&
								<div className="text-destructive flex items-center rounded-md gap-2 text-sm">
									<CircleAlert />
									<p>Invalid setup input</p>
								</div>
							}
							<div className="flex gap-2">
								<Button variant="outline" className="w-full" onClick={pasteSetup}><Clipboard />Paste</Button>
								<Button className="w-full" onClick={() => onImportedSetupUpdate(importedSetup, true)} disabled={importedSetupError}><ArrowBigDownDash />Import</Button>
							</div>
						</DialogContent>
					</Dialog>
					<Dialog>
						<DialogTrigger asChild>
							<Button
								variant="outline"
								onClick={() => updateFormData()}
							>
								<ArrowBigUpDash />
								Export Setup
							</Button>
						</DialogTrigger>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Export Setup</DialogTitle>
								<DialogDescription>Export current setup settings. Useful for sharing setup with others.</DialogDescription>
							</DialogHeader>
							<div className="border rounded-md p-4 overflow-scroll max-h-[200px]">
								<code className="text-sm">{ formData }</code>
							</div>
							{ formDataError &&
								<div className="text-destructive flex items-center rounded-md gap-2 text-sm">
									<CircleAlert />
									<p>This setup has errors and will not be loaded correctly if imported.</p>
								</div>
							}
							<Button onClick={copySetup}><Copy />Copy</Button>
						</DialogContent>
					</Dialog>
					<Button type="submit" className="col-span-2 md:col-span-1">
						<Merge />
						Generate
					</Button>
				</div>
			</form>
		</Form>
	);
}

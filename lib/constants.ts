import { z } from "zod";

export const slotSchema = z.object({
	type: z.enum(["lecture", "section", "lab"], {
		message: "Type is required",
	}),
	group: z.string().min(1).max(4),
	day: z.coerce.number().min(0).max(6),
	start: z.coerce.number().min(1),
	end: z.coerce.number().min(1),
	hide: z.boolean(),
}).refine((data) => data.start <= data.end, {
	message: "Start time must not exceed end time",
	path: ["end"],
});

export const subjectSchema = z.object({
	name: z.string().min(2).max(20),
	elective: z.boolean(),
	slots: z.array(slotSchema),
});

export const filterSchema = z.discriminatedUnion("name", [
	z.object({ name: z.literal("no-clash") }),
	z.object({ name: z.literal("no-gap") }),
	z.object({ name: z.literal("no-single-day") }),
	z.object({ name: z.literal("min-days"), days: z.coerce.number().min(1).max(7) }),
	z.object({ name: z.literal("max-days"), days: z.coerce.number().min(1).max(7) }),
	z.object({ name: z.literal("empty-day"), day: z.coerce.number().min(0).max(6) }),
	z.object({ name: z.literal("busy-day"), day: z.coerce.number().min(0).max(6) }),
	z.object({ name: z.literal("empty-slot"), day: z.coerce.number().min(0).max(6), slot: z.coerce.number().min(1) }),
	z.object({ name: z.literal("busy-slot"), day: z.coerce.number().min(0).max(6), slot: z.coerce.number().min(1) }),
])

export const formSchema = z.object({
	subjects: z.array(subjectSchema),
	electivesCount: z.coerce.number().min(0),
	filters: z.array(filterSchema)
});

export type FormSchema = z.infer<typeof formSchema>;

export const defaultSlotValues: FormSchema["subjects"][number]["slots"][number] = {
	type: "lecture",
	group: "A",
	day: 0,
	start: 1,
	end: 2,
	hide: false,
};

export const defaultSubjectValues: FormSchema["subjects"][number] = {
	name: "",
	elective: false,
	slots: [defaultSlotValues],
};

export const defaultFilterValues: FormSchema["filters"][number] = {
	name: "no-clash"
}


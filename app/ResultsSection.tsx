import { Fragment, useState } from "react";
import Timetable from "./Timetable";
import Combiner from "@/lib/Combiner";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

export default function ResultsSection({ generatedSlots }: { generatedSlots: ReturnType<Combiner["generate"]> }) {
	const tablesPerPage = 5;
	const maxPage = Math.ceil(generatedSlots.length / tablesPerPage);

	const [currentPage, setCurrentPage] = useState(1);

	const minDisplayedPage = Math.max(currentPage - 2, 1);
	const maxDisplayedPage = Math.min(currentPage + 2, maxPage);

	function previousPage() {
		if (currentPage === 1)
			return;
		setCurrentPage(c => c - 1);
	}

	function nextPage() {
		if (currentPage === maxPage)
			return;
		setCurrentPage(c => c + 1);
	}

	return (
		<>
			{/* <div className="my-16" /> */}
			<h2 className="my-16 text-2xl text-center">Generated Timetables</h2>
			<div className="space-y-4 mt-4">
				{generatedSlots.filter((_, i) => i < currentPage * tablesPerPage && i >= currentPage * tablesPerPage - tablesPerPage).map((slots, i) => (
					<Fragment key={i}>
						<h3 className="text-lg">Option { (currentPage - 1) * tablesPerPage + i + 1 }</h3>
						<Timetable slots={slots} />
						<hr />
					</Fragment>
				))}
			</div>

			<Pagination className="mt-4">
				<PaginationContent>
					{ currentPage !== 1 &&
						<PaginationItem className="hidden md:list-item">
							<PaginationPrevious
								className="cursor-pointer"
								onClick={previousPage}
							/>
						</PaginationItem>
					}
					{ minDisplayedPage !== 1 && <>
						<PaginationItem className="hidden md:list-item">
							<PaginationLink
								className="cursor-pointer"
								onClick={() => setCurrentPage(1)}
							>1</PaginationLink>
						</PaginationItem>
						<PaginationItem className="hidden md:list-item">
							<PaginationEllipsis />
						</PaginationItem>
					</>}
					{ Array.from({ length: maxDisplayedPage - minDisplayedPage + 1 }, (_, i) => minDisplayedPage + i).map(i => (
						<PaginationItem key={i}>
							<PaginationLink
								className="cursor-pointer"
								onClick={() => setCurrentPage(i)}
								isActive={currentPage === i}
							>
								{ i }
							</PaginationLink>
						</PaginationItem>
					))}
					{ maxDisplayedPage !== maxPage && <>
						<PaginationItem className="hidden md:list-item">
							<PaginationEllipsis />
						</PaginationItem>
						<PaginationItem className="hidden md:list-item">
							<PaginationLink
								className="cursor-pointer"
								onClick={() => setCurrentPage(maxPage)}
							>{ maxPage }</PaginationLink>
						</PaginationItem>
					</>}
					{ currentPage !== maxPage &&
						<PaginationItem className="hidden md:list-item">
							<PaginationNext
								className="cursor-pointer"
								onClick={nextPage}
							/>
						</PaginationItem>
					}
				</PaginationContent>
			</Pagination>
			<div className="flex md:hidden justify-center mt-1">
				{ currentPage !== 1 &&
					<div>
						<PaginationPrevious
							className="cursor-pointer w-full"
							onClick={previousPage}
						/>
					</div>
				}
				{ currentPage !== maxPage &&
					<div>
						<PaginationNext
							className="cursor-pointer w-full"
							onClick={nextPage}
						/>
					</div>
				}
			</div>
		</>
	)
}
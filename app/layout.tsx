import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Timetable Combinations",
	description: "A tool created to generate all timetable combinations from given multiple subjects options.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.className} antialiased`}>
				<ThemeProvider defaultTheme="dark" storageKey="next-ui-theme">
					<Header />
					<main>{children}</main>
					<Toaster />
				</ThemeProvider>
			</body>
		</html>
	);
}

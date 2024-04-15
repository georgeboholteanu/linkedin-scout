import type { Metadata } from "next";
import { Inter, Alata } from "next/font/google";

import "../styles/globals.css";
import { ToastContainer } from "react-toastify";

// components
import Header from "@/components/_global/Header";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "LinkedIn Scout",
	description: "Find jobs on LinkedIn",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
		
			<body className="alata-regular">
				<AuthProvider>
					<Header />
					<ToastContainer
						autoClose={2000}
						draggable={false}
						closeButton={false}
						position="bottom-right"
						style={{ bottom: "20px" }}
					/>
					{children}
				</AuthProvider>
			</body>
		</html>
	);
}

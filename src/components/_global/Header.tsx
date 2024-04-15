"use client";
import { useState } from "react";
import Link from "next/link";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
// components
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
import { SecondaryNav } from "@/utils/Constants";
import NavbarAuth from "./NavbarAuth";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	

	return (
		<div className="bg-gray-800 text-white">
			<div className="max-w-6xl mx-auto px-4">
				{/* Desktop menu */}
				<div className="flex items-center justify-between">
					{/* Logo or brand */}
					<div>
						<Link
							href="#"
							className="flex items-center py-5 px-2 text-gray-300 hover:text-gray-400"
						>
							<span className="font-bold text-2xl">
								LinkedIn Scout
							</span>
						</Link>
					</div>

					{/* Primary nav */}
					<div className="flex items-center">
						<Navbar
							containerStyles="hidden md:flex items-center space-x-2"
							linkStyles="py-2 px-4 hover:underline transition-all"
						/>					
					</div>

					{/* Secondary nav */}
					<div>
						<NavbarAuth/>					
					</div>

			
					{/* Mobile button */}
					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-2xl"
						>
							{isOpen ? <MdClose /> : <RxHamburgerMenu />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				<div className="flex px-4 pb-6">
					<NavbarMobile
						containerStyles={`md:hidden ${
							isOpen ? "flex flex-col" : "hidden"
						}`}
						linkStyles="py-2 px-4 hover:bg-gray-700"
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;

"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { data: session } = useSession();

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
							<span className="font-bold text-2xl">LinkedIn Scout</span>
						</Link>
					</div>

					{/* Primary nav */}
					<Navbar
						containerStyles="hidden md:flex items-center space-x-2"
						linkStyles="py-2 px-4 hover:underline transition-all"
					/>

					{/* Login */}
					<div className="hidden md:flex items-center">
						{session ? (
							<button
								onClick={() => signOut()}
								className="py-2 px-4 hover:bg-gray-700"
							>
								Logout
							</button>
						) : (
							<div className="flex items-center space-x-2">
								<button
									onClick={() => signIn()}
									className="py-2 px-4 hover:bg-gray-700"
								>
									Login
								</button>
								<Link
									href="/signup"
									className="py-2 px-4 hover:bg-gray-700"
								>
									Sign In
								</Link>
							</div>
						)}
					</div>

					{/* Mobile button */}
					<div className="md:hidden flex items-center">
						<button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
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

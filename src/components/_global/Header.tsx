"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { PrimaryNav } from "../../utils/Constants";
// icons
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

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
							<span className="font-bold">LinkedIn Scout</span>
						</Link>
					</div>

					{/* Primary nav */}
					<div className="hidden md:flex items-center space-x-2">
					
					</div>

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
						<button onClick={() => setIsOpen(!isOpen)}>
							{/* <span className="material-symbols-outlined">menu</span> */}
						
							{isOpen ? (
								<MdClose />
							) : (
								<GiHamburgerMenu />
							)}
							
						</button>
					</div>
			
					{/* Mobile Menu */}
					<div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
					
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;

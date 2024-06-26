import React from "react";
import { PrimaryNav } from "@/utils/Constants";
import Link from "next/link";

interface NavbarProps {
	containerStyles?: string;
    linkStyles?: string;
}
const Navbar: React.FC<NavbarProps> = ({containerStyles, linkStyles}) => {
	return (
		<nav className={`${containerStyles}`}>
			{PrimaryNav.map((item) => (
				<Link
					href={item.path}
					key={item.name}
					className={`${linkStyles}`}
				>
					{item.name}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;

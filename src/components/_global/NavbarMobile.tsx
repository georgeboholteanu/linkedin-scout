import React from "react";
import { PrimaryNav } from "@/utils/Constants";
import Link from "next/link";

interface NavbarMobileProps {
	containerStyles?: string;
    linkStyles?: string;
}
const NavbarMobile: React.FC<NavbarMobileProps> = ({containerStyles, linkStyles}) => {
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

export default NavbarMobile;

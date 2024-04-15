import React from "react";
import { PrimaryNav, SecondaryNav } from "@/utils/Constants";
import Link from "next/link";

interface NavbarMobileProps {
	containerStyles?: string;
	linkStyles?: string;
}
const NavbarMobile: React.FC<NavbarMobileProps> = ({
	containerStyles,
	linkStyles,
}) => {
	
	return (
		<div className={`${containerStyles}`}>
			{[...PrimaryNav, ...SecondaryNav].map((item) => (
				<Link
					href={item.path}
					key={item.name}
					className={`${linkStyles}`}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default NavbarMobile;

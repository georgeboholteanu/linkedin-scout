import React from "react";
import { PrimaryNav } from "@/utils/Constants";

interface NavbarProps {
	containerStyles?: string;
}
const Navbar: React.FC<NavbarProps> = () => {
	return (
		<div className={`${containerStyles}`}>
			{PrimaryNav.map((item) => (
				<Link
					href={item.path}
					key={item.name}
					className="py-5 px-3 hover:text-gray-300"
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};

export default Navbar;

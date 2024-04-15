import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

interface NavbarAuthProps {
    containerStyles?: string;
    linkStyles?: string;
}
const NavbarAuth: React.FC<NavbarAuthProps> = ({containerStyles, linkStyles}) => {
    const { data: session } = useSession();

	return (
		
        <div className="hidden md:flex items-center">
        {session ? (
            <Link
                href={"/"}
                className="py-2 px-4 rounded-xl bg-yellow-300 text-black hover:bg-gray-300 transition-all"
            >
                Logout
            </Link>
        ) : (
            <div className="flex items-center space-x-2">
                <Link
                    href={"/login"}
                    className="py-2 px-4 rounded-xl bg-yellow-300 text-black hover:bg-gray-300 transition-all"
                >
                    Login
                </Link>
                <Link
                    href="/signup"
                    className="py-2 px-4 rounded-xl bg-yellow-300 text-black hover:bg-gray-300 transition-all"
                >
                    Sign In
                </Link>
            </div>
        )}
    </div>
	);
};

export default NavbarAuth;

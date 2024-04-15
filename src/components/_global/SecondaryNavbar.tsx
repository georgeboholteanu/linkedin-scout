import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

interface SecondaryNavbarProps {
    containerStyles?: string;
    linkStyles?: string;
}
const SecondaryNavbar: React.FC<SecondaryNavbarProps> = ({containerStyles, linkStyles}) => {
    const { data: session } = useSession();

	return (
		
        <div className="hidden md:flex items-center">
        {session ? (
            <button
                onClick={() => signOut()}
                className="py-2 px-4 rounded-xl bg-yellow-300 text-black hover:bg-gray-300 transition-all"
            >
                Logout
            </button>
        ) : (
            <div className="flex items-center space-x-2">
                <button
                    onClick={() => signIn()}
                    className="py-2 px-4 rounded-xl bg-yellow-300 text-black hover:bg-gray-300 transition-all"
                >
                    Login
                </button>
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

export default SecondaryNavbar;

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NavBar = () => {
    const userLoggedIn = false;
    return (
        <nav className="bg-gray-50 flex flex-row justify-between items-center gap-4 w-full p-3 px-4 mb-10">
            <Link href="/" className="flex justify-center align-middle gap-2">
                <Image 
                src="/assests/logo.svg"
                alt="logo"
                width={60}
                height={60}
                />
                <div className="... flex items-center justify-center">
                    <p className="text-3xl text-green-800 font-bold">BUDGET APP</p>
                </div>
            </Link>
            <div className="flex justify-center items-center gap-2 p-2">
                { userLoggedIn ? (
                    <div>logged in</div>
                ):(
                    <div className="flex justify-center items-center gap-10 p-1">
                        <Link href="/sign-in" className="black_btn w-40"> Sign In</Link>
                        <Link href="/sign-up" className="signup_btn w-40"> Sign Up</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default NavBar;
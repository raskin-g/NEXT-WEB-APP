'use client';

import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <>
        <header className="w-full flex justify-between px-10 py-3 shadow items-center">
            <Link href="/">
                <Image src={"/logo-1.jpeg"} className="size-15" height={80} width={80} alt="Logo"/>
            </Link>
            <form className="flex w-xl items-center justify-end">
                <input type="search" className="w-full p-3 rounded-full border border-gray-200 shadow-lg bg-blue-50"
                placeholder="Enter your seach product name..." />
            </form>
            <div className="flex items-center justiy-end">
                <nav>
                    <ul className="flex gap-10">
                        <li className="text-lg font-semibold text-teal-800 hover:underline tracking-tight leading-1">
                            <Link href="/cart">View Cart</Link>
                        </li>
                        <li className="text-lg font-semibold text-teal-800 hover:underline tracking-tight leading-1">
                            <Link href="/register">Register</Link>
                        </li>
                        <li className="text-lg font-semibold text-teal-800 hover:underline tracking-tight leading-1">
                            <Link href="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}
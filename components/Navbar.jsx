"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image";

export default function Navbar() {

    const [state, setState] = useState(false);

    const menus = [
        { title: "Home", path: "/" },
        { title: "PriceWise", path: "/pricewise" },
    ]

    return (
        <nav className="w-full border-b-1 md:border-0 sticky top-0 z-50 backdrop-filter backdrop-blur-lg shadow-md">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={100} height={30} className="w-35 h-8" />
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-white outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>
                <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? "block" : "hidden"}`}>
                    <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        {menus.map((item, idx) => (
                            <li key={idx} className="text-white hover:text-pink-600">
                                <Link href={item.path}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
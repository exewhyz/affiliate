"use client"

import { Menu } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
]
const menus = [
    { title: "Home", path: "/pricewise" },
    { title: "OffShop", path: "/" },
]

const Navbar = () => {

    const [state, setState] = useState(false);

    return (
        <header className="w-full border-b-1 md:border-0 sticky top-0 z-50 backdrop-filter backdrop-blur-lg shadow-sm">
            <nav className="nav">
                <div className="md:flex justify-between">
                    <div className='flex justify-between items-center'>
                        <Link href="/pricewise" className="flex items-center gap-1">
                            <Image
                                src="/assets/icons/logo.svg"
                                width={27}
                                height={27}
                                alt="logo"
                            />

                            <p className="nav-logo">
                                Price<span className='text-primary-red'>Wise</span>
                            </p>
                        </Link>
                        <div className="md:hidden">
                            <button
                                className="outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                <Menu />
                            </button>
                        </div>
                    </div>
                    <div className={`mx-auto 
                    w-fit pb-3 gap-x-40 mt-8 md:flex md:flex-row flex-col md:pb-0 md:mt-0 ${state ? "flex" : "hidden"}`}>
                        <ul className="items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {menus.map((item, idx) => (
                                <li key={idx} className="hover:text-primary-red">
                                    <Link href={item.path}>{item.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* <div className="flex items-center justify-center gap-5">
                        {navIcons.map((icon) => (
                            <Image
                                key={icon.alt}
                                src={icon.src}
                                alt={icon.alt}
                                width={28}
                                height={28}
                                className="object-contain"
                            />
                        ))}
                    </div> */}
                </div>

            </nav>
        </header>
    )
}

export default Navbar
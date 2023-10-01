"use client"

import Link from "next/link";
import { useState } from "react";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

export default function Footer() {
    const [mail, setMail] = useState("");
    return (
        <footer className="bg-gray-900">
            <div
                className="container flex flex-col flex-wrap px-4 py-16 mx-auto md:items-center lg:items-start md:flex-row md:flex-nowrap"
            >
                <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
                    <Link href={"/"} className="text-3xl bg-clip-text text-transparent font-bold bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">
                        OffShop
                    </Link>
                    <p className="mt-2 text-xs text-justify text-gray-400">
                        OffShop where users can get information about sales, offers, discounts, etc. in different categories.
                    </p>
                    <form className="flex mt-4 text-white" onSubmit={(e) => {
                        e.preventDefault();
                        toast({
                            title: `Subscribed from ${mail}`,
                            description: "Thank you for Subscription",
                        })
                    }}>
                        <Input className="text-gray-600" type="email" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} />
                        {!mail ? <Button disabled variant="destructive">Subscribe</Button> : <Button type="submit" variant="destructive">Subscribe</Button>}
                    </form>
                    <div className="flex justify-center mt-4 space-x-4 lg:mt-2">
                        <Link href={"https://www.facebook.com/ExeWhyZ"} target="_blank">
                            <Facebook className="text-blue-500" />
                        </Link>
                        <Link href={"https://twitter.com/ExWhyZed_OP"} target="_blank">
                            <Twitter className="text-sky-300" />
                        </Link>
                        <Link href={"https://www.instagram.com/adi.__._"} target="_blank">
                            <Instagram className="text-pink-500" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/aniket-raj-1549881a3/"} target="_blank">
                            <Linkedin className="text-blue-400" />
                        </Link>
                    </div>
                </div>
                <div className="justify-between w-full mt-4 text-center lg:flex">
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-100">
                            Quick Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 3
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-100">
                            Quick Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 3
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 lg:w-1/3 md:w-1/2">
                        <h2 className="mb-2 font-bold tracking-widest text-gray-100">
                            Quick Links
                        </h2>
                        <ul className="mb-8 space-y-2 text-sm list-none">
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 1
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 2
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 3
                                </Link>
                            </li>
                            <li>
                                <Link href={"/"} className="text-gray-300">
                                    Link 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex justify-center -mt-8">
                <p className="text-center text-white pb-2">
                    @2023 All rights reserved by <span className="bg-clip-text text-transparent font-bold bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700">OffShop</span>
                </p>
            </div>
        </footer>
    );
}

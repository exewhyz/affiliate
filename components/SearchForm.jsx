"use client"

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { formUrlQuery } from "@/sanity/utils";

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const delayDebouceFn = setTimeout(() => {
            let newUrl = '';
            if (search) {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: 'query',
                    value: search,
                })
            } else {
                newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    keysToRemove: ['query'],
                })
            }
            router.push(newUrl, { scroll: false })
        }, 300);
        return () => clearTimeout(delayDebouceFn);
    }, [search]);
    return (
        <form className="flex items-center bg-[#F2F4F7] space-x-2 border rounded-md p-2 w-[200px]" onSubmit={(e) => e.preventDefault()}>
            <Search className="h-5 w-5 flex-none text-gray-300" />
            <input
                className="max-w-[150px] outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto bg-[#F2F4F7]"
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    )
}

export default SearchForm;

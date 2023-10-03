"use client"

import { useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"

import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils"
import { formUrlQuery } from "@/sanity/utils";

export function Categories({ categories }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("");

  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategory = (currentValue) => {
    setOpen(false)
    let newUrl = '';
    if (value === currentValue) {
      setValue("")
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ['category'],
      })
    } else {
      setValue(currentValue)
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'category',
        value: currentValue.toLowerCase(),
      })
    }

    router.push(newUrl, { scroll: false });
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="bg-[#F2F4F7] text-gray-500 w-[200px] justify-between text-md capitalize"
        >
          {value
            ? categories.find((category) => category.title.toLowerCase() === value)?.title
            : "All Categories"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandGroup>
            {categories.map((category) => (
              <CommandItem
                className="capitalize"
                key={category._id}
                onSelect={(currentValue) => handleCategory(currentValue)}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === category.title.toLowerCase() ? "opacity-100" : "opacity-0"
                  )}
                />
                {category.title}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
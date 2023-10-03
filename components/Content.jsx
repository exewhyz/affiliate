"use client"

import Image from "next/image";
import Link from "next/link";

import { Copy } from "lucide-react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { toast } from "./ui/use-toast";

const Content = (product) => {
    return (
        <Card className="bg-[#F2F4F7] max-w-[365px] border-0 sm:max-w-[365px]">
            <Link href={product.src} className="cursor-pointer" target="_blank">
                <CardHeader>
                    {product.title.length > 15 ?
                        <TooltipProvider>
                            <Tooltip>
                                <CardTitle >
                                    <TooltipTrigger>
                                        {product.title.slice(0, 15) + "..."}
                                    </TooltipTrigger>
                                </CardTitle>
                                <TooltipContent>
                                    <p>{product.title}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        :
                        <CardTitle >
                            {product.title}
                        </CardTitle>
                    }
                    <CardDescription className="text-[12px] font-bold logo-gradient flex items-center justify-between capitalize">
                        <span>{product.brand}</span>
                        <span className="font-bold logo-gradient rounded-3xl p-1">{product.category}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                    <Image src={product.image} alt="product image" width={100} height={100} className="h-40 w-auto" priority={true} />
                </CardContent>
            </Link >
            <CardFooter className="flex gap-x-1 items-center">
                <div className="gap-x-2 flex items-center justify-center">
                    <p className="text-gray-900 line-through text-[11px]">₹{product.actual}</p>
                    <p className="text-sm text-black">₹{product.sale}</p>
                </div>
                <p className="font-bold logo-gradient mx-6 text-sm">
                    {((product.actual - product.sale) * 100 / product.actual).toFixed(0)}% OFF
                </p>
                <TooltipProvider>
                    <Tooltip>
                        <CardTitle >
                            <TooltipTrigger>
                                <Copy
                                    className="text-black cursor-pointer h-8 py-2 rounded-md hover:bg-accent hover:text-accent-foreground"
                                    onClick={() => {
                                        navigator.clipboard.writeText(product.src);
                                        toast({
                                            title: "Link copied to clipboard",
                                            description: product.src,
                                        })
                                    }}
                                />
                            </TooltipTrigger>
                        </CardTitle>
                        <TooltipContent>
                            <p>Copy</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

            </CardFooter>
        </Card>
    )
}

export default Content;

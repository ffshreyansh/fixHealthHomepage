"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const components = [
    {
        title: "Alert Dialog",
        href: "/docs/primitives/alert-dialog",
        description:
            "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
        title: "Hover Card",
        href: "/docs/primitives/hover-card",
        description:
            "For sighted users to preview content available behind a link.",
    },
    {
        title: "Progress",
        href: "/docs/primitives/progress",
        description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
        title: "Scroll-area",
        href: "/docs/primitives/scroll-area",
        description: "Visually or semantically separates content.",
    },
    {
        title: "Tabs",
        href: "/docs/primitives/tabs",
        description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
        title: "Tooltip",
        href: "/docs/primitives/tooltip",
        description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
];

export default function NavigationMenuDemo() {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(()=>{
        setMounted(true);
    },[]);
    return (
        <div className="flex items-center justify-between py-5 px-3 lg:px-20 border-b border-[#191919]  fixed bg-[#111111] w-full">
            <div className="flex items-center">
                <img src="/fix.svg" alt="fix health logo" width={120} />
            </div>


            <NavigationMenu className='hidden lg:inline'>
                <NavigationMenuList>
                    <NavigationMenuItem >
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/services" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Services
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/blogs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Blogs
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="">
                        <Link href="/about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {/* <Link className=" items-center hidden lg:flex" href='/book-now'>
                <Button size='lg' variant='navbar'>Book Now</Button>
            </Link> */}
            <Dialog className='m-2'>
                <DialogTrigger>
                    <Button size='lg' variant='navbar' className='hidden lg:flex'>Book Now</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className='text-center mb-8'>Book an Appointment for <strong>FREE</strong>  </DialogTitle>
                        <DialogDescription className='mt-8'>
                            <input type="text" name="" id="" className="w-full h-12 border border-[#414141] outline-none px-4 rounded-md" placeholder="Don't expect this form to be submitted." />
                            <button className="w-full h-12 bg-black text-white font-semibold mt-4 rounded-md">Submit</button>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
            <Sheet className='inline lg:hidden'>
                <SheetTrigger className="inline lg:hidden">
                    <MenuIcon className="text-white inline lg:hidden " />
                </SheetTrigger>
                <SheetContent side='left'>
                    <div className="flex flex-col items-start gap-4">
                        <Link href='/'>Home</Link>
                        <Link href='/'>Service</Link>

                        <Link href='/'>Blogs</Link>
                        <Link href='/'>About</Link>
                        {/* <div className="flex items-center">
                            <Button size='lg' variant='navbar'>Book Now</Button>
                        </div> */}
                        <Dialog className='m-2'>
                            <DialogTrigger>
                                <Button size='lg' variant='navbar'>Book Now</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle className='text-center mb-8'>Book an Appointment for <strong>FREE</strong>  </DialogTitle>
                                    <DialogDescription className='mt-8'>
                                        <input type="text" name="" id="" className="w-full h-12 border border-[#414141] outline-none px-4 rounded-md" placeholder="Don't expect this form to be submitted." />
                                        <button className="w-full h-12 bg-black text-white font-semibold mt-4 rounded-md">Submit</button>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </SheetContent>
            </Sheet>


        </div>
    );
}

const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#151515] hover:text-white",
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">{title}</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = "ListItem";

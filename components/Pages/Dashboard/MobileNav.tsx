"use client";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { dashboardLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      <Link
        href="/"
        className="text-white sidebar-logo font-semibold text-3xl flex items-center gap-2 md:py-2"
      >
        <h1 className="text-white font-semibold text-2xl md:text-3xl">
          Spark<span className="text-a-3">Post</span>
        </h1>
      </Link>

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white" />
            </SheetTrigger>
            <SheetContent className="sheet-content bg-a-4 sm:w-64">
              <>
                <h1 className="text-a-1 sidebar-logo font-semibold text-3xl flex items-center gap-2 md:py-2">
                  Spark<span className="text-a-3">Post</span>
                </h1>
                <ul className="header-nav_elements">
                  {dashboardLinks.map((link) => {
                    const isActive = link.href === pathname;

                    return (
                      <li
                        key={link.href}
                        className={`${
                          isActive && "gradient-text"
                        } p-18 flex whitespace-nowrap text-white/80`}
                      >
                        <Link
                          className="sidebar-link cursor-pointer"
                          href={link.href}
                        >
                          {link.icon}
                          {link.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;

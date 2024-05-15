"use client";
import { dashboardLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "@/components/ui/button";
import UserPlan from "./user.plan";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link
          href="/"
          className="text-white sidebar-logo font-semibold text-3xl"
        >
          <h1 className="text-white font-semibold text-2xl md:text-3xl">
            Spark<span className="text-a-3">Post</span>
          </h1>
        </Link>

        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {dashboardLinks.slice(0, 5).map((link) => {
                const isActive = link.href === pathname;
                
                return (
                  <li
                    key={link.href}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-white/10" : "text-white/80"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.href}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <UserPlan/>

            </ul>

            <ul className="sidebar-nav_elements">
              {dashboardLinks.slice(5).map((link) => {
                const isActive = link.href === pathname;

                return (
                  <li
                    key={link.href}
                    className={`sidebar-nav_element group ${
                      isActive ? "bg-purple-gradient" : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.href}>
                      {link.icon}
                      {link.name}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

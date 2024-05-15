import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex items-center justify-between transition-all px-8 lg:px-16 py-8 border-b border-a-4">
        <div className="flex items-center justify-center gap-10">
          <Link href={"/"} className="flex items-center justify-center gap-2">
            <Image
              src={"/logo.svg"}
              alt=""
              width={70}
              height={70}
              className="rounded-full w-10 h-10 md:w-16 md:h-16"
            />
            <h1 className="text-white font-semibold text-2xl md:text-3xl">
              Spark<span className="text-a-3">Post</span>
            </h1>
          </Link>
          {navItems.map((item) => (
            <Link
              className="hidden lg:flex text-a-1/60 text-xl hover:text-white transition"
              key={item.id}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}
        </div>

        <div className="flex lg:hidden text-a-1 text-3xl items-center justify-center gap-4">
          <SignedOut>
            <Button variant={"outline"}>Login</Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent className="bg-zinc-900">
              <SheetHeader>
                <SheetTitle className="text-white">
                  <h1 className="text-white font-semibold text-2xl md:text-3xl">
                    Spark<span className="text-a-3">Post</span>
                  </h1>
                </SheetTitle>
              </SheetHeader>
              <SheetClose asChild>
                <div className="px-5 py-6 flex flex-col items-start justify-center gap-7">
                  <Link
                    className="flex flex-col text-a-1/60 text-3xl hover:text-white transition"
                    href={"/"}
                  >
                    Home
                  </Link>
                  <Link
                    className="flex flex-col text-a-1/60 text-3xl hover:text-white transition"
                    href={"/"}
                  >
                    Blog
                  </Link>
                  {navItems.map((item) => (
                    <Link
                      className="flex flex-col text-a-1/60 text-3xl hover:text-white transition"
                      key={item.id}
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  ))}

                  <SignedIn>
                    <Link href={"/sign-in"} className="text-a-1/60 text-3xl hover:text-white transition">
                        Dashboard
                    </Link>
                  </SignedIn>
                  <SignedOut>
                    <Link href={"/sign-up"}>
                      <Button className="text-lg" size={"lg"}>
                        Start Trial
                      </Button>
                    </Link>
                    <Link href={"/sign-in"}>
                      <Button
                        variant={`outline`}
                        className="text-lg"
                        size={"lg"}
                      >
                        Login
                      </Button>
                    </Link>
                  </SignedOut>
                </div>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6">
          <SignedIn>
            <Link href={"/sign-in"}>
              <Button variant={`outline`} className="text-lg" size={"lg"}>
                Dashboard
              </Button>
            </Link>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Link href={"/sign-up"}>
              <Button className="text-lg" size={"lg"}>
                Start Trial
              </Button>
            </Link>
            <Link href={"/sign-in"}>
              <Button variant={`outline`} className="text-lg" size={"lg"}>
                Login
              </Button>
            </Link>
          </SignedOut>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

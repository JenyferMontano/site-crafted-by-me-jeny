"use client";

import { links } from "./Nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon-lg"
          className="rounded-full border-white/10 bg-white/[0.03] text-white hover:border-[rgba(173,110,202,0.35)] hover:bg-[rgba(173,110,202,0.12)] hover:text-white"
        >
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Open navigation</span>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="border-white/10 bg-[rgb(7,4,24)] text-white"
      >
        <SheetHeader className="px-6 pt-8">
          <SheetTitle className="text-white">Navigation</SheetTitle>
          <SheetDescription className="text-zinc-400">
            Explore the portfolio sections and jump directly to what you want
            to see.
          </SheetDescription>
        </SheetHeader>

        <div className="px-6 pb-6">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <SheetClose asChild key={link.name}>
                <a
                  href={link.path}
                  className="rounded-2xl px-4 py-3 text-base font-medium text-zinc-200 transition duration-300 hover:bg-[rgba(173,110,202,0.12)] hover:text-white"
                >
                  {link.name}
                </a>
              </SheetClose>
            ))}
          </nav>

          <SheetClose asChild>
            <a
              href="#contact"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[rgb(173,110,202)] px-5 py-3 text-sm font-medium text-[rgb(3,0,20)] transition duration-300 hover:bg-[rgb(186,126,214)]"
            >
              Let&apos;s Talk
            </a>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

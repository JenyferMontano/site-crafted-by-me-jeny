"use client";

import Link from "next/link";

import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[rgba(3,0,20,0.72)] text-foreground backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[rgba(173,110,202,0.22)] bg-[rgba(173,110,202,0.08)] text-base font-semibold text-white transition duration-300 group-hover:border-[rgba(173,110,202,0.38)] group-hover:bg-[rgba(173,110,202,0.14)]">
              J
            </span>
            <div>
              <h1 className="text-xl font-semibold tracking-[0.08em] text-white sm:text-2xl">
                Jeny<span className="text-[rgb(173,110,202)]">.</span>
              </h1>
              <p className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
                Systems Engineering Student
              </p>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex">
          <Nav />
        </div>

        <div className="hidden md:block">
          <Button
            asChild
            className="rounded-full bg-[rgb(173,110,202)] px-5 text-[rgb(3,0,20)] shadow-[0_14px_34px_rgba(173,110,202,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[rgb(186,126,214)]"
          >
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

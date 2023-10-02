import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "@/components/theme-toggle";
import MainNav from "./main-nav";

export default function SiteHeader() {
  return (
    <header className="z-30 border-b border-border p-4 font-incognito md:px-16">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/">
          <Image
            src="/images/avatar.png"
            width={40}
            height={40}
            alt="logo"
            className="rounded-full border border-border"
          />
        </Link>

        <MainNav />

        <ThemeToggle />
      </div>
    </header>
  );
}

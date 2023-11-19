import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Error 404",
};

const NotFound = () => {
  return (
    <main className="mx-auto grid min-h-[60vh] max-w-7xl place-items-center">
      <header className="max-w-4xl">
        <Image
          src="/images/searching-duck.gif"
          width={80}
          height={80}
          alt="Yellow duck searching"
        />
        <h1 className="mb-3 mt-6 font-incognito text-3xl font-black leading-tight tracking-tight sm:text-6xl lg:leading-[3.7rem]">
          Error 404!
        </h1>

        <p className="mb-10 max-w-2xl font-sans leading-relaxed text-foreground/60">
          Oopsies! This page does not exist on my website. Please check the URL
          and try again.
        </p>

        <div className="flex gap-4">
          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Go back
          </Link>

          <Link href="/" className={buttonVariants({ variant: "outline" })}>
            Go home
          </Link>
        </div>
      </header>
    </main>
  );
};

export default NotFound;

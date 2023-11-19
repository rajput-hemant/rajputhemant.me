"use client";

import { useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export default function EasterEgg({ hasMet }: { hasMet: boolean }) {
  const [image, setImage] = useState(false);

  const toggleImage = () => {
    const interval = setInterval(() => {
      setImage(true);
    });

    setTimeout(() => {
      setImage(false);
      clearInterval(interval);
    }, 3000);
  };

  return (
    <>
      <Checkbox
        onClick={toggleImage}
        checked={hasMet}
        className="data-[state=checked]:bg-green-600 dark:dark:data-[state=checked]:border-green-300 dark:data-[state=checked]:border-green-600 dark:data-[state=checked]:bg-green-300"
      />

      <Image
        src="/images/yeah-right.png"
        width={250}
        height={250}
        quality={100}
        alt="yeah right"
        className={cn(
          "fixed bottom-1/2 z-30 duration-1000",
          image ? "left-0" : "-left-80"
        )}
      />
    </>
  );
}

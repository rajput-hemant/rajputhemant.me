"use client";

import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";

type Props = {
  className?: string;
};

const ThemeToggle = ({ className }: Props) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  function toggleTheme() {
    setTheme(currentTheme === "light" ? "dark" : "light");
  }

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "h-10 w-10 rounded-full border border-border p-2 transition-transform duration-300 dark:text-green-300",
        currentTheme === "light" ? "-rotate-180" : "rotate-0",
        className
      )}
      aria-label="Toggle Theme"
    >
      {currentTheme === "light" ? <Icons.Sun /> : <Icons.Moon />}
    </button>
  );
};

export default ThemeToggle;

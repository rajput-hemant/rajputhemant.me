"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

import { Toaster } from "./ui/toaster";

type Props = {
  theme?: ThemeProviderProps;
  children: React.ReactNode;
};

export function Providers({ children, theme }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...theme}
    >
      {children}

      <Toaster />
    </ThemeProvider>
  );
}

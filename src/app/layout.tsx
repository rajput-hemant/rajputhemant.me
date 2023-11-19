import { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans, incognito, poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { Providers } from "@/components/providers";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Separator } from "@/components/ui/separator";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [],
  authors: [
    {
      name: "rajput-hemant",
      url: "https://rajputhemant.me",
    },
  ],
  creator: "shadcn",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      // {
      //   url: siteConfig.ogImage,
      //   width: 1200,
      //   height: 630,
      //   alt: siteConfig.name,
      // },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter.href.split("/").pop(),
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[url('/images/noise.png')]",
          fontSans.variable,
          poppins.variable,
          incognito.variable
        )}
      >
        <Providers>
          <Navbar />
          <main className="mt-10 min-h-[calc(100vh-11rem)] font-incognito md:mt-10 lg:mt-16 lg:min-h-[calc(100vh-12.5rem)]">
            {children}
          </main>
          <Separator />
          <Footer />{" "}
        </Providers>

        <TailwindIndicator />
      </body>
    </html>
  );
};

export default RootLayout;

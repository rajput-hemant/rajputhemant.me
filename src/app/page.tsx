"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Clipboard,
  ClipboardCheck,
  Contact,
  Laptop,
  MailOpen,
  Rocket,
} from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { useIsMounted } from "@/hooks/is-mounted";
import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import ThemeToggle from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Innovative Web Solutions",
    description:
      "Transforming your ideas into captivating websites using powerful technologies.",
    icon: "/images/ic-webdev.webp",
  },
  {
    title: "Mobile App Redefined",
    description:
      "Crafting immersive mobile apps that come to life with the magic of Flutter & React Native.",
    icon: "/images/ic-appdev.webp",
  },
];

const Page = () => {
  const [isCopied, setIsCopied] = useState(false);
  const isMounted = useIsMounted();

  const handleEmailClick = (email: string) => {
    navigator.clipboard.writeText(email);
    setIsCopied(true);
  };

  if (!isMounted) {
    return (
      <div className="grid h-screen place-items-center">
        <span className="h-24 w-24 animate-spin rounded-full border-y-2 border-green-300 md:h-32 md:w-32" />
      </div>
    );
  }

  return (
    <div className="mx-auto mb-2 max-w-xl space-y-6 p-6 duration-500 animate-in slide-in-from-top-1/2">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* hero */}
      <header className="flex flex-col items-center justify-center gap-6 duration-1000 animate-in slide-in-from-bottom-full">
        <div className="overflow-hidden rounded-full border-2 shadow-inner">
          <Image
            src="/images/rajput-hemant.png"
            alt="Hemant Rajput"
            width={100}
            height={100}
            className="scale-105 duration-300 lg:hover:scale-110"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex items-center gap-2 text-center">
            <h1 className="text-2xl font-medium">Hemant Rajput</h1>

            <Icons.Verified />
          </div>

          <p className="mx-1 text-center leading-relaxed md:text-base">
            Seasoned software engineer especially in frontend side, with a
            passion for creating pixel-perfect web experiences.
          </p>
        </div>

        {/* socials */}
        <div className="flex justify-center gap-x-3">
          {siteConfig.links.map(({ title, href, icon: Icon }) => {
            return (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={title}
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 w-12 rounded-full p-3 transition-all duration-300 hover:scale-105 hover:shadow"
                )}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* portfolio website link */}
        <div className="flex flex-col items-center justify-center gap-3 py-3 md:flex-row">
          <a
            href="/portfolio"
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "group gap-x-1 rounded-xl transition-all duration-300 hover:gap-x-2 hover:shadow"
            )}
          >
            <Rocket className="h-5 transition-transform duration-700 group-hover:translate-x-36 group-hover:rotate-45" />

            <span className="transition-transform duration-700 group-hover:-translate-x-7">
              Website & Portfolio
            </span>
          </a>
        </div>
      </header>

      <Separator />

      {/* services */}
      <div className="space-y-5">
        <div className="flex items-center gap-2 px-3">
          <Laptop size={24} />
          <h2 className="text-lg font-medium md:text-xl">Services</h2>
        </div>

        <div className="space-y-3 duration-1000 animate-in slide-in-from-bottom-full">
          {services.map(({ title, description, icon }, i) => (
            <Card
              key={i}
              style={{ backgroundImage: "url('/images/bg-gradient-1.svg')" }}
              className="overflow-hidden border bg-contain bg-right bg-no-repeat transition-shadow duration-300 hover:shadow dark:bg-secondary"
            >
              <div className="grid grid-flow-col items-center justify-between gap-x-6 px-6 py-5 dark:backdrop-blur-[2px]">
                <Image
                  src={icon}
                  alt={title}
                  width={40}
                  height={40}
                  className="dark:invert"
                />

                <div className="space-y-1 duration-1000 animate-in slide-in-from-bottom-full">
                  <h5 className="font-medium md:text-lg">{title}</h5>

                  <p className="text-sm text-muted-foreground">{description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <Separator />

      {/* contact */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 px-3">
          <Contact size={24} />

          <h2 className="text-lg font-medium md:text-xl">Get in Touch</h2>
        </div>

        <Card
          className="group cursor-pointer rounded-2xl bg-emerald-200 bg-right bg-no-repeat p-2 text-black transition-all duration-1000 animate-in slide-in-from-bottom-full"
          style={{ backgroundImage: "url('/images/bg-gradient-2.svg')" }}
          onClick={() => handleEmailClick("rajput.hemant2001@gmail.com")}
        >
          <CardHeader className="space-y-3">
            <div className="flex justify-between">
              <MailOpen />

              {isCopied ? (
                <ClipboardCheck className="-my-3 -mr-2 h-6 w-6" />
              ) : (
                <Clipboard className="-my-3 -mr-2 h-6 w-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
            </div>

            <div className="text-lg font-medium md:text-xl">
              Drop Me an Email
            </div>
          </CardHeader>

          <CardContent className="space-y-3">
            <div className="flex items-center gap-2 text-lg">
              <span className="underline-offset-8 group-hover:underline">
                rajput.hemant2001@gmail.com
              </span>

              {isCopied && "(Copied!)"}
            </div>

            <p className="text-sm leading-relaxed md:text-base">
              Expect my rapid and eager reply - your message won&apos;t be kept
              waiting!
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator />

      <Footer />
    </div>
  );
};

export default Page;

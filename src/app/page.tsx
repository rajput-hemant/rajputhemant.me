import Image from "next/image";
import { Laptop, Rocket } from "lucide-react";

import { services } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import { Icons } from "@/components/icons";
import ThemeToggle from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="mx-auto mb-2 max-w-xl space-y-6 p-6 font-sans duration-500 animate-in slide-in-from-top-1/2">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* hero */}
      <header className="flex flex-col items-center justify-center gap-6 duration-1000 animate-in slide-in-from-bottom-full">
        <div className="overflow-hidden rounded-full border-2 shadow-inner">
          <Image
            src="/images/avatar.png"
            alt="Hemant Rajput"
            width={100}
            height={100}
            className="scale-105 duration-300 lg:hover:scale-110"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="flex items-center gap-2 text-center">
            <h1 className="text-2xl font-medium">{siteConfig.author.name}</h1>

            <Icons.Verified />
          </div>

          <p className="mx-1 text-center leading-relaxed md:text-base">
            {siteConfig.author.description}
          </p>
        </div>

        {/* socials */}
        <div className="flex justify-center gap-x-3">
          {Object.values(siteConfig.links).map(
            ({ title, href, icon: Icon }) => {
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
            }
          )}
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
          <Laptop className="h-5 w-5" />
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

      <Contact />

      <Separator />

      <Footer />
    </div>
  );
}

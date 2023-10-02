"use client";

import Image from "next/image";
import { Download, Link, Mail } from "lucide-react";

import { siteConfig } from "@/config/site";
import { useToast } from "@/components/ui/use-toast";

const AboutSidebar = () => {
  const { toast } = useToast();

  return (
    <aside className="order-none mb-12 flex flex-col gap-y-8 lg:order-1">
      <div className="sticky top-10 duration-700 animate-in zoom-in-50">
        <div className="mb-4 w-60 overflow-hidden rounded-full border sm:w-80 md:w-full">
          <Image
            src="/images/avatar.png"
            width={400}
            height={400}
            quality={100}
            alt="Hemant Rajput"
            priority
            className="scale-105 object-cover duration-300 hover:scale-110"
          />
        </div>

        <div className="flex cursor-pointer flex-col gap-y-4 text-center">
          <div
            onClick={() => {
              toast({
                title: "Coming soon!",
                description: "This feature is still under development.",
                duration: 2000,
              });
            }}
            className="flex items-center gap-x-3"
          >
            <a
              // href="#"
              rel="noreferrer noopener"
              target="_blank"
              className="flex basis-[90%] items-center justify-center gap-x-2 rounded-md border bg-secondary/50 py-2 text-center text-lg font-semibold"
            >
              View Resume <Link className="h-4 w-4" />
            </a>

            <a
              // href="#"
              title="Download Resume"
              onClick={() => {
                toast({
                  title: "Coming soon!",
                  description: "This feature is still under development.",
                  duration: 2000,
                });
              }}
              className="flex basis-[15%] items-center justify-center rounded-md border bg-secondary/50 py-3 text-center text-lg hover:underline md:basis-[10%]"
            >
              <Download
                aria-label="Download Resume"
                className="h-5 w-5 text-green-600 dark:text-green-300"
              />
            </a>
          </div>

          <a
            href={`mailto:${siteConfig.author.mail}`}
            className="hover:text-primary-color flex items-center justify-center gap-x-2 text-green-600 dark:text-green-300/75"
          >
            <Mail className="h-5 w-5" />
            {siteConfig.author.mail}
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AboutSidebar;

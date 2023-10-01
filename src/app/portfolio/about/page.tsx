"use client";

// import { Metadata } from "next";
import Image from "next/image";
import { Download, Link, Mail, Quote } from "lucide-react";

import { heroes, tools } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { cn, shuffle } from "@/lib/utils";
import EasterEgg from "@/components/easter-egg";
import { useToast } from "@/components/ui/use-toast";

// export const metadata: Metadata = {
//   title: "About | Hemant Rajput",
// };

export default function About() {
  const { toast } = useToast();

  return (
    <main className="relative mx-auto max-w-3xl px-6 md:px-16 lg:mt-28 lg:max-w-7xl">
      <section className="relative grid grid-cols-1 justify-items-center gap-x-6 lg:grid-cols-2">
        <div className="order-2 duration-700 animate-in slide-in-from-top-full lg:order-none">
          <h1 className="mb-8 basis-1/2 text-3xl font-black tracking-tight sm:text-5xl lg:leading-tight">
            I&apos;m Hemant Rajput. I live in Mathura, where I build the future.
          </h1>

          <div className="font-sans leading-relaxed text-foreground/60">
            I am a self-driven, career-oriented software developer specializing
            in front-end development and open-source.
            <br />
            <br />I strongly believe in continuous learning and improving
            myself, so I try my best to learn in any situation possible,
            unfavorable or not. To further expand my knowledge and enhance my
            development skills.
            <blockquote className="relative my-8 overflow-hidden rounded-md border bg-secondary/50 p-4 pr-12 tracking-tight lg:py-6 lg:pl-6">
              <Quote
                className="absolute -right-4 -top-6 -z-10 h-24 w-24 -rotate-12 text-secondary"
                aria-hidden="true"
              />
              If you ever spot me in the wild, don&apos;t hesitate to say hello!
              Let&apos;s grab a drink and geek-out over the latest advancements
              in front-end development or discuss our favorite programming
              language.
            </blockquote>
          </div>
        </div>

        <aside className="order-none mb-12 flex flex-col gap-y-8 lg:order-1">
          <div className="sticky top-10 duration-700 animate-in zoom-in-50">
            <div className="mb-4 w-80 overflow-hidden rounded-full border md:w-full">
              <Image
                src="/images/rajput-hemant.png"
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
                href={`mailto:${siteConfig.mail}`}
                className="hover:text-primary-color flex items-center justify-center gap-x-2 text-green-600 dark:text-green-300/75"
              >
                <Mail className="h-5 w-5" />

                {siteConfig.mail}
              </a>
            </div>
          </div>
        </aside>
      </section>

      {/* Setup */}
      <section className="mt-10 max-w-xl">
        <h2 className="mb-8 text-4xl font-bold tracking-tight">Setup</h2>

        <div className="flex flex-col gap-2 duration-500 animate-in zoom-in-50">
          <Image
            src="/images/setup.jpg"
            height={400}
            width={400}
            quality={100}
            alt="Future Setup"
            className="w-full rounded-md object-cover"
          />

          <span className="text-center text-foreground/50">
            Setup I plan to build one day
          </span>
        </div>
      </section>

      {/* Usage  */}
      <section className="mt-10 max-w-2xl">
        <div className="mb-8">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">Usage</h2>

          <p className="max-w-xl text-foreground/60">
            Tools, technologies and gadgets I use on a daily basis but not
            limited to.
          </p>
        </div>

        {tools.map(({ heading, items }, i) => (
          <div key={i} className="my-4">
            <h3 className="text-2xl font-semibold">{heading}</h3>

            {items.map(({ name, url, description, icon: Icon }, i) => (
              <li key={i} className="flex items-center gap-x-2 p-2">
                <Icon className="h-5 w-5" />
                <a
                  href={url}
                  rel="noreferrer noopener"
                  target="_blank"
                  aria-label={name}
                  className="my-auto min-w-fit leading-3 text-blue-500 underline underline-offset-4 duration-500 animate-in zoom-in-50 hover:underline dark:text-blue-400"
                >
                  {name}
                </a>
                -
                <span className="truncate text-foreground/60 duration-500 animate-in zoom-in-50">
                  {description}
                </span>
              </li>
            ))}
          </div>
        ))}
      </section>

      {/* Heroes  */}
      <section className="mt-10 max-w-5xl">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">Heroes</h2>

        <p className="max-w-2xl text-foreground/60">
          Inspired by{" "}
          <a
            href="https://rafa.design"
            rel="noreferrer noopener"
            target="_blank"
            className="text-blue-500 underline dark:text-blue-400"
          >
            Rafael Conde&apos;s
          </a>{" "}
          heroes list, here&apos;s my own curated lineup of code conjurers and
          digital dynamos that I&apos;m absolutely stoked to meet someday.{" "}
          <strong className="font-semibold">
            &quot;In no particular order&quot;
          </strong>
        </p>

        <ul className="mt-12 grid grid-cols-1 gap-6 tracking-tight md:grid-cols-2 lg:grid-cols-4">
          {shuffle(heroes).map(({ name, aka, met, url }, i) => (
            <li
              key={i}
              className="flex items-center gap-x-2 rounded-md border bg-secondary/50 p-2"
            >
              <EasterEgg isMet={met} />

              <a
                href={url}
                rel="noreferrer noopener"
                target="_blank"
                aria-label={name}
                className={cn(
                  "my-auto truncate leading-3 underline-offset-4 duration-500 animate-in slide-in-from-right-full hover:underline",
                  met && "text-green-600 dark:text-green-300"
                )}
              >
                {name}{" "}
                <span className="text-sm text-green-600 dark:text-green-300">
                  {aka && `(${aka})`}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

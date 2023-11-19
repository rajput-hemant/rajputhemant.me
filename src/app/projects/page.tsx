import { Metadata } from "next";
import Image from "next/image";
import { Eye } from "lucide-react";

import { projects } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { shuffle } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Project | ${siteConfig.author.name}`,
  description: `Explore projects built by ${siteConfig.author.name}`,
  openGraph: {
    title: `Project | ${siteConfig.author.name}`,
    url: `${siteConfig.url}/projects`,
    description: `Explore projects built by ${siteConfig.author.name}`,
  },
};

export default function Projects() {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16">
      <header className="mb-16 max-w-2xl duration-700 animate-in slide-in-from-top-full">
        <h1 className="mb-6 font-incognito text-3xl font-black tracking-tight sm:text-5xl lg:leading-[3.7rem]">
          Projects
        </h1>

        <p className="font-sans text-base leading-relaxed text-foreground/60">
          I&apos;ve worked on tons of little projects over the years but these
          are the ones that I&apos;m most proud of. Many of them are
          open-source, so if you see something that piques your interest, check
          out the code and contribute if you have ideas on how it can be
          improved.
        </p>
      </header>

      <section className="mb-12 grid grid-cols-1 gap-5 duration-700 animate-in slide-in-from-top-full md:grid-cols-2 xl:grid-cols-3">
        {shuffle(projects).map(
          ({ projectUrl: { github, live }, logo, name, tagline }, i) => (
            <a
              key={i}
              href={github}
              target="_blank"
              className="group flex items-center gap-x-4 rounded-lg border bg-secondary/50 p-4 duration-300 hover:bg-secondary/90 hover:shadow-md"
            >
              <Image
                src={logo}
                width={60}
                height={60}
                alt={name}
                className="h-16 w-16 rounded-md bg-foreground/5 object-contain p-2 duration-300 group-hover:bg-foreground/10"
              />

              <div className="duration-1000 animate-in slide-in-from-bottom-full">
                <div className="flex justify-between">
                  <h2 className="mb-1 text-lg tracking-wide">{name}</h2>

                  {live && (
                    <a
                      href={live}
                      target="_blank"
                      className="z-10 my-auto -mt-1 rounded-md border border-transparent p-1 text-foreground/50 duration-300 hover:border-border hover:text-foreground"
                    >
                      <Eye className="h-5 w-5" />
                    </a>
                  )}
                </div>

                <div className="line-clamp-2 text-sm text-foreground/60">
                  {tagline}
                </div>
              </div>
            </a>
          )
        )}
      </section>
    </main>
  );
}

import Image from "next/image";

import { jobs } from "@/config/constants";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

const PortfolioPage = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 md:px-16 lg:mt-16">
      {/* hero */}
      <section className="flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-2xl duration-700 animate-in slide-in-from-top-full lg:max-w-2xl">
          <h1 className="mb-6 min-w-full text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
            Software engineer & <br />
            open-source enthusiast.
          </h1>

          <p className="text-base leading-relaxed text-foreground/60">
            I&apos;m Hemant Rajput, an experienced frontend developer passionate
            about learning and building open-source software that is beneficial
            to developers and the world at large.
          </p>

          {/* socials */}
          <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4 duration-700 animate-in slide-in-from-bottom-full">
            {siteConfig.links.map(({ title, href, icon: Icon }, i) => (
              <li key={i}>
                <a
                  href={href}
                  rel="noreferer noopener"
                  target="_blank"
                  className="group flex items-center border-b border-border"
                >
                  <Icon
                    className="h-4 w-4 shrink-0 text-foreground/60 duration-300 group-hover:text-foreground"
                    aria-hidden="true"
                  />
                  &nbsp;
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Icons.Hero className="h-full w-full duration-700 animate-in slide-in-from-bottom-1/3 lg:h-[450px] lg:w-[450px]" />
      </section>

      {/* work */}
      <section className="duration-700 animate-in slide-in-from-bottom-full">
        <div className="mb-16">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Work Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-2">
          {jobs.map((data, i) => (
            <div
              key={i}
              className="relative flex max-w-2xl items-start gap-x-4 before:absolute before:bottom-0 before:left-9 before:top-[5rem] before:h-[calc(100%-70px)] before:w-[1px] before:bg-muted lg:gap-x-6"
            >
              <a
                href={data.url}
                rel="noreferrer noopener"
                target="_blank"
                className="relative grid min-h-[80px] min-w-[80px] place-items-center text-clip rounded-md border border-border bg-secondary/50 p-2"
              >
                <Image
                  src={data.logo}
                  className="object-cover duration-300"
                  alt={`${data.title} logo`}
                  width={50}
                  height={50}
                />
              </a>

              <div className="flex flex-col items-start">
                <h3 className="text-xl font-bold">{data.title}</h3>

                <p>{data.jobTitle}</p>

                <time className="mt-2 text-sm uppercase tracking-widest text-foreground/40">
                  {data.startDate} -{" "}
                  {data.endDate ? (
                    data.endDate
                  ) : (
                    <span className="text-green-600 dark:text-green-300">
                      Present
                    </span>
                  )}
                </time>
                <p className="my-4 tracking-tight text-foreground/60 hover:text-foreground/75">
                  {data.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioPage;

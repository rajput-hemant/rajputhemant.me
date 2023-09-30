import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";

const PortfolioPage = () => {
  return (
    <main className="mx-auto mt-20 max-w-7xl px-6 md:px-16 lg:mt-32">
      <section className="mb-16 flex flex-col items-start justify-between gap-x-12 xl:flex-row xl:items-center xl:justify-center">
        <div className="max-w-2xl lg:max-w-2xl">
          <h1 className="font-incognito mb-6 min-w-full text-3xl font-black leading-tight tracking-tight sm:text-5xl lg:min-w-[700px] lg:leading-[3.7rem]">
            Software engineer and <br />
            open-source enthusiast.
          </h1>

          <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m Hemant Rajput, an experienced frontend developer passionate
            about learning and building open-source software that is beneficial
            to developers and the world at large.
          </p>

          {/* socials */}
          <ul className="my-10 flex flex-wrap items-center gap-x-5 gap-y-4">
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

        <Icons.Hero className="h-full w-full lg:h-[450px] lg:w-[450px]" />
      </section>
    </main>
  );
};

export default PortfolioPage;

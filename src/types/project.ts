export type Project = {
  slug: string;
  name: string;
  tagline: string;
  logo: string;
  projectUrl: {
    github: string;
    live?: string;
  };
  coverImage?: {
    image: string;
    alt: string | null;
  };
  description: string;
};

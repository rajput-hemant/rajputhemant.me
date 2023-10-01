import { Github, Linkedin, Twitter } from "lucide-react";

import { Icons } from "@/components/icons";

export const siteConfig = {
  name: "Hemant Rajput | Software Developer",
  description:
    "Hemant Rajput is a Software Developer who is passionate about building solutions and contributing to open source communities",
  url: "https://rajputhemant.me",
  mail: "rajput.hemant2001@gmail.com",

  links: [
    {
      title: "Github",
      href: "https://github.com/rajput-hemant",
      icon: Github,
    },
    {
      title: "Linkedin",
      href: "https://www.linkedin.com/in/rajput-hemant",
      icon: Linkedin,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/rajput_hemant01",
      icon: Twitter,
    },
    {
      title: "Stackoverflow",
      href: "https://stackoverflow.com/users/20652038/rajput-hemant",
      icon: Icons.StackOverFlow,
    },
  ],
};

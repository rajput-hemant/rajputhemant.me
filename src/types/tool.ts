import React from "react";
import type { LucideIcon } from "lucide-react";

export type Tool = {
  heading: string;
  items: {
    name: string;
    description: string;
    url: string;
    icon: React.ComponentType<{ className?: string }> | LucideIcon;
  }[];
};

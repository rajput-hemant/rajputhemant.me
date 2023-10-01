import React from "react";

export type Tool = {
  heading: string;
  items: {
    name: string;
    url?: string;
    description: string;
    icon?: React.JSX.Element;
  }[];
};

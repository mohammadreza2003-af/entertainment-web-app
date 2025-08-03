import { LucideIcon } from "lucide-react";

export type navItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type Movie = {
  title: string;
  posterImg: string;
  year: string;
  rated: string;
  type: "movie" | "series";
};

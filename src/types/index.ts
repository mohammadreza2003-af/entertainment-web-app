import { LucideIcon } from "lucide-react";

export type navItem = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type TypeMovieCard = {
  id: string;
  title: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  overview: string;
  first_release_date: string;
  adult: boolean;
  original_name: string;
  original_title: string;
  original_language: string;
  first_air_date: string;
};

import { navItem } from "@/types";
import {
  ClapperboardIcon,
  LayoutDashboardIcon,
  PopcornIcon,
} from "lucide-react";

export const navitems: navItem[] = [
  {
    title: "home",
    url: "/",
    icon: LayoutDashboardIcon,
  },
  {
    title: "movies",
    url: "/movies",
    icon: ClapperboardIcon,
  },
  {
    title: "series",
    url: "/series",
    icon: PopcornIcon,
  },
];

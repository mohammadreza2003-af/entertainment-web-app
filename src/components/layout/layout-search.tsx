"use client";

import { usePathname } from "next/navigation";
import SearchBox from "@/components/common/search-box";
import SearchResults from "@/components/common/search-results";
import Wrapper from "../common/wrapper";

export default function LayoutSearch() {
  const pathname = usePathname();

  const showSearch =
    pathname === "/" ||
    pathname.startsWith("/movies") ||
    pathname.startsWith("/series");

  if (!showSearch) return null;

  return (
    <Wrapper className="md:my-6 my-4">
      <SearchBox />
      <SearchResults />
    </Wrapper>
  );
}

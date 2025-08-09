"use client";

import { usePathname } from "next/navigation";
import SearchBox from "@/components/common/search-box";
import Wrapper from "../common/wrapper";

export default function LayoutSearch() {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean);

  const showSearch =
    pathname === "/" ||
    (pathname.startsWith("/movies") && pathSegments.length === 1) ||
    (pathname.startsWith("/series") && pathSegments.length === 1);

  if (!showSearch) return null;

  return (
    <Wrapper>
      <SearchBox />
    </Wrapper>
  );
}

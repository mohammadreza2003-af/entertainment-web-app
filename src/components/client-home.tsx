"use client";

import React from "react";
import Wrapper from "./common/wrapper";
import SearchBox from "./common/search-box";
import MovieSection from "./common/movie-section";
import { useQuery } from "@tanstack/react-query";
import { getTrandMoives } from "@/actions/api";

export default function ClientHome() {
  const { data, isLoading } = useQuery({
    queryKey: ["trandingMoives"],
    queryFn: getTrandMoives,
  });

  if (isLoading) return null;
  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
        <MovieSection title="Trending" movies={data} />
        <MovieSection title="Recommended for you" movies={data} />
      </div>
    </Wrapper>
  );
}

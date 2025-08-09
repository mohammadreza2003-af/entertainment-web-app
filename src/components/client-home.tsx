"use client";

import React from "react";
import Wrapper from "./common/wrapper";
import MovieSection from "./common/movie-section";
import MovieLoading from "./movie-loading";
import { useQuery } from "@tanstack/react-query";
import {
  getRandomMovies,
  getTrandMoives as getTrendingMovies,
} from "@/actions/api";
import { useSearchStore } from "@/store";
import SearchResults from "./common/search-results";

export default function ClientHome() {
  const { search } = useSearchStore();

  const trendingQuery = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  const randomQuery = useQuery({
    queryKey: ["homeMovies"],
    queryFn: () => getRandomMovies("movies"),
    staleTime: 5 * 60 * 1000,
  });

  const isLoading = trendingQuery.isLoading || randomQuery.isLoading;
  const hasError = trendingQuery.error || randomQuery.error;

  if (isLoading) {
    return <MovieLoading type="home" />;
  }

  if (hasError) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load movies. Please try again later.
      </div>
    );
  }
  return (
    <Wrapper>
      <div className="w-full">
        {search ? (
          <SearchResults />
        ) : (
          <>
            <MovieSection title="Trending" movies={trendingQuery.data || []} />
            <MovieSection title="Movies" movies={randomQuery.data || []} />
          </>
        )}
      </div>
    </Wrapper>
  );
}

"use client";

import React from "react";
import Wrapper from "./common/wrapper";
import SearchBox from "./common/search-box";
import MovieSection from "./common/movie-section";
import MovieLoading from "./movie-loading";
import { useQuery } from "@tanstack/react-query";
import {
  getRandomMovies,
  getTrandMoives as getTrendingMovies,
  searchMovie,
} from "@/actions/api";
import { useSearchParams } from "next/navigation";

export default function ClientHome() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const {
    data: searchResults,
    isLoading: isSearchLoading,
    error: searchError,
  } = useQuery({
    queryKey: ["searchMovies", searchQuery],
    queryFn: () => searchMovie(searchQuery),
    enabled: !!searchQuery,
  });

  const {
    data: trendingMovies,
    isLoading: isTrendingLoading,
    error: trendingError,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
    enabled: !searchQuery,
  });

  const {
    data: randomMovies,
    isLoading: isRandomLoading,
    error: randomError,
  } = useQuery({
    queryKey: ["homeMovies"],
    queryFn: () => getRandomMovies("movies"),
    staleTime: 5 * 60 * 1000,
    enabled: !searchQuery,
  });

  const isLoading = searchQuery
    ? isSearchLoading
    : isTrendingLoading || isRandomLoading;

  const hasError = searchQuery ? searchError : trendingError || randomError;

  if (isLoading)
    return (
      <MovieLoading isSearching={searchQuery ? true : false} type="home" />
    );

  if (hasError) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load movies. Please try again later.
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        {searchQuery ? (
          <MovieSection
            title={`Results for "${searchQuery}"`}
            movies={searchResults}
          />
        ) : (
          <>
            <MovieSection title="Trending" movies={trendingMovies} />
            <MovieSection title="Movies" movies={randomMovies} />
          </>
        )}
      </div>
    </Wrapper>
  );
}

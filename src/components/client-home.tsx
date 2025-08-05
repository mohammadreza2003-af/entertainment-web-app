"use client";

import React, { useEffect } from "react";
import Wrapper from "./common/wrapper";
import SearchBox from "./common/search-box";
import MovieSection from "./common/movie-section";
import MovieLoading from "./movie-loading";
import { useQuery } from "@tanstack/react-query";
import {
  getMovieById,
  getRandomMovies,
  getTrandMoives as getTrendingMovies,
} from "@/actions/api";

export default function ClientHome() {
  const {
    data: trendingMovies,
    isLoading: isTrendingLoading,
    error: trendingError,
  } = useQuery({
    queryKey: ["trendingMovies"],
    queryFn: getTrendingMovies,
  });

  const {
    data: randomMovies,
    isLoading: isRandomLoading,
    error: randomError,
  } = useQuery({
    queryKey: ["homeMovies"],
    queryFn: () => getRandomMovies("movies"),
    staleTime: 5 * 60 * 1000,
  });

  const isLoading = isTrendingLoading || isRandomLoading;

  if (isLoading) return <MovieLoading type="home" />;

  if (trendingError || randomError) {
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load movies. Please try again later.
      </div>
    );
  }

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
        <MovieSection title="Trending" movies={trendingMovies} />
        <MovieSection title="Movies" movies={randomMovies} />
      </div>
    </Wrapper>
  );
}

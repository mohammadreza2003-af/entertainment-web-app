"use client";

import { getRandomMovies } from "@/actions/api";
import MovieSection from "@/components/common/movie-section";
import SearchBox from "@/components/common/search-box";
import Wrapper from "@/components/common/wrapper";
import { useQuery } from "@tanstack/react-query";
import MovieLoading from "./movie-loading";

type PageProps = {
  type: "movies" | "series";
};

export default function ClientMoviesOrSeries({ type }: PageProps) {
  console.log(type, "type");

  const { data, isLoading, error } = useQuery({
    queryKey: ["media", type],
    queryFn: () => getRandomMovies(type),
    staleTime: 5 * 60 * 1000,
  });

  if (isLoading) return <MovieLoading />;
  if (error) return <div>Failed to load {type}.</div>;

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
        <MovieSection
          title={type === "movies" ? "Movies" : "TV Series"}
          movies={data}
        />
      </div>
    </Wrapper>
  );
}

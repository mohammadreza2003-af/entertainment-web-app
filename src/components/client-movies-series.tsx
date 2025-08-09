"use client";

import { getRandomMovies } from "@/actions/api";
import MovieSection from "@/components/common/movie-section";
import Wrapper from "@/components/common/wrapper";
import { useQuery } from "@tanstack/react-query";
import MovieLoading from "./movie-loading";
import { useSearchStore } from "@/store";
import SearchResults from "./common/search-results";

type PageProps = {
  type: "movies" | "series";
};

export default function ClientMoviesOrSeries({ type }: PageProps) {
  const { search: rawSearch } = useSearchStore();
  const search = rawSearch.trim();

  const { data, isLoading, error } = useQuery({
    queryKey: ["media", type],
    queryFn: () => getRandomMovies(type),
    staleTime: 5 * 60 * 1000,
  });

  const isSearching = search.length > 0;

  if (isLoading) return <MovieLoading />;
  if (error) return <div>Failed to load {type}.</div>;

  return (
    <Wrapper>
      <div className="w-full">
        {isSearching ? (
          <SearchResults />
        ) : (
          <MovieSection
            type={type}
            title={type === "movies" ? "Movies" : "TV Series"}
            movies={data}
          />
        )}
      </div>
    </Wrapper>
  );
}

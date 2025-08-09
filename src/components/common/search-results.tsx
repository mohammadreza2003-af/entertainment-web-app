"use client";

import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { searchMovie } from "@/actions/api";
import MovieSection from "./movie-section";
import MovieLoading from "../movie-loading";

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchMovies", query],
    queryFn: () => searchMovie(query),
    enabled: !!query,
  });

  if (!query) return null;

  if (isLoading) return <MovieLoading />;

  if (error) {
    return (
      <div className="text-center text-red-500 py-4">
        Failed to load search results.
      </div>
    );
  }

  return <MovieSection title={`Results for "${query}"`} movies={data || []} />;
}

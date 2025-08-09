import MovieCard from "./movie-card";
import MovieTitle from "./movie-title";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { TypeMovieCard } from "@/types";

type MovieSectionProps = {
  title: string;
  movies: TypeMovieCard[];
  type?: "movies" | "series";
};

export default function MovieSection({
  title,
  movies,
  type,
}: MovieSectionProps) {
  const formatMovieData = (movie: TypeMovieCard) => {
    let typeMovie: "movies" | "series" = "movies";

    if ("media_type" in movie) {
      if (movie.media_type === "tv") typeMovie = "series";
      else if (movie.media_type === "movie") typeMovie = "movies";
    } else {
      if (movie.first_air_date) typeMovie = "series";
      else if (movie.release_date) typeMovie = "movies";
      else if (type) {
        typeMovie = type;
      }
    }

    return {
      id: movie.id,
      title:
        movie.title ||
        movie.original_name ||
        movie.original_title ||
        "Untitled",
      year:
        (movie.release_date
          ? movie.release_date.split("-")[0]
          : movie.first_air_date
          ? movie.first_air_date.split("-")[0]
          : movie.first_release_date
          ? movie.first_release_date.split("-")[0]
          : "") || "",
      rated: movie.vote_average?.toFixed(1) || "N/A",
      typeMovie,
      posterImg: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "/placeholder-image-path.jpg",
    };
  };

  const formattedMovies = movies?.map(formatMovieData);

  if (title === "Trending")
    return (
      <section className="mb-8">
        <MovieTitle title={title} />
        <ScrollArea className="w-full">
          <div className="flex space-x-4">
            {formattedMovies.map((movie, index) => (
              <MovieCard key={index} {...movie} typeCard="wide" />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>
    );

  return (
    <section className="mb-8">
      <MovieTitle title={title} />
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-6">
        {formattedMovies.map((movie, index) => (
          <MovieCard key={index} {...movie} typeCard="normal" />
        ))}
      </div>
    </section>
  );
}

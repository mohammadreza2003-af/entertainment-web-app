import MovieCard from "./movie-card";
import MovieTitle from "./movie-title";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { TypeMovieCard } from "@/types";

type MovieSectionProps = {
  title: string;
  movies: TypeMovieCard[];
};

export default function MovieSection({ title, movies }: MovieSectionProps) {
  console.log(movies);
  const formatMovieData = (movie: TypeMovieCard) => {
    console.log(movie, "movie");
    return {
      title: movie.title || movie.original_name || movie.original_title,
      year:
        (movie?.release_date ? movie.release_date.split("-")[0] : null) ||
        (movie?.first_release_date
          ? movie.first_release_date.split("-")[0]
          : null) ||
        (movie?.first_air_date ? movie.first_air_date.split("-")[0] : null) ||
        "",
      rated: movie.vote_average.toFixed(1),
      type: "movie" as const,
      posterImg: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
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

import { Movie } from "@/types";
import MovieCard from "./movie-card";
import MovieTitle from "./movie-title";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

type MovieSectionProps = {
  title: string;
  movies: Movie[];
};

export default function MovieSection({ title, movies }: MovieSectionProps) {
  if (title === "Trending")
    return (
      <section className="mb-8">
        <MovieTitle title={title} />
        <ScrollArea className="w-full">
          <div className="flex space-x-4">
            {movies.map((movie, index) => (
              <MovieCard
                key={index}
                title={movie.title}
                year={movie.year}
                rated={movie.rated}
                type={movie.type}
                posterImg={movie.posterImg}
                typeCard="wide"
              />
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
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            year={movie.year}
            rated={movie.rated}
            type={movie.type}
            posterImg={movie.posterImg}
            typeCard="normal"
          />
        ))}
      </div>
    </section>
  );
}

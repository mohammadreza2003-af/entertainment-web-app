import MovieSection from "@/components/common/movie-section";
import SearchBox from "@/components/common/search-box";
import Wrapper from "@/components/common/wrapper";
import { Movie } from "@/types";

export default function Home() {
  const test: Movie[] = [
    {
      title: "Green Book",
      year: "2018",
      rated: "PG-13",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
    {
      title: "The 100",
      year: "2020",
      rated: "PG-18",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDdmZGYwOWEtN2FkZC00Y2ExLWJkY2UtNzFlODVlNzc3MGIzXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
    {
      title: "Green Book",
      year: "2018",
      rated: "PG-13",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
    {
      title: "The 100",
      year: "2020",
      rated: "PG-18",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDdmZGYwOWEtN2FkZC00Y2ExLWJkY2UtNzFlODVlNzc3MGIzXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
    {
      title: "Green Book",
      year: "2018",
      rated: "PG-13",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
    {
      title: "The 100",
      year: "2020",
      rated: "PG-18",
      posterImg:
        "https://m.media-amazon.com/images/M/MV5BNDdmZGYwOWEtN2FkZC00Y2ExLWJkY2UtNzFlODVlNzc3MGIzXkEyXkFqcGc@._V1_SX300.jpg",
      type: "movie",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
        <MovieSection title="Trending" movies={test} />
        <MovieSection title="Recommended for you" movies={test} />
      </div>
    </Wrapper>
  );
}

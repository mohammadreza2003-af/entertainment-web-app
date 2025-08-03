import MoiveCard from "@/components/common/movie-card";
import SearchBox from "@/components/common/search-box";
import Wrapper from "@/components/common/wrapper";

export default function Home() {
  const test = [
    {
      Title: "Green Book",
      Year: "2018",
      Rated: "PG-13",
      Released: "16 Nov 2018",
      Runtime: "130 min",
      Genre: "Biography, Comedy, Drama",
      Director: "Peter Farrelly",
      Writer: "Nick Vallelonga, Brian Hayes Currie, Peter Farrelly",
      Actors: "Viggo Mortensen, Mahershala Ali, Linda Cardellini",
      Plot: "A working-class Italian-American bouncer becomes the driver for an African-American classical pianist on a tour of venues through the 1960s American South.",
      Language: "English, Italian, Russian, German",
      Country: "China, Japan, United States",
      Awards: "Won 3 Oscars. 58 wins & 123 nominations total",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDU5YTNmMmItN2QxNy00OGQ0LTg5MTctNzFmYjEzZjcwN2UwXkEyXkFqcGc@._V1_SX300.jpg",
      Ratings: [
        { Source: "Internet Movie Database", Value: "8.2/10" },
        { Source: "Rotten Tomatoes", Value: "77%" },
        { Source: "Metacritic", Value: "69/100" },
      ],
      Metascore: "69",
      imdbRating: "8.2",
      imdbVotes: "646,542",
      imdbID: "tt6966692",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$85,080,171",
      Production: "N/A",
      Website: "N/A",
      Response: "True",
    },
  ];

  return (
    <Wrapper>
      <div className="w-full md:mt-12 mt-28">
        <SearchBox />
        <div>
          {test.map((movie, index) => (
            <MoiveCard
              posterImg={movie.Poster}
              rated={movie.Rated}
              title={movie.Title}
              type={movie.Type}
              typeCard="wide"
              year={movie.Year}
              key={index}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

import API from "@/lib/axios";

export async function getTrandMoives() {
  const res = await API.get("/trending/movie/day");
  const data = await res.data;
  return data.results;
}

export const getRandomMovies = async (type: string) => {
  const totalPages = 50;
  let fixType = "";

  if (type === "movies") {
    fixType = "movie";
  } else {
    fixType = "tv";
  }
  const randomPage = Math.floor(Math.random() * totalPages) + 1;
  const response = await API.get(`/discover/${fixType}`, {
    params: {
      sort_by: "popularity.desc",
      page: randomPage,
      include_adult: false,
    },
  });
  const movies = response.data.results;
  return movies;
};

export const getMovieById = async (id: string, type: string = "movie") => {
  const res = await API.get(`/${type}/${id}`);
  return res.data;
};

export const searchMovie = async (query: string) => {
  if (!query) return [];

  try {
    const res = await API.get("/search/multi", {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
    });
    return res.data.results;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    return [];
  }
};

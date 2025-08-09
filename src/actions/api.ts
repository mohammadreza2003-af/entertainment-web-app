import API from "@/lib/axios";

export async function getTrandMoives() {
  const res = await API.get("/trending/movie/day");
  const data = await res.data;
  return data.results;
}

export const getRandomMovies = async (type: "movies" | "series") => {
  const totalPages = 50;

  const fixType = type === "movies" ? "movie" : "tv";

  const randomPage = Math.floor(Math.random() * totalPages) + 1;

  try {
    const response = await API.get(`/discover/${fixType}`, {
      params: {
        include_adult: false,
        include_null_first_air_dates: false,
        language: "en-US",
        page: randomPage,
        sort_by: "popularity.desc",
      },
    });

    return response.data.results;
  } catch (error) {
    console.error("Error fetching random movies:", error);
    return [];
  }
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

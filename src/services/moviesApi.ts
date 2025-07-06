import { GenreListResponse, MovieListResponse } from "../types/types";
import { moviesGenres } from "./premadeData";
import { apiToken, apiUrl } from "./tmdb";

const headers = {
  accept: "application/json",
  Authorization: `Bearer ${apiToken}`,
};

export async function getMoviesGenres(): Promise<GenreListResponse> {
  //using the api
  // const url = `${apiUrl}genre/movie/list?language=en`;

  // const options = {
  //   method: 'GET',
  //   headers
  // };

  // try {
  //   const response = await fetch(url, options);
  //   if (!response.ok) {
  //     throw new Error(`HTTP error! status: ${response.status}`);
  //   }

  //   const data: GenreListResponse = await response.json();
  //   console.log(data)
  //   return data;
  // } catch (error) {
  //   console.error('Failed to fetch movie genres:', error);
  //   throw error;
  // }
  //data
  const data: GenreListResponse = moviesGenres;
  return data;
}

export async function getPopularMoviesInGenre(
  id: number | undefined,
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}discover/movie?with_genres=${id}&sort_by=vote_average.desc&&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };
  console.log(url)
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getTopRatedMoviesInGenre(
  id: number | undefined,
  page = 1
): Promise<MovieListResponse> {
  if (!id) throw new Error("Genre ID is required");
  const url = `${apiUrl}discover/movie?with_genres=${id}&sort_by=popularity.desc&language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getMustWatchMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/top_rated?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}

export async function getUpcomingMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/upcoming?language=en-US&page=${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}
export async function getPlayingNowMovies(
  page = 1
): Promise<MovieListResponse> {
  const url = `${apiUrl}movie/now_playing?language=en-US&page${page}`;
  const options = {
    method: "GET",
    headers,
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Failed to fetch movie genres:", error);
    throw error;
  }
}


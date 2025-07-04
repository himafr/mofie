import { GenreListResponse, MovieListResponse } from "../types/types";
import { moviesGenres } from "./premadeMovieData";
import { apiToken, apiUrl } from "./tmdb";

const headers={
      accept: 'application/json',
      Authorization: `Bearer ${apiToken}`,
    }

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
const data:GenreListResponse = moviesGenres
  return data
}

export async function getTopRatedMovies(): Promise<MovieListResponse>{
const url = `${apiUrl}movie/top_rated?language=en-US&page=1`;
const options = {
  method: 'GET',
  headers
};


  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch movie genres:', error);
    throw error;
  }
}
export async function getTopRatedMoviesInGenre(id:number): Promise<MovieListResponse>{
const url = `${apiUrl}discover/movie?with_genres=${id||28}&sort_by=popularity.desc&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers
};


  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: MovieListResponse = await response.json();
    console.log(data)
    return data;
  } catch (error) {
    console.error('Failed to fetch movie genres:', error);
    throw error;
  }
}
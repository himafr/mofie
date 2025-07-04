import { useQuery } from "@tanstack/react-query";
import { getMoviesGenres, getTopRatedMoviesInGenre } from "../../services/moviesApi";
import { GenreListResponse, MovieListResponse } from "../../types/types";

export function useMovieGenre(){

    const {data,isLoading,error}=useQuery<GenreListResponse>({
        queryKey:["movieGenre"],
        queryFn:getMoviesGenres
    })
    return {genres:data?.genres??[],isLoading,error}
}

export function useTopRatedMoviesInGenre(id:number){
    
    const {data,isLoading,error}=useQuery<MovieListResponse>({
        queryKey:["topRatedMoviesInGenre",id],
        queryFn:()=> getTopRatedMoviesInGenre(id),
        enabled:!!id
    })
    return {topRated:data?.results??[],isLoading,error} 
}
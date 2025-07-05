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

export function useTopRatedMoviesInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["topRatedMoviesInGenre",id,page],
        queryFn:()=> getTopRatedMoviesInGenre(id,page),
        enabled:!!id,   
        
    })
    return {topRated:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
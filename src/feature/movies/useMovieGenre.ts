import { useQuery } from "@tanstack/react-query";
import { getMoviesGenres, getMustWatchMovies, getPlayingNowMovies, getPopularMoviesInGenre, getTopRatedMoviesInGenre, getUpcomingMovies } from "../../services/moviesApi";
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
export function usePopularMoviesInGenre(id:number|undefined,page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["popularMoviesInGenre",id,page],
        queryFn:()=> getPopularMoviesInGenre(id,page),
        enabled:!!id,   
    })
    return {popular:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}

export function useMustWatchMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["mustWatchMovies",page],
        queryFn:()=> getMustWatchMovies(page),
        enabled:!!page,   
    })
    return {mustWatch:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function useUpcomingMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["upcomingMovies",page],
        queryFn:()=> getUpcomingMovies(page),
        enabled:!!page,   
    })
    return {upcoming:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}
export function usePlayingNowMovies(page:number){
    const {data,isLoading,error,isError}=useQuery<MovieListResponse>({
        queryKey:["playingNowMovies",page],
        queryFn:()=> getPlayingNowMovies(page),
        enabled:!!page,   
    })
    return {playingNow:data?.results??[],total_pages:data?.total_pages??1 ,isLoading,error,isError} 
}

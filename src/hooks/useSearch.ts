import { useQuery } from "@tanstack/react-query"
import { getMovieBySearch } from "../services/moviesApi"
import {  MovieListResponse } from "../types/moviesTypes"
import { ShowListResponse } from "../types/showsTypes"
import { getShowBySearch } from "../services/showsApi"

export function useMovieBySearch(query:string){
    const {data,isLoading,error}=useQuery<MovieListResponse>({
        queryKey:["MoviesSearch",query],
        queryFn:()=>getMovieBySearch(query)
    })
    return {movies:data?.results,isLoading,error}
}
export function useShowBySearch(query:string){
    const {data,isLoading,error}=useQuery<ShowListResponse>({
        queryKey:["MoviesSearch",query],
        queryFn:()=>getShowBySearch(query)
    })
    return {shows:data?.results,isLoading,error}
}

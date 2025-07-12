import { useQuery } from "@tanstack/react-query"
import { getMovieBySearch } from "../services/moviesApi"
import {  MovieListResponse } from "../types/moviesTypes"

export function useMovieBySearch(query:string){
    const {data,isLoading,error}=useQuery<MovieListResponse>({
        queryKey:["personById",query],
        queryFn:()=>getMovieBySearch(query)
    })
    return {movies:data?.results,isLoading,error}
}

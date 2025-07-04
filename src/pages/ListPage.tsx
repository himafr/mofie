import {  useNavigate, useParams, useSearchParams } from "react-router"
import { moviesGenres } from "../services/premadeData";
import { useTopRatedMoviesInGenre } from "../feature/movies/useMovieGenre";
import ImgCardMovieComponent from "../components/shows movies/ImgCardMovieComponent";
import {  useEffect, useState } from "react";
import toast from "react-hot-toast";

function ListPage({isMovie}:{isMovie:boolean}) {
  const navigate=useNavigate()
  const [searchParam]=useSearchParams();
  const param=useParams();
  const [page, setPage] =useState<number>(Number(searchParam.get("page")||1));
  
  const genre=moviesGenres.genres.find(g=>g.name===param.id);
  const {topRated,isLoading,total_pages,error,isError}=useTopRatedMoviesInGenre(genre?.id,page)
 
    function handlePageChang(page:number){
        if(!genre) return;
        if(page<1||page>=total_pages||page>500)return
        searchParam.set("page",String(page));
        setPage(page);
        navigate(`/${isMovie?"movies":"shows"}/${genre.name}?${searchParam.toString()}`)
    }
    useEffect(
      ()=>{
        if(isError)toast.error(`Error ${error?.message}`)
      }
      ,[isError,error])
    if(!genre) return <span>Genre not found</span>
    if(isLoading) return <span>Loading...</span>
    if(error) return<span>{error.name}</span>;
    return (
        <section className="mt-4">
        <p className="text-2xl md:text-4xl font-bold">
          Explore our wide variety of categories
        </p>
        <p className="text-subtitle mt-2">
          Whether you're looking for a comedy to make you laugh, a drama to make
          you think, or a documentary to learn something new
        </p>
        <div className="flex flex-wrap gap-8 justify-center mt-2.5">
           {topRated.map(movie=>  <ImgCardMovieComponent
          category={genre}
          movie={movie}
          key={movie.id}
          />)}
          </div>
          <button disabled={page==total_pages||page>500} onClick={()=>handlePageChang?.(page+1)} >more</button>
          <input  type="number" onBlur={(e)=>handlePageChang(Number(e.target.value))} />
          <button disabled={page==1} onClick={()=>handlePageChang?.(page-1)} >prev</button>
            
          </section>
    )
}

export default ListPage

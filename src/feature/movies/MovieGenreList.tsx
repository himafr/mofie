import MultiImgCardComponent from "../../components/MultiImgCardComponent"
import { useMovieGenre } from "./useMovieGenre"

function MovieGenreList() {
    const {isLoading,genres}=useMovieGenre()
    if(isLoading) return <span>loading......</span>
  return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
           {genres.map(genre=><MultiImgCardComponent  genre={genre} />)}
        </div>
    )
}

export default MovieGenreList

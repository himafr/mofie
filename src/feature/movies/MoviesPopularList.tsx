import TopPopularInGenre from "./TopPopularInGenre"
import { useMovieGenre } from "./useMovieGenre"

function MoviesPopularList() {
    const {isLoading,genres}=useMovieGenre()
    if(isLoading) return <span>loading......</span>
  return (
        <div className="flex overflow-x-auto space-x-4 mt-10">
           {genres.map(genre=><TopPopularInGenre key={genre.id} genre={genre} />)}
        </div>
    )
}

export default MoviesPopularList

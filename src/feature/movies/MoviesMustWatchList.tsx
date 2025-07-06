import { useMustWatchMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";


function MoviesMustWatchList() {
  const {mustWatch,isLoading}=useMustWatchMovies(1);
if(isLoading)return <p>loading...</p>

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {mustWatch.map(movie=><MovieCard
        type="watch"
          movie={movie}
        /> )}
      </div>   
}

export default MoviesMustWatchList;

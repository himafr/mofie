import { useMustWatchMovies, useUpcomingMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";


function MoviesUpcomingList() {
  const {upcoming,isLoading}=useUpcomingMovies(1);
if(isLoading)return <p>loading...</p>

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {upcoming.map(movie=><MovieCard
        type="upcoming"
          movie={movie}
        /> )}
      </div>   
}



export default MoviesUpcomingList

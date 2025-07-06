import {  usePlayingNowMovies } from "./useMovieGenre";
import MovieCard from "../../ui/shared/MovieCard";


function MoviesPlayingNowList() {
  const {playingNow,isLoading}=usePlayingNowMovies(1);
if(isLoading)return <p>loading...</p>

return <div className="flex overflow-x-auto space-x-4 mt-10">
  {playingNow.map(movie=><MovieCard
          movie={movie}
        /> )}
      </div>   
}





export default MoviesPlayingNowList

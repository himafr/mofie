import { imageUrl } from "../../services/tmdb";
import { Movie } from "../../types/types";
function MovieCard({movie,type}:{movie:Movie;type?:string}) {
    
    
      const {poster_path,popularity,vote_average,title,release_date,vote_count} = movie;
       return (
        <div className="w-[295.4px] p-[30px] bg-[#1A1A1A] min-w-[295px] rounded-[10px] border border-border">
          <div className="bg-linear-to-t relative ">
            <img
              className="object-cover rounded-xl border border-border"
              src={imageUrl+poster_path}
              alt=""
            />
          </div>
          {!type&&
         <div className="flex justify-between relative top-2 items-center">
          <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl">
           
                <div className="text-subtitle  text-xs">{title}</div>
              </div>
          <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl">
                <div className="text-subtitle text-xs">{vote_count<1000?vote_count:(vote_count/1000).toFixed(1)+" k"}</div>
            <img src="svg/vote.svg" width={20}/>
              </div>
          
          </div>
        }
        {type=="upcoming"&&
         <div className="flex justify-center relative top-2 items-center ">
          <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
                <div className="text-subtitle text-xs flex gap-2.5 items-center">
                   <img src="svg/clock.svg" width={20}/>
                  {new Date(release_date).toDateString()}</div>
              </div>
          </div>
            }
         {type=="watch"&&
         <div className="flex justify-between relative top-2 items-center">
            <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
            <img src="/svg/trend.svg" width={20}/>
                <div className="text-subtitle text-xs">{popularity}</div>
              </div>
          <div className=" flex justify-between items-end bg-black08 gap-2 py-1.5 px-3.5 rounded-4xl border border-border">
                <div className="text-subtitle text-xs">{(vote_average).toFixed(1)}</div>
            <img src="/svg/vote.svg" width={20}/>
              </div>
    
              </div>  
        }
        </div>
      );
    }
  
export default MovieCard

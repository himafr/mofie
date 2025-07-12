import { useNavigate } from "react-router"
import { backDropUrl } from "../../services/tmdb"
import { Movie } from "../../types/moviesTypes"
import BadgeComponent from "./BadgeComponent"

const SearchResult : React.FC<{movie:Movie}> =({movie})=> {
    const navigate=useNavigate()
    const {title,backdrop_path,overview,vote_average,id}=movie
    return (
        <div className="flex flex-row-reverse md:flex-row justify-around items-center relative pb-10 pt-[30px] gap-4 px-5 md:px-0 cursor-pointer hover:bg-hover" 
        onClick={()=>navigate("/movies/movie/"+id)}>
         <div className="absolute top-0 bg-gradient-to-r from-5% via-25% from-dark via-[#262626] to-dark h-[2px] w-full" />

            <div className="flex  flex-col md:flex-row gap-4">
                <div className="flex justify-around items-center">

                <img src={backDropUrl+backdrop_path} className="w-[172px] rounded-lg object-cover border border-border" />
                </div >
                <div>
                    <h3 className="font-semibold text-lg mt-2 hidden md:block">{title}</h3>
                    <p className="text-subtitle mt-2 hidden md:block">{overview.slice(0,100)}...</p>
                </div>
                <BadgeComponent  children={
                    <div className="flex gap-2 text-sm text-subtitle ">
                        <img src="/svg/star.svg" className="w-6" />
                        {vote_average}

                    </div>
                } className="md:absolute right-0 w-fit border border-border"/>
                    <h3 className="font-semibold text-lg mt-2 md:hidden block">{title}</h3>

            </div>
            
        </div>

    )
}

export default SearchResult

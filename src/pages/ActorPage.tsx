import BadgeComponent from "../ui/shared/BadgeComponent"
import { usePersonById } from "../feature/people/usePeople"
import { useParams } from "react-router"
import { imageUrl } from "../services/tmdb"

function ActorPage() {
  const {id}=useParams<{id:string}>()
  const {error,isLoading,person}=usePersonById(id)
  if(isLoading)return<span>Loading...</span>
  if(error||!person)return<span>error</span>
  const {also_known_as,biography,birthday,deathday,gender,name,place_of_birth,homepage,known_for_department,popularity,profile_path}=person
    return (
    <div className="items-center h-auto md:gap-5 gap-24 lg:h-screen mx-auto my-32 lg:my-0 grid md:grid-cols-2 ">
        <div className="h-96 md:h-full w-full row-span-2  bg-cover bg-no-repeat bg-center  flex justify-center relative " style={{backgroundImage:`url(${imageUrl+profile_path})`}}>
   <div className=" flex justify-center gap-6 p-2 md:p-10 bg-black10/70 rounded-[10px] absolute top-[80%] ">
         <div className="flex justify-around flex-wrap gap-5 ">
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/search.svg" className="w-5 " alt="" />Name</div>
            <a target="_blank" href={`https://www.google.com/search?q=`+name}>{name}</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/location-grey.svg" className="w-5 " alt="" />Place Of Birth</div>
            <a  target="_blank" href={`https://www.google.com/search?q=`+place_of_birth}>{place_of_birth}</a>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Known For Department </div>
            
            <div>{known_for_department}</div>
          </div>
         </div>
         
      </div>
        </div>

         <div className=" flex flex-col gap-6 p-2 md:p-10 bg-black10 rounded-[10px] ">
          <div className="flex justify-around">

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Birthday  </div>
            <div>{new Date(birthday).toDateString()}</div>
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Deathday  </div>
            <div>{deathday?new Date(deathday).toDateString():"Alive"}</div>
          </div>
          </div>

          <div className="flex justify-around">
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/gender.svg" className="w-5 " alt="" />Gender</div>
            <div className="flex flex-wrap gap-2.5">
              {gender===1?<BadgeComponent className="text-sm " children={"Female"} />:<BadgeComponent className="text-sm " children={"Male"} /> }
             
            </div>
          </div>


          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/star.svg"className="w-5 " alt="" /> popularity</div>
            <div className="flex flex-wrap gap-2.5">
              {popularity}
            </div>
          </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/language.svg" className="w-5 " alt="" />Also known As </div>
              <div>{also_known_as.map(n=><BadgeComponent className="inline-block m-1.5 " children={n} />)}</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">biography</div>
            { biography?
                biography.split("\n").map((line,i)=><p key={i}>{line}</p>):<span>No Biography</span>
            }
          </div>
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Home Page</div>
            {     homepage?
                    <a href={homepage} target="_blank">{homepage}</a>:
                    <span>No Home Page</span>         }
          </div>
       
        </div>


      


</div>
    )
}

export default ActorPage

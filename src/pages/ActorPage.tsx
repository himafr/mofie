import BoxRate from "../ui/BoxRate"
import BadgeComponent from "../ui/shared/BadgeComponent"

function ActorPage() {
    return (
        <div>
        <div className=" flex flex-col gap-6 p-2 md:p-10 bg-black10 rounded-[10px]">
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Released Year</div>
            <div>{new Date("2003").getFullYear()}</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/language.svg" className="w-5 " alt="" />Language</div>
            <div className="flex flex-wrap gap-2.5">
              {<BadgeComponent  className="text-sm" children={"English"} />  }
             
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/star.svg" className="w-5 " alt="" />Rating</div>
            <BadgeComponent
              children={
                <div className="flex flex-col gap-2.5">
                 <BoxRate stars={8} h={18} />
                  Vote Average : {(8).toFixed(1)}
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/category.svg" className="w-5 " alt="" /> Genres</div>
            <div className="flex flex-wrap gap-2.5">
              {<BadgeComponent className="text-sm "  children={"genre.name"}  />}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Director</div>
            { <BadgeComponent
            children={
              <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px]" src={"/images/img.jpg"} />
                  <div> 
                    {"person.name"}
                    <div className="text-subtitle">Department {"person.department"}</div>
                    </div>
                </div>
              }
              />
            }
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Music</div>
            {<BadgeComponent
            children={
              <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px]" src={"/images/img.jpg"}/>
                  <div> 
                    {"name"}
                    <div className="text-subtitle">Department {"department"}</div>
                    </div>
                </div>
              }
              />
            }
          </div>
        </div>    
        </div>
    )
}

export default ActorPage

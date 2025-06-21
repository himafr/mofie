import { PlanTypes } from "../types/types"
import PlanCard from "./PlanCard"


function ListPlanComponent() {
    const _plans:PlanTypes[]=[  {
      "title": "Basic Plan",
      "description": "Access a vast library of movies and shows, including the latest releases. Perfect for casual streamers who want quality entertainment without breaking the bank.",
      "price": 9.99,
      "time": "month"
    },
    {
      "title": "Standard Plan",
      "description": "Enjoy everything in the Basic Plan, plus HD streaming on two devices simultaneously — ideal for couples or small families.",
      "price": 14.99,
      "time": "month"
    },
    {
      "title": "Premium Plan",
      "description": "Unlock the full experience with Ultra HD and support for up to four devices. Great for households or binge-watchers who want it all.",
      "price": 19.99,
      "time": "month"
    }]

    return (
     <div className="grid lg:grid-cols-3 place-items-center lg:place-items-start tv:flex tv:flex-wrap tv:justify-around gap-2 mt-10">
         {_plans.map((el,index)=><PlanCard description={el.description} price={el.price} time={el.time} title={el.title} key={index} />)}
        </div>
    )
}

export default ListPlanComponent

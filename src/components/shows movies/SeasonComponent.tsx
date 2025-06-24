import { useState } from "react";
import EpisodeComponent from "./EpisodeComponent";

function SeasonComponent({season}:{season:string}) {
    const [openEpisode, setOPenEpisode] = useState<boolean>(false);
    return (
       <div className="bg-black06 py-3 px-2 md:py-6 md:px-12  rounded-xl max-h-[780px] overflow-y-auto mb-4 border border-border">
              <div className="flex justify-between">
                <div className="text-subtitle flex gap-2.5 text-lg items-center">
                  <p className="text-white font-semibold text-2xl">
                   { season }
                  </p>
                  9 Episodes
                </div>
                <div className="p-3.5 bg-black08 rounded-full">
                 <img
  src="/svg/down-arrow-gray.svg"
  onClick={(e) => {
    setOPenEpisode(val => !val);
    e.currentTarget.classList.toggle("rotate-180");
  }}
  className="relative w-6 cursor-pointer transition-transform duration-300"
/>
                </div>
              </div>
              <div className={`${!openEpisode && "hidden"} mt-6 `}>
                <EpisodeComponent />
                <EpisodeComponent />
                <EpisodeComponent />
                <EpisodeComponent />
                <EpisodeComponent />
                <EpisodeComponent />
                <EpisodeComponent />
              </div>
            </div>
    )
}

export default SeasonComponent

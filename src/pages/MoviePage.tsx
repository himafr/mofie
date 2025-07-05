import { useState } from "react";
import PrimaryButton from "../ui/shared/PrimaryButton";
import HeaderComponent from "../ui/shared/HeaderComponent";
import IconBorder from "../ui/shared/IconBorder";
import ReviewComponent from "../ui/shared/ReviewComponent";
import BadgeComponent from "../ui/shared/BadgeComponent";
import FreeTrail from "../ui/shared/FreeTrail";
import FooterComponent from "../ui/shared/FooterComponent";

function MoviePage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px]">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />

      <div className="w-full h-screen relative mt-7">
        <img
          src="/images/movies1.jpg"
          className="  w-screen h-full object-cover "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark  to-black/15   px-2 md:px-12 h-full ">
          <section className=" flex flex-col   text-center  h-full justify-end">
            <p className="text-3xl md:text-5xl font-bold mb-5">
              Avengers : Endgame
            </p>
            <p className="text-subtitle mt-2 mb-10 hidden md:block">
              With the help of remaining allies, the Avengers must assemble once
              more in order to undo Thanos's actions and undo the chaos to the
              universe, no matter what consequences may be in store, and no
              matter who they face... Avenge the fallen.
            </p>

            <div className="flex flex-col  md:flex-row justify-center gap-3 items-center">
              <PrimaryButton
                className="items-center h-12 "
                icon={
                  <img
                    className="my-3 "
                    width={24}
                    src="/svg/play.svg"
                    alt="sh"
                  />
                }
                title="Play Now"
              />
              <div className="flex gap-3  ">
                <IconBorder src="/svg/plus.svg" />
                <IconBorder src="/svg/like.svg" />
                <IconBorder src="/svg/audio.svg" />
              </div>
            </div>
          </section>
        </div>
      </div>

      <section className="block md:flex gap-5  py-10 items-start ">
        <div className="md:w-[70%]">
          {/* description */}
          <div className="p-10 bg-black10 rounded-[10px] mb-5">
            <div className="text-subtitle mb-5">description</div>A fiery young
            man clashes with an unflinching forest officer in a south Indian
            village where spirituality, fate and folklore rule the lands.
          </div>

          {/* Cast */}
          <div className="p-2 md:p-10 bg-black10 rounded-[10px] mb-5">
            <div className="text-subtitle mb-5">Cast</div>
            <div className="flex overflow-x-auto space-x-4">
              {[...Array(15)].map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square bg-gray-700 rounded-lg animate-pulse min-w-20"
                />
              ))}
            </div>
          </div>

          {/* Reviews */}
          <div className="p-2 md:p-10 bg-black10 rounded-[10px] mb-8">
            <div className="flex justify-between mb-5">
              <div className="text-subtitle ">Reviews</div>
              <BadgeComponent children={
                <div className="flex gap-2.5 text-sm items-center">
                  <img src="/svg/plus.svg" className="w-6"/>
                  Add Your Review
                </div>
              } />
            </div>
            <div className="flex overflow-x-auto space-x-4 ">
              <ReviewComponent />
              <ReviewComponent />
              <ReviewComponent />
            </div>
          </div>
        </div>

        {/* Wrapper Grid */}
        <div className=" flex flex-col gap-6 p-2 md:p-10 bg-black10 rounded-[10px]">
          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/calendar.svg" className="w-5 " alt="" />Released Year</div>
            <div>2024</div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/language.svg" className="w-5 " alt="" />Language</div>
            <div className="flex flex-wrap gap-2.5">
              <BadgeComponent className="text-sm" children="English" />
              <BadgeComponent className="text-sm" children="Arabic" />
              <BadgeComponent className="text-sm" children="Telegu" />
              <BadgeComponent className="text-sm" children="Hindi" />
              <BadgeComponent className="text-sm" children="Kannada" />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/star.svg" className="w-5 " alt="" />Rating</div>
            <BadgeComponent
              children={
                <div>
                  <div> IMDB</div>
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle flex gap-1"><img src="/svg/category.svg" className="w-5 " alt="" /> Genres</div>
            <div className="flex flex-wrap gap-2.5">
              <BadgeComponent className="text-sm" children="Action" />
              <BadgeComponent className="text-sm" children="Adventure" />
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Director</div>
            <BadgeComponent
              children={
                <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px]" src="/images/movies.jpeg" alt="" />
                  <div> 
                    IMDB
                    <div className="text-subtitle">from Egypt</div>
                    </div>
                </div>
              }
            />
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="text-subtitle">Music</div>
            <BadgeComponent
               children={
                <div className="flex gap-2.5">
                    <img className="w-12 h-[50px] object-cover rounded-[6px]" src="/images/movies.jpeg" alt="" />
                  <div> 
                    IMDB
                    <div className="text-subtitle">from Egypt</div>
                    </div>
                </div>
              }
            />
          </div>
        </div>
      </section>

    <FreeTrail />
<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />

    </div>
  );
}

export default MoviePage;

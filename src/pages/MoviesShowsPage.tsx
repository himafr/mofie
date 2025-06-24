import HeaderComponent from "../components/shared/HeaderComponent";
import ListComponents from "../components/ListComponents";
import PrimaryButton from "../components/shared/PrimaryButton";
import { useState } from "react";
import IconBorder from "../components/shared/IconBorder";
import ListImgCardComponent from "../components/shows movies/ListImgCardComponent";
import { Category, ShowType } from "../types/types";
import FreeTrail from "../components/shared/FreeTrail";
import { useNavigate } from "react-router";
import FooterComponent from "../components/shared/FooterComponent";

function MoviesShowsPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navigate =useNavigate()

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px]">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />

      <div className="w-full h-screen relative mt-7">
        <img
          src="images/movies.jpeg"
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
                    src="svg/play.svg"
                    alt="sh"
                  />
                }
                title="Play Now"
              />
              <div className="flex gap-3  ">
                <IconBorder src="svg/plus.svg" />
                <IconBorder src="svg/like.svg" />
                <IconBorder src="svg/audio.svg" />
              </div>
            </div>
            <div className="w-full  justify-between items-end my-5  hidden md:flex">
              <IconBorder src="svg/left-arrow.svg" />
              <div>photos</div>
              <IconBorder src="svg/right-arrow.svg" />
            </div>
          </section>
        </div>
      </div>

      {/* movies */}

{/* Our Genres */}

      <section className="mt-[15vh]" id="movies_genres">
        <PrimaryButton title="Movies" className="mb-5"  onClick={()=>{navigate("movie/12")} }/>
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Our Genres</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListComponents />
      </section>

          {/* Popular Top 10 In Genres */}
      <section className="mt-[10vh]" id="movies_popular">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Popular Top 10 In Genres</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListComponents top={true} />
      </section>


          {/* Trending Now */}

      <section className="mt-[10vh]" id="movies_trending">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Trending Now</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Movie} category={Category.Trending} />
      </section>

          {/* New Releases */}
      <section className="mt-[10vh]" id="movies_release">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">New Releases</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Movie} category={Category.Releases} />
      </section>

          {/* Must - Watch Movies */}
      <section className="mt-[10vh]" id="movies_watch">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Must - Watch Movies</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Movie} category={Category.Watch} />
      </section>
{/* Shows */}
{/* Our Genres */}

      <section className="mt-[15vh]" id="series_genres">
        <PrimaryButton title="Shows" className="mb-5" onClick={()=>{navigate("series/12")}}/>
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Our Genres</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListComponents />
      </section>
          {/* Popular Top 10 In Genres */}

      <section className="mt-[10vh]" id="series_popular">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Popular Top 10 In Genres</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListComponents top={true} />
      </section>

          {/* Trending Now */}
      <section className="mt-[10vh]" id="series_trending">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Trending Shows Now</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Show} category={Category.Trending} />
      </section>
          {/* New Releases */}
      <section className="mt-[10vh]" id="series_release">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">New Released Shows</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Show} category={Category.Releases} />
      </section>
          {/* Must - Watch Movies */}
      <section className="mt-[10vh]" id="series_watch">
        <div className="flex justify-between items-center">
          <p className="text-2xl md:text-4xl font-bold">Must - Watch Shows</p>
          <div className="hidden md:flex justify-between items-end bg-[#0F0F0F] gap-4 p-3 rounded-xl">
            <IconBorder src="svg/left-arrow.svg" />
            <div>photos</div>
            <IconBorder src="svg/right-arrow.svg" />
          </div>
        </div>
        <ListImgCardComponent type={ShowType.Show} category={Category.Watch} />
      </section>






  <FreeTrail />

<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />


    </div>
  );
}

export default MoviesShowsPage;

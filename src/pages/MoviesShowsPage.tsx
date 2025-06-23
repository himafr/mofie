import HeaderComponent from "../components/shared/HeaderComponent";
import ListComponents from "../components/ListComponents";
import PrimaryButton from "../components/shared/PrimaryButton";
import { useState } from "react";
import IconBorder from "../components/shared/IconBorder";
import ListImgCardComponent from "../components/shows movies/ListImgCardComponent";
import { Category, ShowType } from "../types/types";

function MoviesShowsPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

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
                classNme="items-center h-12 "
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

      <section className="mt-[15vh]">
        <PrimaryButton title="Movies" classNme="mb-5" />
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
      <section className="mt-[10vh]">
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

      <section className="mt-[10vh]">
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
      <section className="mt-[10vh]">
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
      <section className="mt-[10vh]">
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

      <section className="mt-[15vh]">
        <PrimaryButton title="Shows" classNme="mb-5" />
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

      <section className="mt-[10vh]">
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
      <section className="mt-[10vh]">
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
      <section className="mt-[10vh]">
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
      <section className="mt-[10vh]">
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






      <section className="my-[10vh] relative w-full h-40 md:h-60  rounded-xl overflow-hidden">
        <img
          src="images/movies.webp"
          alt="Mofie device support"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black to-primary/50  flex flex-col justify-center px-2 md:px-12">
          <div className="flex justify-between md:pr-12  flex-row items-center  gap-8 ">
            <div>
              <p className="text-xl md:text-4xl font-bold">
                Start your free trial today!
              </p>
              <p className="text-subtitle mt-2 text-[10px]">
                This is a clear and concise call to action that encourages users
                to sign up for a free trial of Mofie.
              </p>
            </div>
            <div>
              <PrimaryButton
                title="Start a Free Trail"
                classNme="text-[10px] w-27 md:text-base md:w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MoviesShowsPage;

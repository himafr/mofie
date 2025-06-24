import BadgeComponent from "../shared/BadgeComponent"

function EpisodeComponent() {
    return (
        <div className="flex flex-row-reverse md:flex-row justify-around items-center relative pb-10 pt-[30px] gap-4 px-5 md:px-0 ">
         <div className="absolute top-0 bg-gradient-to-r from-5% via-25% from-dark via-[#262626] to-dark h-[2px] w-full" />

            <div className="font-semibold text-2xl text-subtitle hidden md:block " >01</div>
            <div className="flex  flex-col md:flex-row gap-4">
                <div className="flex justify-around items-center">

                <img src="/images/movies.jpeg" className="w-[172px] rounded-lg object-cover border border-border" />
            <div className="font-semibold text-2xl text-subtitle md:hidden" >01</div>
                </div >
                <div>
                    <h3 className="font-semibold text-lg mt-2 hidden md:block">Chapter One : The Vanishing of Will Byers</h3>
                    <p className="text-subtitle mt-5 hidden md:block">On his way from a friend’s house, young Will sees something terrifying . Nearby, a sinister secret lurks in the depths of a government lab.</p>
                </div>
                <BadgeComponent  children={
                    <div className="flex gap-2 text-sm text-subtitle ">
                        <img src="/svg/clock.svg" className="w-6" />
                        49 min

                    </div>
                } className="md:absolute right-0 w-fit border border-border"/>
                    <h3 className="font-semibold text-lg mt-2 md:hidden block">Chapter One : The Vanishing of Will Byers</h3>

            </div>
            
        </div>
    )
}

export default EpisodeComponent

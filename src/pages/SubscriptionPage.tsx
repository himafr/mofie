import { useState } from "react";
import HeaderComponent from "../components/shared/HeaderComponent";
import ListPlanComponent from "../components/ListPlanComponent";
import FreeTrail from "../components/shared/FreeTrail";
import PricingTable from "../components/subscription/PricingTable";
import PricingTablePhone from "../components/subscription/PricingTablePhone";
import FooterComponent from "../components/shared/FooterComponent";

function SubscriptionPage() {
  const [navOpen, setNavOpen] = useState<boolean>(false);

  return (
    <div className="px-2 md:px-20 text-[14px] md:text-[16px] ">
      <HeaderComponent openNav={setNavOpen} open={navOpen} />


    <section className="mt-[10vh]" id="plan">
        <p className="text-2xl md:text-4xl font-bold">
          Choose the plan that's right for you
        </p>
        <p className="text-subtitle mt-2">
          Join mofie and select from our flexible subscription options tailored
          to suit your viewing preferences. Get ready for non-stop
          entertainment!
        </p>
        <ListPlanComponent />
      </section>

        <section className="mt-[10vh]" id="features">
        <p className="text-2xl md:text-4xl font-bold">
        Compare our plans and find the right one for you
        </p>
        <p className="text-subtitle mt-2">
        Mofie offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you.
        </p>
        <div className="md:block hidden">
        <PricingTable />
        </div>
        <div className="md:hidden block ">
        <PricingTablePhone />
        </div>
      </section>



<FreeTrail />
<FooterComponent className="-mx-2 md:-mx-20 px-2 md:px-20" />

    </div>
  );
}




export default SubscriptionPage

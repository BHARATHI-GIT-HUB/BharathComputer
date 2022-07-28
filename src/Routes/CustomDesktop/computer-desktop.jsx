import React from "react";
import CardLiquidDamage from "../../Components/Card/card-general";
import GamingCpu1 from "../../assets/Images/GamingCpu-1.jpg";
import GamingCpu2 from "../../assets/Images/GamingCpu-2.jpg";

const ComputerDesktop = () => {
  return (
    <div className=" flex justify-center items-center flex-col  lg:gap-[3rem]">
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[70vh] object-cover"
          src={GamingCpu1}
        />
        <div className=" absolute !font-OpenSnas  text-white bg-opacity  top-0 text-center w-full h-full flex flex-col justify-center ">
          <h1 className="text-secondayheading md:text-primaryheading md:font-normal">
            Custom Built Computers BharathComputer{" "}
          </h1>
        </div>
      </div>
      <div className="secondarypara text-center   px-[3rem] md:w-[80%] md:!text-start flex flex-col my-5 lg:my-6 md:gap-3">
        <p>
          Whether you’re looking for a gaming powerhouse or a flexible family
          computer that can be upgraded for years to come, we can help you build
          exactly the machine you needed.
        </p>
        <p>
          Can create a custom-built solution that meets your needs. From hard
          drive size to processor speed, everything can be tailored to your
          exact specifications. And because we’re locally owned and operated
          right here in BharathComputer, you’ll work individually with real
          people who will take the time to understand what you need and exceed
          your expectations.
        </p>
      </div>
      <CardLiquidDamage
        h1="What Makes BharathComputer Custom PCs So Special"
        src={GamingCpu2}
        p={
          "When you order a custom-built desktop PC from Us, you’ll enjoy:Our trained technicians will build your new computer in-house, with premium parts that we know and trust. We’re so confident in the quality of our machines that we offer a One-year warranty on every computer sold."
        }
      />
    </div>
  );
};

export default ComputerDesktop;

import React from "react";
import CardLiquidDamage from "../../Components/Card/card-general";
import ChipService1 from "../../assets/Images/ChipImage-1.jpg";
import ChipService2 from "../../assets/Images/ChipImage-2.jpg";

const ChipService = () => {
  return (
    <div className=" flex justify-center items-center flex-col gap-[3rem]">
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[70vh] object-cover "
          src={ChipService1}
        />
        <div className=" absolute !font-OpenSnas  text-white bg-opacity  top-0 text-center gap-[.5vh] w-full h-full flex flex-col justify-center Md:gap-[1vh]">
          <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
            Chip level Service From BharathComputer{" "}
          </h1>
        </div>
      </div>

      <CardLiquidDamage
        h1="Motherboard Chip Level Service"
        src={ChipService2}
        p={
          "We offer all kinds of Laptop/Desktop chip level services. We have the expertise in all motherboard chip level services. The estimation will be provided after analysing the problem.Our company has set benchmark by offering Laptop Chip Level Service to the clients. Laptop Chip Level Service is thoroughly tested and verified under various parameters by the our team who have vast knowledge in this field "
        }
      />
    </div>
  );
};

export default ChipService;

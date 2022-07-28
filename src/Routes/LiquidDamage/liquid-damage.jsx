import React from "react";
import CardLiquidDamage from "../../Components/Card/card-general";
import KeyBoardWatered from "../../assets/Images/Water-Damage-2.jpeg";

const LiquidDamage = () => {
  return (
    <div>
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[70vh] object-cover"
          src={KeyBoardWatered}
          alt=""
        />
        <div className=" absolute !font-OpenSnas  text-white bg-opacity top-0 text-center gap-[.5vh] w-full h-full flex flex-col justify-center Md:gap-[1vh]">
          <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
            #1 Liquid Damage Repair Service in BharathComputers
          </h1>
        </div>
      </div>
      <CardLiquidDamage
        h1="Liquid Damage and Repair"
        p=" Computer work is often accompanied by water bottles, coffee cups,
            and other sources of liquid. If you have had an accidental spill on
            or around your laptop, desktop, or iPhone, bring your device to the
            liquid damage repair service in BharathComputer, and we’ll do our best to
            repair the damage. Make sure to turn your device off and be sure not
            power it back on until our technicians can take a look
            and assess the damage. Remember, the more it is left on after a
            spill, the worse the corrosion damage can get!"
        src={KeyBoardWatered}
      />
    </div>
  );
};

export default LiquidDamage;

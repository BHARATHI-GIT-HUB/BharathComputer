import React from "react";
import ComputerRepairImg from "../../assets/Images/Computer-Repair.jpg";
import CardComputerRepair from "../../Components/Card/card-computer-repair";

export default function ComputerRepair() {
  return (
    <div>
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[70vh] object-cover"
          src={ComputerRepairImg}
          alt=""
        />
        <div className=" absolute !font-OpenSnas  text-white bg-opacity top-0 text-center gap-[.5vh] w-full h-full flex flex-col justify-center Md:gap-[1vh]">
          <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
            Our Excellent Windows Services
          </h1>
          <p className=" text-secondarypara px-[6vw] md:text-primarypara md:px-[20vw] md:leading-2 ">
            Bring in your laptop or desktop and our expert technicians will
            diagnose what’s wrong with the device and offer high-quality, quick
            repair work to get your device back up and running.
          </p>
        </div>
      </div>
      <CardComputerRepair />
    </div>
  );
}

import React from "react";
import CardDataRecovery from "../../Components/Card/card-data-recovery";
import HardDisc from "../../assets/Images/Data-Recovery.jpg";
import FloppyDisc from "../../assets/Icons/FloppyDisc.jsx";

const DataRecovery = () => {
  return (
    <div className="flex flex-col gap-10">
      {" "}
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[80vh] object-cover"
          src={HardDisc}
          alt=""
        />
        <div className=" absolute !font-OpenSnas  text-white bg-opacity top-0 text-center gap-[.5vh] w-full h-full flex flex-col justify-center Md:gap-[1vh]">
          <h1 className="text-secondaryheadingeading md:text-primaryheading md:font-normal">
            Data Recovery Service in BharathComputer
          </h1>
          <p className=" text-secondarypara px-[6vw] md:text-primarypara md:px-[20vw] md:leading-2 ">
            OUR TEAM WILL HELP YOU RECOVER THE CRITICAL DATA THAT OTHERS CAN’T
            REACH!
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col px-4 gap-[3rem] md:flex-row md:gap-[7rem] md:px-2">
        <FloppyDisc />
        <p className=" md:w-[60%] md:text-[1.2rem] md:!text-start  text-gray-500 text-center">
          Your computer is at the heart of your business or home and if you’ve
          ever experienced data loss on it, you know how it can grind things to
          a halt. Your beloved family pictures or business accounts ledger
          suddenly go missing or become inaccessable. These are stressful,
          upsetting situations to face but you’re not alone. We’re here to help.
          <br />
          <br />
          Our data recovery service in BharathComputer involves salvaging data
          from inaccessible, formatted, damaged, failed, or wrecked primary
          storage media where data cannot be accessed normally. Our technicians
          have the knowledge, experience, and software to recover a wide range
          of any failed mass storage device, including: hard drive, SSD drive,
          fusion drive, USB flash drive (thumb drive), compact flash, SD card,
          and others
          <br />
          <br />
          All locally based Apple , are trained and skilled in a number of data
          recovery methods and will employ the appropriate approach to your
          unique situation, in a timely timeframe to get you up and running
          straight away.
        </p>
      </div>
      <CardDataRecovery />
    </div>
  );
};

export default DataRecovery;

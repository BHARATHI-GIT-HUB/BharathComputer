import React from "react";

import { Card } from "react-bootstrap";
const MakeAppoinment = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-[3rem] md:my-[5rem] gap-[2rem] text-center sm:gap-[1.6rem] lg:gap-[4rem] px-[3rem] sm:p-0">
      <h1 className="lg:text-[2.5rem] text-secondaryheading ">
        To make an appointment, contact our store:
      </h1>
      <Card className="flex flex-row justify-between items-center text-center   p-[2rem] lg:p-0  gap-[2rem]   lg:gap-[.8rem] md:p-[2rem]  shadow-2xl rounded-xl  ">
        <div className=" flex flex-col items-center justify-center gap-[2rem] lg:gap-[1.5rem] lg:p-[2rem] ">
          <h1 className="text-secondaryheading lg:text-[2.5rem]   break-words  ">
            TamilNadu
          </h1>
          <p className="text-secondarypara flex flex-col gap-1 md:text-[1.2rem] text-center w-[15rem]  md:w-[20rem]  ">
            No 6, Ramakrishna Nagar, Kovilpathagai, Avadi, Chennai. 600062{" "}
            <span className=" text-green">+91 8056965276</span>
          </p>
          <p className="text-secondarypara  md:text-[1.2rem] text-center w-[15rem] md:w-[28rem] ">
            We are located on theNazareth College of Arts and Science,
            Kannadapalayam Main Road, Chennai, Tamil Nadu
          </p>
        </div>
      </Card>
    </div>
  );
};

export default MakeAppoinment;

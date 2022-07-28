import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const CardAboutus = (props) => {
  return (
    <div className=" flex justify-center items-center my-[3rem] lg:my-[4rem] px-[1rem] sm:px-0  ">
      <Card className="flex flex-row justify-between items-center text-center  lg:flex-col p-[2rem] lg:p-0  gap-[2rem] md:w-[40rem]  sm:w-[27rem] lg:w-[64.5rem]   lg:gap-[1rem] md:p-[4rem]  shadow-2xl rounded-xl  ">
        <div className=" flex flex-col items-center justify-center gap-[2rem] lg:gap-[2rem] lg:my-9 ">
          <h1 className="text-secondaryheading lg:text-primaryheading lg:pl-9   break-words  ">
            {props.h1}{" "}
          </h1>
          <p className="text-secondarypara  md:text-[1.2rem] text-center  lg:px-9 ">
            {props.p}
          </p>
          <Link className=" secondary-btn   " to={"/Make-Appoinment"}>
            Make Appoinment{" "}
          </Link>{" "}
        </div>
      </Card>
    </div>
  );
};

export default CardAboutus;

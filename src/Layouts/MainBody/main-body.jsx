import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Components/Card/card";
import Carousel from "../../Components/Carousel/carousel";
import WindowsPC from "../../assets/Images/Windows-PC-Repair.jpg";
import DoubleQuote from "../../assets/Icons/DoubleQuote";
import Header from "../Header/header";
const MainBody = () => {
  return (
    <div className="">
      <Carousel />
      <div className="font-Inter">
        <div className="mt-[2.5rem] md:mt-[8vh] text-center ">
          <h1 className=" text-secondaryheading font-bold mb-[.5rem] md:mb-[1vh] md:text-primaryheading">
            Get Your Repair Started
          </h1>
          <p className="px-[5%] text-secondarypara font-normal md:!text-primarypara md:font-medium capitalize">
            We are the engrowing full-service Provider. We service personal
            Computer, laptop.
          </p>
        </div>
        <div className="mt-[1rem] md:mt-[3vh]  flex justify-center items-center ">
          <div className="relative">
            <img
              className="h-[18rem] sm:h-full w-full object-cover "
              src={WindowsPC}
              alt=""
            />
            <div className=" absolute top-[1.5rem] md:top-[3rem] text-center text-white flex flex-col justify-center items-center gap-2 md:gap-4  ">
              <h1 className=" text-secondaryheading md:text-primaryheading ">
                Windows & Pc Repairs
              </h1>
              <p className=" text-[.8rem] md:text-[1.4rem]  !text-center   px-[1rem] sm:px[0rem] lg:px-[10rem]  ">
                Bring in your laptop or desktop computer and our expert
                technicians will offer quick and high-quality services to get
                your device back up and Running
              </p>
              <Link
                className=" text-secondarypara md:text-[1.2rem] hover:text-white"
                to={"/Computer-Repair"}
              >
                Learn more
              </Link>
            </div>
          </div>
        </div>
        <div className="h-[60vh] mt-[4vh] font-Inter flex flex-col justify-center item-center text-center capitalize bg-sandle md:gap-9 md:min-h-[100vh]">
          <h1 className="text-secondaryheading  md:text-primaryheading  ">
            Our job is to serve.
          </h1>
          <h6 className="px-[5%] leading-[0.75cm] text-secondarypara  md:px-[12vw] md:text-[1.4rem]  md:!leading-[1.3cm]">
            <span className="Double-Quote-Start">
              <DoubleQuote />
            </span>
            Repairing your computer yourself can be costly and confusing. We are
            here to help you get a fair price with a quick turn around. We offer
            onsite computer repair, remote assistance, and carry-in services at
            our BharathComputer Computer Repair Shop.
            <span className="Double-Quote-End">
              <DoubleQuote />
            </span>
          </h6>
          <span className="text-secondarypara md:text-primarypara md:font-extralight font-san">
            -BH
          </span>
        </div>
        <div className="px-2 sm:p-0">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default MainBody;

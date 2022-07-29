import React from "react";
import Windows10 from "../../../assets/Icons/Windows10";
import Cog from "../../../assets/Icons/Cog";
import { Link } from "react-router-dom";
import HardDisc from "../../../assets/Images/Data-Recovery.jpg";

const WindowsRepair = () => {
  return (
    <div className=" bg-blue text-white pt-[5rem] ">
      <div className=" flex  justify-center items-center flex-col text-center gap-[2rem] lg:gap-[3rem] my-[1rem] lg:my-[2rem]  ">
        <Windows10 />
        <h1 className="text-secondaryheading lg:text-primaryheading px-[.5rem] lg:w-[60rem]">
          Windows Repair and Installation in BharathComputer
        </h1>
        <p className=" text-secondarypara lg:text-primarypara px-[2rem] sm:px-[3rem] lg:px-[5rem]">
          Whether you are a business or an individual looking to fix your
          Windows computer, you can trust us to take care of all your needs. We
          have years of experience dealing with windows repair and installation
          in BharathComputer. We understand that computers make our lives and
          business much easier; when they are not working the way they are
          supposed to, it can become a hassle. Our aim is to offer outstanding
          service to troubleshoot and repair your computer.
        </p>
        <p className="lg:text-primarypara">
          Below are some of the services we provide:
        </p>
        <div className="flex justify-center items-start flex-col  md:flex-row lg:gap-12">
          <ul className=" flex !items-start justify-start  flex-col gap-1 ">
            <li className="flex items-center justify-start">
              <Cog />
              Install Operating System
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Internet Connection Problems
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Driver Installation
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Overheating Repair
            </li>
          </ul>

          <ul className=" flex !items-start  flex-col gap-1 ">
            <li className="flex items-center justify-start">
              <Cog />
              Battery Replacements{" "}
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Keyboard Replacement{" "}
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              System Backup and Restore{" "}
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Data Recovery
            </li>
          </ul>
          <ul className=" flex !items-start  flex-col gap-1 ">
            <li className="flex items-center justify-start">
              <Cog />
              Motherboard Repair
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Internet Connection Problems
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Remove Temp Files
            </li>
            <li className="flex items-center justify-start">
              <Cog />
              Cloud Backup
            </li>
          </ul>
        </div>
        <Link to={"/Make-Appoinment "} className="White-btn">
          Make Appoinment
        </Link>
      </div>
      <div className="  p-[1rem] md:p-[2rem] bg-white shadow-2xl">
        <div className="w-full  relative">
          <img
            className="w-full h-[35rem]  md:h-[40rem] object-cover rounded-lg"
            src={HardDisc}
            alt=""
          />
          <div className=" absolute !font-OpenSnas  text-white bg-opacity top-0 text-center w-full h-full flex flex-col justify-center gap-3 lg:gap-[3rem] rounded-lg px-[1rem] lg:px-[2rem]">
            <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
              Data Recovery BharathComputer Data & Hard Drive Recovery for
              Computers and Laptops{" "}
            </h1>
            <p className="text-secondaryypara lg:text-primarypara lg:px-[6rem]">
              Our Apple Certified Technicians have the knowledge and experience
              to recover data from a wide range of any failed mass storage
              device – hard drives, SSD drives, USB flash drives , compact flash
              cards, SD cards, and others. When all other attempts to recover
              your data in-house have been exhausted, we can recommend
              additional recovery options with DriveSavers. They are an external
              partner and align nicely with our core values of honesty and
              integrity.{" "}
            </p>
            <Link
              to={"/Make-Appoinment "}
              className=" hover:text-blue text-secondarypara lg:text-primarypara  delay-75 "
            >
              Make Appoinment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindowsRepair;

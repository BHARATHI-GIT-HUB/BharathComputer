import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Alert from "../../assets/Icons/Alert";
import Upload from "../../assets/Icons/Upload";
import Ask from "../../assets/Icons/Ask";

const CardDataRecovery = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[4rem] sm:m-[3rem]  my-[2rem]  px-[2.1rem] ">
      <div className="grid grid-cols-1 lg:grid-cols-3  justify-center items-center text-center gap-[2rem] md:gap-[2.5rem]  ">
        <Link to={"/Make-Appoiment"} className="h-full hover:text-blue">
          <Card className=" flex justify-center items-center  md:gap-[3rem] gap-[1.3rem]  p-3   lg:h-[35rem]    md:p-[3rem] shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110 ">
            <Upload />
            <div className="md:gap-7 flex flex-col">
              <h3 className=" text-secondarypara md:text-[2.2rem] text-green">
                BACK UP
              </h3>
              <p className="text-[.8rem] md:text-[1em]  lg:w-none overflow-auto ">
                Regularly and continually backing up your computer remains the
                best proactive strategy for ensuring you will be always able to
                recover critical data. Over time, every computer hard drive will
                eventually fail; the typical lifespan of a hard drive is only
                3-5 years and they are especially sensitive to shock, moisture,
                and heat/cold.
              </p>
            </div>
          </Card>
        </Link>
        <Link to={"/Make-Appoinment"} className="h-full hover:text-blue">
          <Card className=" flex justify-center items-center md:gap-[2.4rem] gap-[1.3rem]  p-3  lg:h-[35rem] md:px-[3rem]  shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110 ">
            <Ask />
            <h3 className="text-secondarypara md:text-[2.2rem] text-blue break-words">
              CONSULTATION
            </h3>
            <p className=" text-[.8rem] md:text-[1em] overflow-auto ">
              While backup software now comes bundled with the operating systems
              for Macs and PCs, our Apple technicians and experts for data
              recovery services in BharathComputer can also recommend custom
              third-party options for our clients with particularly sensitive
              data or needs. We are happy to assess your unique circumstances
              and offer consultation on best practices to avoid unrecoverable
            </p>
          </Card>
        </Link>
        <Link to={"/Make-Appoinment"} className="h-full hover:text-blue">
          <Card className=" flex justify-center items-center md:gap-[2rem] gap-[1.3rem] p-3 lg:h-[35rem] md:p-5 shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110">
            <Alert />
            <h3 className="text-secondarypara md:text-[2.2rem] text-green">
              BUYER BEWARE!
            </h3>
            <p className=" text-[.8rem] md:text-[1em] overflow-auto ">
              Some data recovery companies offer a handful of free services,
              providing incomplete or inaccurate diagnostic results and often
              ending with failed recovery. At our data recovery services in
              BharathComputer, we are available seven days a week to talk and
              consult with you. We perform work in our convenient
              BharathComputer area locations. In addition, we perform thorough
              diagnostics quickly and promptly provide you with data recovery
              options for your device.
            </p>
          </Card>
        </Link>
      </div>
      <Link className="secondary-btn  " to={"/Make-Appoinment"}>
        Make Appoinment
      </Link>
    </div>
  );
};

export default CardDataRecovery;

import React from "react";
import Mail from "../../assets/Icons/Mail";
import FaceBook from "../../assets/Icons/Facebook";
import Twitter from "../../assets/Icons/Twitter";
import Insta from "../../assets/Icons/Insta";
import BcLogo from "../../assets/Images/Bc-Logo.png";

const Footer = () => {
  return (
    <div className="bg-blue overflow-hidden ">
      <div className="grid grid-cols-1 items-center justify-center   !h-[40rem]  md:!h-[22rem]  text-white  md:grid-cols-2 sm:gap-[2rem] px-3 sm:px-0  ">
        <div className=" flex flex-col  justify- lg:justify-self-end   text-start md:!text-start gap-[1.5rem] lg:gap-[2rem] lg:pl-[7rem]    ">
          <div className=" flex items-center flex-col md:flex-row  ">
            <img src={BcLogo} alt="" className=" h-16 object-contain " />
          </div>
          <p className=" text-center md:!text-start px-22  ">
            This Website was made with React,Tailwind css, Bootstrap, and with
            Passion, Feel Free To Give Your FeedBack About About This Website
            And If Your Looking Forward a website For Your Company:
          </p>
          <a
            href="mailto:sbharathi261@gmail.com"
            className="White-btn self-center md:self-start"
          >
            Contact
          </a>
        </div>

        <div className=" flex flex-col justify-center md:justify-self-start !items-center md:!items-start gap-[1.5rem]  lg:gap-[2rem] lg:px-[3rem]  ">
          <h2 className=" md:text-[1.8rem] text-green ">Contact Detail</h2>
          <div className=" flex flex-col  items-center md:items-start gap-[1.5rem] md:gap-3">
            <div className="grid grid-flow-row md:grid-flow-col  md:gap-12 ">
              <h3 className=" md:text-[1.5rem] justify-self-center sm:justify-self-none">
                Address
              </h3>
              <p className=" !text-center sm:!text-start justify-self-center sm:!justify-self-start   ">
                No 6, Ramakrishna Nagar, Kovilpathagai, Avadi, Chennai-600062.{" "}
              </p>
            </div>
            <div className=" grid grid-flow-row md:grid-flow-col gap-2 md:!gap-[4.5rem] ">
              <h3 className="md:text-[1.5rem] !justify-self-center  sm:justify-self-start ">
                Phone
              </h3>
              <p className=" "> (+91) 8056965276</p>
            </div>
            <div className="grid grid-flow-row md:grid-flow-col md:gap-20">
              <h3 className="md:text-[1.5rem]  !justify-self-center sm:justify-self-start">
                Email
              </h3>
              <p className=" break-all">
                {" "}
                <a href="#">bharath.com006@gmail.com</a>
              </p>
            </div>
          </div>
          <ul className="flex justify-start items-center cursor-pointer list-none gap-[1rem] md:gap-[4rem] ">
            <li>
              <Mail />
            </li>
            <li>
              <FaceBook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Insta />
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-white bg-[#548CA8]">
        <div className="text-center p-4">
          © 2022 Copyright -
          <a className="text-white" href="">
            Computer Service
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

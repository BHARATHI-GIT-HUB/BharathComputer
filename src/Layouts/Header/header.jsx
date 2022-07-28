import React from "react";
import ClockIcon from "../../assets/Icons/ClockIcon.jsx";
import PhoneIcon from "../../assets/Icons/PhoneIcon.jsx";
import Mail from "../../assets/Icons/Mail.jsx";
import { Link, NavLink } from "react-router-dom";
import BcLogo from "../../assets/Images/Bc-Logo.png";
import Menu from "../../assets/Icons/Menu";
import { useState } from "react";
// import Mail from "../../assets/Icons/Mail";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className=" overflow-hidden ">
      <div className="hearder-upper   bg-blue text-white md:h-[10rem]  lg:h-[5rem]  ">
        <div className=" container flex flex-col  justify-between items-center  md:flex-col lg:flex-row gap-4 md:gap-2 ">
          <div className="pt-4 md:!pt-0 cursor-pointer">
            <Link to="./">
              <img src={BcLogo} alt="" className=" h-14 object-cover" />
            </Link>
          </div>
          <div className="flex flex-col justify-around items-center md:flex-row md:w-[50rem] h-[25rem] md:h-[5rem]  font-Inter font-light text-center md:!text-start">
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <ClockIcon />
              <div
                className="
            "
              >
                <h6>ShopTime</h6>
                <p>8AM To 8PM</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <PhoneIcon />
              <div
                className="
              "
              >
                <h6>Contact</h6>
                <p>+91 8056965276</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 items-center">
              <Mail />
              <div
                className="
              "
              >
                <h6>Mail</h6>
                <p>bharath.com006@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-lower  sticky top-0 z-50  md:rounded-r-[0.3rem] md:shadow-lg bg-white  ">
        <div className="flex items-center  h-16  ">
          <div className="absolute right-3 flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-black  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <Menu />
            </button>
          </div>
          <div className="container lg:ml-[4.5rem]   flex items-center justify-center font-Inter  sm:items-stretch sm:justify-start ">
            <div className="hidden lg:flex  justify-around items-center md:block ">
              <div className="flex gap-x-[2rem] ">
                <NavLink
                  to={"./"}
                  style={({ isActive }) => ({
                    color: isActive && "#00bfa5",
                  })}
                  className={
                    " py-2 text-blue hover:text-green rounded-md text-Header font-medium  "
                  }
                >
                  Home
                </NavLink>

                <NavLink
                  to={"/Computer-Repair"}
                  style={({ isActive }) => ({
                    color: isActive && "#00bfa5",
                  })}
                  className={
                    " py-2 text-blue hover:text-green rounded-md text-Header font-medium  "
                  }
                >
                  ComputerRepair
                </NavLink>

                <NavLink
                  to={"/Data-Recovery"}
                  style={({ isActive }) => ({
                    color: isActive && "#00bfa5",
                  })}
                  className={
                    " py-2 text-blue hover:text-green rounded-md text-Header font-medium  "
                  }
                >
                  DataRecovery
                </NavLink>

                <NavLink
                  to={"/About-Us"}
                  style={({ isActive }) => ({
                    color: isActive && "#00bfa5",
                  })}
                  className={
                    " py-2 text-blue hover:text-green rounded-md text-Header font-medium  "
                  }
                >
                  AboutUs
                </NavLink>
                <NavLink
                  to={"/Contact-Us"}
                  style={({ isActive }) => ({
                    color: isActive && "#00bfa5",
                  })}
                  className={
                    " py-2 text-blue hover:text-green rounded-md text-Header font-medium  "
                  }
                >
                  ContactUs
                </NavLink>
              </div>
              {/* <div className="text-black flex justify-evenly gap-4 items-center">
                <Menu /> <Menu />
              </div> */}
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="ml-3 relative"></div>
          </div>
        </div>

        <div className={"md:hidden" + (navbarOpen ? " flex" : " hidden")}>
          <div className="px-2 pt-2 pb-3 gap-y-1">
            <Link
              to={"./"}
              className=" active:text-green text-blue hover:text-green block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>

            <Link
              to={"/Computer-Repair"}
              className="text-blue hover: hover:text-green block px-3 py-2 rounded-md text-base font-medium"
            >
              ComputerRepair
            </Link>

            <Link
              to={"/Data-Recovery"}
              className="text-blue hover: hover:text-green block px-3 py-2 rounded-md text-base font-medium"
            >
              DataRecovety
            </Link>

            <Link
              to={"/About-Us"}
              className="text-blue hover: hover:text-green block px-3 py-2 rounded-md text-base font-medium"
            >
              AboutUs
            </Link>
            <Link
              to={"/Contact-Us"}
              className="text-blue hover: hover:text-green block px-3 py-2 rounded-md text-base font-medium"
            >
              ContactUs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

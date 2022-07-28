import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Windows10 from "../../assets/Icons/Windows10";
import AntiViruses from "../../assets/Icons/AntiViruses";
import KeyBoard from "../../assets/Icons/KeyBoard";
import Desktop from "../../assets/Icons/Desktop-Icon";

const CardComputerRepair = () => {
  return (
    <div className=" my-[3rem] md:my-[5rem]  ">
      <div className="flex flex-row flex-wrap  justify-center items-center  gap-10 md:gap-16  ">
        <Link to={"/Windows-Repair"} className="hover:text-black">
          <Card className="flex justify-center items-center md:gap-[2rem] gap-[1.3rem] h-[25vh] w-[63vw] md:w-[35rem] md:h-[20rem] shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110 onClick={() => this.nextPath('/')">
            <Windows10 />
            <h3 className=" text-secondarypara md:text-primarypara">
              Windows Repair and Installation
            </h3>
          </Card>
        </Link>
        <Link to={"/Viruse-Malware"} className="hover:text-black">
          <Card className="flex justify-center items-center md:gap-[2rem] gap-[1.3rem]  h-[25vh] w-[63vw] md:w-[35rem] md:gap[.3rem] md:h-[20rem] shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110">
            <AntiViruses />
            <h3 className="text-secondarypara md:text-primarypara">
              Virus and Malware Removal
            </h3>
          </Card>
        </Link>
        <Link to={"/Make-Appoinment"} className="hover:text-black">
          <Card className="flex justify-center items-center md:gap-[2rem] gap-[1.3rem]  h-[25vh] w-[63vw] md:w-[35rem] md:h-[20rem] shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110">
            <KeyBoard />
            <h3 className="text-secondarypara md:text-primarypara">
              Keyboard Replacement
            </h3>
          </Card>
        </Link>
        <Link to={"/Custom-Desktop"} className="hover:text-black">
          <Card className="flex justify-center items-center gap-[1.3rem]  h-[25vh] w-[63vw] md:gap-[2rem] md:w-[35rem] md:h-[20rem] bg-cover shadow-md rounded-lg transform transition duration-500 hover:shadow-2xl hover:scale-110">
            <Desktop />
            <h3 className="text-secondarypara md:text-primarypara">
              Custom Built Computers
            </h3>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default CardComputerRepair;

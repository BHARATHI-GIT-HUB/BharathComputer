import React from "react";
import "./card.css";
import { Card } from "react-bootstrap";
import LiquidDamage from "../../assets/Images/liquidDamage.jpeg";
import { Link } from "react-router-dom";
import { ArrayForCard } from "../image-array";

export default function card() {
  return (
    <Card className="grid grid-cols-1 gap-6 lg:gap-10 lg:grid-cols-2  justify-center items-center text-white my-[1.5rem] lg:my-[3rem] border-none  ">
      {ArrayForCard.map(({ key, src, Heading, p, to }) => {
        return (
          <Card.Body key={key} className="p-0 flex justify-center  ">
            <div className=" shadow-md rounded-lg    ">
              <Card.Img
                className=" absolute sm:w-[70%] h-[22.5rem] lg:h-[40rem] lg:w-[47%] object-center object-cover   "
                src={src}
              />
            </div>
            <div className="Card-Caption relative top-0 right-0  flex flex-col justify-center items-center  text-center  sm:w-[70%] h-[22.5rem] lg:w-[96.5%] lg:h-[40rem] gap-5  shadow-md rounded-lg ">
              <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
                {Heading}
              </h1>{" "}
              <p className=" text-secondarypara md:text-primarypara  md:leading-[1.7rem] md:font-light px-[2rem] lg:p-7 ">
                {p}
              </p>
              <Link
                className="text-[0.8rem] lg:text-[1.2rem] hover:text-white "
                to={to}
              >
                Learn more
              </Link>
            </div>
          </Card.Body>
        );
      })}
    </Card>
  );
}

import Carousel from "react-bootstrap/Carousel";
import { ArrayImages } from "../image-array";
import React from "react";
import "./carousel.css";
import { Link } from "react-router-dom";

function carousel() {
  return (
    <div>
      <Carousel className="   text-center">
        {ArrayImages.map(({ key, src, Heading, p }) => {
          return (
            <Carousel.Item key={key}>
              <img className="Image " src={src} alt="none" />
              <span className="Caption absolute ">
                <h1 className=" text-secondaryheading md:text-primaryheading ">
                  {Heading}
                </h1>
                <p className=" md:!text-primarypara">{p}</p>
                <Link className="White-btn" to={"/Make-Appoinment"}>
                  Make Appoinment
                </Link>
              </span>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default carousel;

import React from "react";
import Trust from "../../assets/Images/Trust.jpg";
import Card from "../../Components/Card/card-aboutus";

const AboutUs = () => {
  return (
    <div className="h-[]">
      <div className="w-full  relative">
        <img
          className="w-full h-[33vh]  md:h-[80vh] object-cover"
          src={Trust}
          alt=""
        />
        <div className=" absolute !font-OpenSnas  text-gray bg-opacity top-0 text-center gap-[.5vh] w-full h-full flex flex-col justify-center Md:gap-[1vh]">
          <h1 className="text-secondaryheading md:text-primaryheading md:font-normal">
            About BharathComputers{" "}
          </h1>
          <p className=" text-secondarypara px-[6vw] md:text-primarypara md:px-[20vw] md:leading-2 ">
            Trust the passionated Professionals.
          </p>
        </div>
      </div>
      <div className=" flex  justify-center items-center flex-col text-center gap-[2rem] lg:gap-[2rem] my-[1.7rem] lg:my-[2rem]  ">
        <h1 className="text-secondaryheading lg:text-primaryheading lg:w-[60rem]">
          Kindness and Empathy
        </h1>
        <p className=" text-secondarypara lg:text-primarypara px-[2rem] sm:px-[3rem] lg:px-[7rem]">
          Two principles guide our entire approach to business at Bharath
          Computer Repair: kindness and empathy. We recognize how important the
          devices brought into our stores can be in our customers’ lives.
          <br />
          <br />
          Whatever the issue, we appreciate that one approach doesn’t serve all.
          We strive to listen and tailor a solution to address the individual
          needs of each unique customer. While we understand that stress and
          anxiety accompany tech problems, we know that our clients rely on us
          to guide them to the right solution. Our mission is to make every
          repair process as comfortable and reassuring for our customers as
          possible, no matter the issue, and to treat every customer with the
          kindness and respect that they deserve.
        </p>
      </div>
      <Card
        h1="Our History"
        p="BharathComputer started as a Computer wholesale business in 2016. After building a solid reputation and many positive relationships with customers, we opened our first retail store in the chennai at 2017. As we outgrew that first small store, we took the opportunity to expand. Since then we’ve grown steadily, primarily through referrals from satisfied customers near chennai. We owe much of our business success to the fact that we work with customers to provide high-quality, lasting solutions to their computer repair needs. With a combination of excellent customer service and attention to detail, We will consistently exceed your expectations."
      />
    </div>
  );
};

export default AboutUs;

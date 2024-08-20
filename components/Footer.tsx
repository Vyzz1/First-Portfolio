import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { people } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          {" "}
          Ready To Take <span className="text-purple">your</span> digital
          presence to the next level{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          {" "}
          Get In Contact Right Now{" "}
        </p>
        <a href="mailto:vykhanghuynh@gmail.com">
          <MagicButton
            title="Mail me"
            icon={<FaLocationArrow />}
            possition="right"
          />
        </a>
        <div className="flex flex-row items-center justify-center mt-20 mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

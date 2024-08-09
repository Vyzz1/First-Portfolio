"use client";
import dynamic from "next/dynamic";
import { BackgroundGradientAnimation } from "./BackgroundGradientAnimation";
import { GridGlobe } from "./GridGlobe";
import { useState, useEffect } from "react";
import cc from "../../data/cc.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { cn } from "@/utils/cn";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const BentoGridItem = ({
  id,
  title,
  description,
  className,
  spareImg,
  img,
  titleClassName,
  imgClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  titleClassName?: string;
  spareImg?: string;
  imgClassName?: string;
  id: string | number;
}) => {
  const leftLists = ["NodeJs", "ReactJs", "Typescript"];
  const rightLists = ["Java", "NextJS", "Php"];
  const [Copy, setCopy] = useState(false);

  const handleCopy = () => {
   
    setCopy(true);
  };

  useEffect(() => {
    if (Copy) {
      const email = "vykhanghuynh@gmail.com";
      navigator.clipboard.writeText(email);
      setTimeout(()=>{setCopy(false)},1500);
    }
  }, [Copy]);
  const options = {
    loop: Copy,
    autoplay: Copy,
    animationData: cc,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center "}h-full `}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          } `}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation></BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          <div
            className={`font-sans text-lg lg:text-3xl lg:mb-10 max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 2 && <GridGlobe />}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                        lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5  right-0`}>
                <Lottie {...options}></Lottie>
              </div>
              <MagicButton
                title={Copy ? "Email Copied!" : "Copy My Email"}
                icon={<IoCopyOutline />}
                possition="left"
                otherClasses="!bg-[#161a31]"
                hanldeClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BentoGridItem;

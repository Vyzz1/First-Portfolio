import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCard";
import { testimonials } from "@/data";

const Experiences = () => {
  return (
    <>
      <section className="py-10" id="experiences">
        <h1 className="heading mb-20">
          {" "}
          Experiences from working and learning with
          <span className="text-purple"> my friends </span>
        </h1>
        <div className="flex flex-col items-center ">
          <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center overflow-hidden relative">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experiences;

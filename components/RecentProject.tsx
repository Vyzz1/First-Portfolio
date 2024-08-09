"use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";

const RecentProject = () => {
  const handleVistProject = (link: string): void => {
    window.open(link, "_blank");
  };
  return (
    <section className="py-20" id="projects">
      <h1 className="heading">
        {" "}
        A Small Selection Of{" "}
        <span className="text-purple">recent projects </span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24  mt-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="lg:min-h-[32.5rem] relative flex items-center justify-center sm:h-[41rem] h-[32rem] sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={project.link} href={project.link}>
              <div className="relative flex justify-center items-center sm:w-[570px] sm:h-[40vh]  w-[80vw] overflow-hidden h-[30vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bng" />
                </div>
                <img
                  src={project.img}
                  alt={project.title}
                  className="z-10 absolute bottom-0 object-cover w-full h-full object-center rounded-lg"
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 ">
                {project.title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {project.des}
              </p>
              <div className="flex items-center  justify-between mt-7 mb-3 ">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index * 2}px)`,
                      }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
                <div className="flex justify-center items-center">
                  <p
                    className="flex lg:text-xl md:text-xs text-sm text-purple"
                    onClick={() => handleVistProject(project.link)}
                  >
                    {" "}
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3 " color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentProject;

import React from "react";
import works from "./works";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import {Download} from "lucide-react"

function Timeline() {
    useEffect(() => {
      Aos.init();
    }, []);
    return (
    <div className="w-full h-fit mb-36 px-10 lg:px-28 ">
        <h1 className="uppercase text-[3em] lg:text-[7em] font-bold text-neutral-200 dark:text-white/10 text-center pt-28 lg:pt-0" data-aos="fade-up" data-aos-duration="400">
            Experience
        </h1>
      <div className="w-full rounded-lg overflow-hidden  flex justify-center flex-col items-center">
        {works.map((work, index) => (
          <section className="border-b-[.5px] border-neutral-600 py-10 lg:flex-row flex-col flex lg:w-3/4 gap-10 justify-between"data-aos="fade-up" data-aos-duration="700">
            <div className="w-full">
              <h3 className=" font-semibold text-neutral-600 dark:text-neutral-200 text-xl">{work.title}</h3>
              <span className="font-semibold text-lime-500 dark:text-lime-400 text-sm block uppercase">{work.place}</span>
              <span className="font-medium text-lime-700 dark:text-lime-200 text-sm">{work.date}</span>
            </div>
            <div className=" w-full lg:w-2/3">
                <p className="text-neutral-800 dark:text-white font-medium">{work.description}</p>
            </div>
          </section>

        ))}
        <a
          href="#contact"
          className="bg-lime-400 py-2 px-7 rounded-md mt-8 transition-all duration-200 font-medium flex content-center" data-aos="fade-up" data-aos-duration="600"
        >
          Descarga mi CV <Download className="ml-3" />
        </a>
      </div>
    </div>
  );
};

export default Timeline;

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Projects from "./data.json";

function Work() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <div className="w-full h-fit mb-36 px-10 lg:px-28 " id="work">
        <h1 className="uppercase text-[4em] lg:text-[10em] font-bold text-neutral-200 dark:text-white/10 text-right " data-aos="zoom-out-up" data-aos-duration="800" data-aos-offset="200">
          work
        </h1>

        <div className=" w-full h-fit flex lg:flex-row flex-col flex-wrap justify-between gap-y-10">
          {Projects.map((proyecto, index) => (
            <Link to={proyecto.url} key={index} className="work-p w-full lg:w-[48%] h-fit card lg:flex-none project-card " data-aos="fade-up" data-aos-duration="700" data-aos-delay={proyecto.delay}>
              <div className={proyecto.claseFondo + " rounded-lg overflow-hidden w-full h-80 bg-cover bg-center flex items-end transition-all ease-in-out  duration-200 hover:scale-105"}>
                <div className="dark:bg-neutral-900/60 bg-neutral-200/30  backdrop-blur-lg w-full p-3 ">
                  <h2 className=" text-neutral-200 font-semibold text-2xl">{proyecto.titulo}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Work;

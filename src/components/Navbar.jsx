import { Link } from "react-router-dom";
import {Home} from "lucide-react";
import {User} from "lucide-react";
import {BriefcaseBusiness} from "lucide-react";
import {Phone} from "lucide-react"
function Navbar() {
  return (
    <>
      <div className="flex justify-center ">
        <div
          className="dark:bg-neutral-900/40 mt-4 rounded-2xl w-fit h-12 fixed lg:w-[24em] backdrop-blur-lg shadow-2xl px-4 bottom-5 lg:top-0 z-10"
          data-aos="zoom-out"
        >
          <ul className="flex gap-12 justify-center items-center h-full dark:text-neutral-400 text-neutral-900 transition-all">
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <Link to={'/'} className="hidden md:inline" >home</Link>
              <Link to={'/'} className="md:hidden"><Home /></Link>
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#about" className="hidden md:inline">about</a>
              <a href="#about" className="md:hidden"><User /></a>
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#work" className="hidden md:inline">wok</a>
              <a href="#work" className="md:hidden"><BriefcaseBusiness /></a>
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#contact" className="hidden md:inline">contact</a>
              <a href="#contact" className="md:hidden"><Phone /></a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

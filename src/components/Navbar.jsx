import { Link } from "react-router-dom";
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
              <Link to={'/'} >home</Link>
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#about">about</a>{" "}
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#work">wok</a>
            </li>
            <li className="hover:scale-110 hover:text-lime-500 dark:hover:text-lime-500 duration-300 capitalize">
              <a href="#contact">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

import Aos from "aos"
import { Github } from "lucide-react"
import {Linkedin} from "lucide-react"
import { Mail } from "lucide-react"
import { Figma } from "lucide-react"

import { useEffect } from "react"

function Contact() {
    useEffect(() => {
        Aos.init();
     },[]);
    return(
        <>
            <div className="w-screen h-96 bg-footer bg-center bg-cover "id="contact">
                <div className="w-full  h-full bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:via-neutral-900/90 via-neutral-100/90 backdrop-blur-sm flex items-center flex-col">
                    <h2 data-aos="fade-up" className="uppercase text-3xl tracking-[.2em] lg:tracking-[.4em] font-medium dark:text-neutral-300 text-neutral-900">bryan aviña</h2>
                    <p  data-aos="fade-up" data-aos-delay="200" className=" font-thin lg:tracking-[.3em] mb-14  dark:text-neutral-300 text-neutral-900">Product designer and frontend developer.</p>
                    <div className="flex gap-10 justify-center transition-all">
                        <a data-aos="zoom-out"  href="https://github.com/BryanTohsaka" target="_blank" rel="noreferrer" className=" border hover:border-none border-neutral-900 dark:border-neutral-200 hover:bg-lime-300  w-12 h-12 flex justify-center items-center rounded-full duration-200 dark:hover:text-neutral-900 hover:text-white text-neutral-900 dark:text-neutral-200"><Github /></a>
                        <a data-aos="zoom-out" data-aos-delay="100" href="https://www.linkedin.com/in/bryan-ivan-avi%C3%B1a-camacho/" target="_blank" rel="noreferrer" className=" border hover:border-none border-neutral-900 dark:border-neutral-200 hover:bg-lime-300 w-12 h-12 flex justify-center items-center rounded-full duration-200 dark:hover:text-neutral-900 hover:text-white text-neutral-900 dark:text-neutral-200"><Linkedin strokeWidth={1.5} /></a>
                        <a data-aos="zoom-out" data-aos-delay="200" href="mailto:bryan_avina@hotmail.com" className=" border hover:border-none border-neutral-900 dark:border-neutral-200 hover:bg-lime-300  w-12 h-12 flex justify-center items-center rounded-full duration-200 dark:hover:text-neutral-900 hover:text-white text-neutral-900 dark:text-neutral-200"><Mail /></a>
                        <a data-aos="zoom-out" data-aos-delay="200" href="https://www.figma.com/@tohsaka" target="_blank" rel="noreferrer" className=" border hover:border-none border-neutral-900 dark:border-neutral-200 hover:bg-lime-300  w-12 h-12 flex justify-center items-center rounded-full duration-200 dark:hover:text-neutral-900 hover:text-white text-neutral-900 dark:text-neutral-200"><Figma /></a>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Contact

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect} from 'react';
function About() {
  useEffect(() => {
    Aos.init();
    if (window.history.replaceState) {
      window.history.replaceState(null, null, window.location.pathname);
    }
  }, []);
  return (

    <>
      <div className="w-full h-fit lg:mb-36  px-10 lg:px-28 "id="about">
        <h1
          className="uppercase text-[4em] lg:text-[10em] font-bold text-neutral-200 dark:text-white/10 text-left"
          data-aos="zoom-out-up"
          data-aos-duration="700"
          data-aos-offset="200"
        >
          about
        </h1>
        

        <div className=" lg:top-10 lg:px-28  ">
          <span className="flex flex-col-reverse lg:flex-row gap-8 items-center">
            <p className="dark:text-white lg:w-2/3">
              A lo largo de mi carrera de{" "}
              <span className="text-lime-700 font-medium dark:text-lime-300">6 años</span> como desarrollador front-end y diseñador
              UX/UI, he trabajado en una variedad de proyectos desafiantes y
              emocionantes.
              <span className="block mt-4">
                Desde el diseño de interfaces de usuario para el{" "}
                <span className="text-lime-700 font-medium dark:text-lime-300">
                  {" "}
                  sector financiero y el comercio electrónico hasta la creación
                  de soluciones digitales para empresas de servicios
                </span>
                , he tenido la oportunidad de explorar diversas industrias.
              </span>
              <span className="block mt-4">
                Mi enfoque se ha centrado en comprender las necesidades de los
                usuarios y transformar esas percepciones en experiencias
                digitales excepcionales.{" "}
                <span className="text-lime-700 font-medium dark:text-lime-300">
                  He liderado proyectos que han aumentado las conversiones,
                  mejorado la satisfacción del cliente
                </span>{" "}
                y simplificado los flujos de usuarios.
              </span>
              <p className="mt-4">Mi formación académica incluye una Ingeniería en Sistemas, Diseño y Desarrollo de Aplicaciones Móviles.  Mis habilidades abarcan desde el diseño de UX/UI hasta el desarrollo web y la gestión de proyectos, utilizando herramientas como <span className="text-lime-700 font-medium dark:text-lime-300">Adobe XD, Figma, Sketch, WordPress, WooCommerce y Google Ads.</span></p>
            </p>
            <div
              className="lg:w-1/3 h-96 w-full bg-slate-200 rounded-lg about-img mb-10"
              data-aos="fade-left"
              data-aos-duration="700"
              data-aos-offset="200"
            ></div>
          </span>
        </div>
      </div>
    </>
  )
}

export default About
















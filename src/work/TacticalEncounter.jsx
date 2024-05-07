import Back from "../components/Back";
import w3 from "../assets/w3.webp";
import w3Full from "../assets/w3-full.webp";
import ScrollTop from "../components/ScrollTop";

const TacticalEncounter = () => {
    return (
        <>
          <ScrollTop />
          <div className="w-full h-fit flex flex-col overflow-auto ">
            <div className="bg-w3 bg-top bg-no-repeat bg-cover bg-fixed h-60">
              <div className=" backdrop-blur-sm text-center w-full h-full flex justify-center items-center uppercase text-4xl font-bold text-lime-200 dark:bg-neutral-900/60 ">
                <h1>Tactical Encounter</h1>
              </div>
            </div>
    
            <div className="py-10 lg:px-96 px-10">
              {/* intro*/}
              <div>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 mb-6">Descripción del Proyecto:</h3>
                <p className=" mt-10 dark:text-neutral-400">"Tactical Encounter" es un juego de estrategia en tiempo real que pone a los jugadores en el papel de comandantes militares que lideran unidades en el campo de batalla. El sitio web sirve como plataforma central para la comunidad de jugadores, ofreciendo información sobre el juego, actualizaciones, foros de discusión, recursos y una tienda en línea para contenido adicional.</p>
                <img src={w3} alt="" className="pt-10 mb-20" />
                <a href="https://tactical-encounter.vercel.app/" target="_blank" rel="noreferrer"
                className="border-2 dark:border-lime-200 border-neutral-800 rounded px-5 py-2 dark:text-lime-200">
                  Ver sitio
                </a>
              </div>
              {/*end intro*/}
    
              {/* intro*/}
              <div>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Objetivos del Proyecto:</h3>
                <div className=" mt-10 dark:text-neutral-400 pl-8">
                  <ul className="list-disc">
                    <li className="mt-4">Crear una plataforma en línea que sirva como punto de encuentro para la comunidad de "Tactical Encounter".</li>
                    <li className="mt-4">Proporcionar información detallada sobre el juego, incluyendo reglas, tácticas, y estrategias.</li>
                    <li className="mt-4">Ofrecer una experiencia de usuario intuitiva y atractiva que fomente la participación y retención de los usuarios.</li>
                    <li className="mt-4">Generar ingresos a través de la venta de contenido descargable y productos relacionados con el juego.</li>
                  </ul>
                </div>
              </div>
              {/*end intro*/}
    
              {/* intro*/}
              <div>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Análisis Competitivo:</h3>
                <p className=" mt-10 dark:text-neutral-400">Se realizó un análisis exhaustivo de otros sitios web de juegos de estrategia en tiempo real y de la competencia directa de "Tactical Encounter". Se identificaron las fortalezas y debilidades de cada plataforma para informar el diseño y la estrategia de marketing.</p>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Ideación y Conceptualización:</h3>
                <p className=" mt-10 dark:text-neutral-400">Se llevaron a cabo sesiones de lluvia de ideas para desarrollar el concepto del sitio web, definiendo la estructura de la información, las características clave y el estilo visual. Se crearon prototipos y se recopilaron comentarios de los usuarios para refinar el diseño.</p>
                <img src={w3Full} alt="" className="pt-10" />
              </div>
              {/*end intro*/}
    
              {/* intro*/}
              <div>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Diseño de Interfaz de Usuario:</h3>
                <p className=" mt-10 dark:text-neutral-400">Se diseñó una interfaz de usuario moderna y funcional que refleja la temática militar del juego. Se implementó un diseño responsivo para garantizar una experiencia consistente en diferentes dispositivos. Se priorizó la accesibilidad y la facilidad de navegación.</p>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Iteraciones y Mejoras:</h3>
                <p className=" mt-10 dark:text-neutral-400">El sitio web se sometió a pruebas exhaustivas de usabilidad y se recopilaron comentarios de los usuarios durante las fases de desarrollo. Se realizaron iteraciones basadas en estos comentarios para mejorar la funcionalidad y la experiencia del usuario.</p>
                <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Logros del Proyecto:</h3>
                <div className=" mt-10 dark:text-neutral-400 pl-8">
                    <ul className="list-disc">
                        <li className="mt-4">Lanzamiento exitoso del sitio web de "Tactical Encounter" dentro del plazo previsto.</li>
                        <li className="mt-4">Alta tasa de participación de la comunidad, con un aumento constante en el tráfico y la actividad de los usuarios.</li>
                        <li className="mt-4">Recepción positiva por parte de los jugadores, destacando la facilidad de uso y la calidad del contenido proporcionado.</li>
                        <li className="mt-4">Generación de ingresos a través de la venta de contenido descargable y productos relacionados con el juego, superando las expectativas iniciales.</li>
                    </ul>
                </div>
                
              </div>
              {/*end intro*/}
            </div>
          </div>
          <Back />
        </>
      );
}

export default TacticalEncounter
import Back from "../components/Back";
import w2 from "../assets/w2.webp";
import ScrollTop from "../components/ScrollTop";
function GreenGetaways() {
    return (
      <>
        <ScrollTop />
        <div className="w-full h-fit flex flex-col overflow-auto ">
          <div className="bg-w2 bg-top bg-no-repeat bg-cover bg-fixed h-60">
            <div className=" backdrop-blur-sm text-center w-full h-full flex justify-center items-center uppercase text-4xl font-bold text-lime-200 dark:bg-neutral-900/60 ">
              <h1>natures twilight vodka</h1>
            </div>
          </div>
  
          <div className="py-10 lg:px-96 px-10">
            {/* intro*/}
            <div>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 mb-6">
                Contexto del Proyecto:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                Inspirado por un diseño excepcional de una botella de vodka en
                Pinterest, descubrí la creatividad de Terence López, un diseñador
                innovador. Decidí aplicar su enfoque a través del diseño de una
                landing page para la marca de vodka Natures Twilight. La paleta de
                colores se basa en tonos menta brillantes y negros contrastantes
                para enfocar la atención en la botella, la verdadera estrella del
                producto.
              </p>
              <img src={w2} alt="" className="pt-10" />
              <button
                href=""
                className="border-2 dark:border-lime-200 border-neutral-800 rounded px-5 py-2 mt-10 dark:text-lime-200"
              >
                Ver prototipo
              </button>
            </div>
            {/*end intro*/}
  
            {/* intro*/}
            <div>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Objetivos del Proyecto:
              </h3>
              <div className=" mt-10 dark:text-neutral-400 pl-8">
                <ul className="list-disc">
                  <li className="mt-4">
                    Crear una landing page atractiva que resalte la botella de
                    vodka "Nature's Twilight".
                  </li>
                  <li className="mt-4">
                    Utilizar la paleta de colores de tonos menta y negros para
                    transmitir elegancia y frescura.
                  </li>
                  <li className="mt-4">
                    Garantizar una experiencia de usuario intuitiva y centrada en
                    el producto para fomentar la interacción y las conversiones.
                  </li>
                </ul>
              </div>
            </div>
            {/*end intro*/}
  
            {/* intro*/}
            <div>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Wireframes y Prototipos:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                Se crearon wireframes detallados y prototipos interactivos que
                presentaban el diseño de la landing page, destacando la botella de
                vodka "Nature's Twilight" en diferentes secciones.
              </p>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Diseño Visual:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                Se implementaron tonos menta brillantes y negros en el diseño,
                creando un contraste elegante. Se utilizaron imágenes de alta
                calidad de la botella y se aplicaron efectos visuales sutiles para
                realzar su atractivo.
              </p>
              <img src={w2} alt="" className="pt-10" />
            </div>
            {/*end intro*/}
  
            {/* intro*/}
            <div>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Lecciones Aprendidas:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                La combinación de colores y el enfoque centrado en el producto
                resultaron en una experiencia visualmente atractiva y efectiva
                para los usuarios.
              </p>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Recomendaciones Futuras:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                Explorar la posibilidad de integrar elementos de interactividad
                para mejorar aún más la participación del usuario en la página de
                inicio.
              </p>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Resumen Final:
              </h3>
              <p className=" mt-10 dark:text-neutral-400">
                El rediseño de la landing page para "Nature's Twilight" no solo
                resalta la elegancia de la botella de vodka, sino que también
                mejora la interacción del usuario y las conversiones, brindando
                una experiencia memorable a los visitantes del sitio web.
              </p>
              <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">
                Fuentes Utilizadas:
              </h3>
              <div className=" mt-10 dark:text-neutral-400 pl-8">
                <ul className="list-disc">
                  <li className="mt-4">
                    Diseños de Terence López que inspiraron el enfoque creativo
                    del proyecto.
                  </li>
                  <li className="mt-4">
                    Encuestas en línea y datos de usuarios que contribuyeron a la
                    toma de decisiones en el diseño de la landing page.
                  </li>
                </ul>
              </div>
              <img data-aos-duration="1000" src={w2} alt="" className="pt-10" />
            </div>
            {/*end intro*/}
          </div>
        </div>
        <Back />
      </>
    );
  }

export default GreenGetaways
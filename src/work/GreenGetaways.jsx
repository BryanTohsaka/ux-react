import Back from "../components/Back";
import w2 from "../assets/w2.webp";
import w2Full from "../assets/w2-full.webp";
import ScrollTop from "../components/ScrollTop";
function GreenGetaways() {
  return (
    <>
      <ScrollTop />
      <div className="w-full h-fit flex flex-col overflow-auto ">
        <div className="bg-w2 bg-top bg-no-repeat bg-cover bg-fixed h-60">
          <div className=" backdrop-blur-sm text-center w-full h-full flex justify-center items-center uppercase text-4xl font-bold text-lime-200 dark:bg-neutral-900/60 ">
            <h1>Green Getaways</h1>
          </div>
        </div>

        <div className="py-10 lg:px-96 px-10">
          {/* intro*/}
          <div>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 mb-6">Descripción del Proyecto:</h3>
            <p className=" mt-10 dark:text-neutral-400">Green Getaways es una empresa dedicada a ofrecer experiencias de viaje sostenibles y eco-friendly. Para mi proyecto personal, decidí emprender el desafío de rediseñar su sitio web como parte de mi portafolio creativo. El objetivo era crear una plataforma en línea que reflejara la esencia de Green Getaways y destacara su compromiso con la sostenibilidad, al mismo tiempo que demostrara mi capacidad para diseñar experiencias digitales envolventes y efectivas.</p>
            <img src={w2} alt="" className="pt-10 mb-20" />
            <a href="https://www.figma.com/file/rGX1v74HPwIBaBNg2AqwNT/Green-Getaways?type=design&mode=design&t=yUg6mRSZros999PX-1" target="_blank" rel="noreferrer"
            className="border-2 dark:border-lime-200 border-neutral-800 rounded px-5 py-2 dark:text-lime-200">
              Ver prototipo
            </a>
          </div>
          {/*end intro*/}

          {/* intro*/}
          <div>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Objetivos del Proyecto:</h3>
            <div className=" mt-10 dark:text-neutral-400 pl-8">
              <ul className="list-disc">
                <li className="mt-4">Redefinir la experiencia del usuario, poniendo la sostenibilidad en el centro del diseño.</li>
                <li className="mt-4">Resaltar la amplia gama de destinos y experiencias eco-friendly ofrecidas por Green Getaways.</li>
                <li className="mt-4">Fomentar la conversión de visitantes en viajeros comprometidos con la protección del medio ambiente.</li>
                <li className="mt-4">Consolidar mi identidad como un diseñador creativo y comprometido con el turismo responsable.</li>
              </ul>
            </div>
          </div>
          {/*end intro*/}

          {/* intro*/}
          <div>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Análisis Competitivo:</h3>
            <p className=" mt-10 dark:text-neutral-400">Analizé otros sitios web de empresas de viajes sostenibles para identificar tendencias del mercado y mejores prácticas en diseño. Estudié cómo estas empresas presentaban su oferta de viajes y cómo se comunicaban con su audiencia.</p>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Ideación y Conceptualización:</h3>
            <p className=" mt-10 dark:text-neutral-400">Generé ideas y conceptos para el diseño del sitio web, centrándome en transmitir la belleza y la importancia de la naturaleza. Quería crear una experiencia visualmente atractiva que inspirara a los visitantes a explorar destinos sostenibles.</p>
            <img src={w2Full} alt="" className="pt-10" />
          </div>
          {/*end intro*/}

          {/* intro*/}
          <div>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Diseño de Interfaz de Usuario:</h3>
            <p className=" mt-10 dark:text-neutral-400">Opté por un diseño limpio y minimalista que destacara las imágenes y la información sobre los destinos y experiencias ofrecidas por Green Getaways. Utilicé tonos de verde y elementos naturales para reflejar la conexión con la naturaleza que promueve la empresa.</p>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Iteraciones y Mejoras:</h3>
            <p className=" mt-10 dark:text-neutral-400">Basándome en los comentarios recibidos durante las pruebas de usabilidad, realicé iteraciones en el diseño del sitio web para mejorar la experiencia del usuario. Ajusté la disposición de los elementos, refiné la navegación y optimicé el rendimiento del sitio para garantizar una experiencia fluida y agradable.</p>
            <h3 className=" capitalize font-semibold text-3xl dark:text-neutral-100 my-6">Logros del Proyecto:</h3>
            <p className=" mt-10 dark:text-neutral-400">El resultado final es un sitio web rediseñado que refleja la identidad de Green Getaways y proporciona una experiencia de usuario mejorada. Destaca la oferta de viajes sostenibles de la empresa de manera atractiva y accesible, al tiempo que demuestra mis habilidades como diseñador creativo y comprometido con la sostenibilidad.</p>
          </div>
          {/*end intro*/}
        </div>
      </div>
      <Back />
    </>
  );
}

export default GreenGetaways;

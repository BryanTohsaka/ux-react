

function Hero() {
  return (
    <>
      <div className="w-full h-screen  flex justify-center items-start flex-col App px-10 lg:px-28 ">
        <h1 className="uppercase text-zinc-900 dark:text-white text-5xl font-bold tracking-widest lg:text-[10em] md:text-[6em] w-auto ">
          product
          <br />
          <span className="text-lime-200">designer</span>
        </h1>
        <p className="dark:text-zinc-500 pt-10 lg:pr-80 text-lg">
          Diseñador UX/UI con un enfoque único para fusionar la creatividad
          visual con la funcionalidad excepcional. 
          <p className="pt-4">
          Mi misión es crear
          experiencias digitales que cuenten historias, deleiten a los usuarios
          y transformen ideas en interfaces cautivadoras. Bienvenido/a a mi
          mundo digital, donde cada clic cuenta una historia visual única.
          </p>
        </p>
        <a
          href="#contact"
          className="bg-lime-500 py-2 px-10 rounded-md mt-8 hover:scale-105 transition-all duration-200"
        >
          Contactame
        </a>
      </div>
    </>
  )
}

export default Hero

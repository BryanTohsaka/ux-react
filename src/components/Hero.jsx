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
          Product Designer con una sólida experiencia en el desarrollo y diseño de interfaces de usuario, atractivas y funcionales. Me especializo en crear experiencias de usuario, intuitivas que no solo satisfacen las necesidades de los usuarios, sino que también generan resultados comerciales efectivos. 
          <p className="pt-4">Desde la conceptualización hasta la implementación, mi enfoque está siempre en la innovación y la excelencia en el diseño.</p>
        </p>
        <a href="#contact" className="bg-lime-400 py-2 px-10 rounded-md mt-8 hover:scale-105 transition-all duration-200">
          Contactame
        </a>
      </div>
    </>
  );
}

export default Hero;

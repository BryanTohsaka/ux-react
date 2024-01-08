
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Work() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
    <div className="w-full h-fit mb-36 px-10 lg:px-28 " id="work">
        <h1
          className="uppercase text-[4em] lg:text-[10em] font-bold text-neutral-200 dark:text-white/10 text-right "
          data-aos="zoom-out-up"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          work
        </h1>
        {/*first section*/}
        <div className="w-full transition-all gap-10 flex flex-col md:flex-row">
            <Link to={'/twilight-vodka'} preventScrollReset data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="cursor-pointer w-full rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></Link>
            <Link to={'/green-getaways'} preventScrollReset data-aos="fade-up" data-aos-duration="500" className="cursor-pointer w-full rounded-2xl bg-w2 bg-no-repeat bg-center bg-cover h-96"></Link>
        </div>
        {/*end first section*/}

        {/*second section*/}
        <div className="w-full transition-all gap-10 flex flex-col md:flex-row mt-10">
            <div data-aos="fade-up" data-aos-duration="500" className="cursor-pointer w-full lg:w-8/12 rounded-2xl bg-w2 bg-no-repeat bg-center bg-cover h-96"></div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="cursor-pointer w-full rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></div>
        </div>
        {/*end second section*/}

        {/*third section*/}
        <div className="w-full transition-all gap-10 flex flex-col md:flex-row mt-10">
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="cursor-pointer w-full  rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></div>
            <div data-aos="fade-up" data-aos-duration="500" className="cursor-pointer w-full rounded-2xl bg-w1 lg:w-8/12 bg-no-repeat bg-center bg-cover h-96"></div>
        </div>
        {/*end third section*/}

        {/*first section*/}
        <div className="w-full transition-all gap-10 flex flex-col lg:flex-row mt-10">
            <div data-aos="fade-up" data-aos-duration="500" className="cursor-pointer w-full rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" className="cursor-pointer w-full rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></div>
            <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"className="cursor-pointer w-full rounded-2xl bg-w1 bg-no-repeat bg-center bg-cover h-96"></div>
          </div>
        {/*end first section*/}
      </div>
    </>
  )
}

export default Work

import Image from "next/image";
import banner from "../../assets/laptop-2665794.jpg";

export default function HeroParallax() {
  return (
    <div
      className="lg:h-screen flex flex-col md:flex-row items-center justify-between w-full overflow-hidden px-8 bg-gradient-to-r"
      id="home"
    >
      <div className="relative md:w-1/2 flex-shrink-0">
        <Image
          src={banner}
          alt="Home Page"
          layout="responsive"
          width={1000}
          height={800}
        />
      </div>
      <div className="flex flex-col justify-center items-start md:w-1/2 lg:ml-10 p-6 md:p-12 bg-opacity-70 rounded-lg">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 text-gradient">
          Elevate Your Business with <br /> Lancer.unit
        </h1>
        <p className="text-lg md:text-2xl leading-relaxed mb-6">
          At Lancer.unit, we are committed to empowering your business with
          cutting-edge IT solutions and expert support. Our dedicated team of
          professionals delivers bespoke services across a range of technologies
          to help you achieve your goals with confidence.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 text-white font-semibold text-lg rounded-lg shadow-lg bg-gradient tranform hover:scale-110 duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

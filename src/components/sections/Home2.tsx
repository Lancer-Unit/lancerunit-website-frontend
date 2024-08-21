import Image from "next/image";
import banner1 from "@/assets/web_development.png"
import ButtonPrimary from "@/components/ui/buttonPrimary";


export default function HeroParallax() {
  return (
    <div
      className="lg:h-screen flex flex-col md:flex-row items-center justify-between w-full overflow-hidden px-8 bg-gradient-to-r"
      id="home"
    >
      <div className="relative md:w-1/2 flex-shrink-0">
        <Image
          src={banner1}
          alt="Home Page"
          layout="responsive"
          width={1000}
          height={800}
        />
      </div>
      <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
      <h3 className="text-5xl font-extrabold text-gray-800 leading-tight font-merriweather tracking-wide">
  Here to <span className="text-blue-500">Empower</span>, <span className="text-blue-500">Support</span> and <span className="text-blue-500">Develop</span> Software Solutions for Your Business and IT Career.
</h3>

            <br />
            
            <br />
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


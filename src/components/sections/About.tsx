import Image from "next/image";
import yourImage from "../../assets/Logo.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full lg:h-screen flex flex-col justify-center items-center bg-gray-100 py-24"
    >
      <div className="glass flex flex-col lg:flex-row items-center lg:items-start lg:justify-around mx-6 lg:mx-12 py-16 bg-white backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-lg">
        <div className="w-full max-w-md">
          <Image
            src={yourImage}
            alt="Lancer.Unit"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-8 pt-8 lg:pt-0">
          <h1
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-duration="4000"
            data-aos-easing="ease-out"
            className="text-4xl font-bold mb-4"
          >
            Why to choose Lancer.Unit ?
          </h1>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="4000"
            className="h-1 bg-gradient-to-r from-teal-500 to-teal-500 w-16 mb-6"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="4000"
            data-aos-easing="ease-out"
          >
            <p className="text-lg text-gray-700">
              Working for yourself has several advantages, whether you do it by
              founding your own company or by accepting numerous assignments as
              a freelancer. Flexibility, freedom of choice in projects and
              clients, and financial potential are all benefits of working as
              freelancer. Many people in a variety of professions like to be
              their own boss, and freelancing is the simplest way to do so.
            </p>
          </div>
          <div className="mt-6">
            <button
              data-aos="zoom-in"
              data-aos-offset="100"
              data-aos-duration="4000"
              data-aos-easing="ease-out"
              className="bg-gradient-to-r from-teal-500 to-teal-500 text-white py-2 px-4 rounded-full transition-transform transform hover:scale-105"
            >
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import yourImage from "../../assets/Logo.png";
import { IoCheckmarkDone } from "react-icons/io5";

const expertisePoints = [
  "Our team comprises seasoned professionals with extensive experience in their respective fields.",
  "We prioritize your needs and tailor our solutions to meet your specific requirements.",
  "We adhere to the highest standards of quality to deliver reliable and efficient solutions.",
  "We stay updated with the latest technologies and trends to provide innovative solutions.",
  "Our team is always available to assist you with any queries or issues.",
];

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
            className="text-4xl font-bold mb-4 text-gradient"
          >
            Why choose Lancer.Unit?
          </h1>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="4000"
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-16 mb-6"
          ></div>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            data-aos-duration="4000"
            data-aos-easing="ease-out"
          >
            <ul className="space-y-4">
              {expertisePoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start transition hover:scale-110 hover-text-gradient duration-300"
                >
                  <IoCheckmarkDone className="text-blue-500 mr-2 mt-1 text-2xl " />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import yourImage from "../../assets/Logo.png";
import { IoCheckmarkDone } from "react-icons/io5";
import styles from "@/components/sections/About.module.css";

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
            Why choose Lancer.unit?
          </h1>
          <div
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-duration="4000"
            className="h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-16 mb-6"
          ></div>
          <div className="">
          <h1 style={{ fontWeight: 'bold' , fontSize: '1.4rem' }}>We will provide you the best work which can think off !!</h1>
            <br />
            <p>
            At Lancer.unit, we're not just tech experts—we're your innovation partners. From crafting engaging websites to providing expert job support, we're here to help you navigate and thrive in the digital world.  </p>
            <br></br>
            <br></br>
            <br />

            <div className={styles.boxContainer}>
              <div className={styles.box}>
                <h3>300+</h3>
                <p>Project Completed</p>
              </div>
              <div className={styles.box}>
                <h3>60+</h3>
                <p>Satisfied Clients</p>
              </div>
              <div className={styles.box}>
                <h3>10+</h3>
                <p>Active Developers</p>
              </div>
            </div>

          </div>

        </div>


      </div>

    </section>
  );
}

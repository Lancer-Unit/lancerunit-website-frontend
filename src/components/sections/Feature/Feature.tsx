import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular, FaBriefcase, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import "./Feature.css";
import FeatureCard from "./FeatureCard";

export default function Feature() {
  const features = [
    {
      icon: FaBriefcase,
      title: "Job Support",
      description:
        "Struggling with your current role? Our expert team offers personalized job support to help you navigate through challenges and excel in your career. We provide guidance, mentorship, and hands-on assistance to ensure you succeed in your IT role.",
    },
    {
      icon: FaNode,
      title: "Node Development",
      description:
        "Harness the power of Node.js with our robust development services. Our developers create high-performance, scalable, and efficient backend solutions that drive your business forward. From API development to real-time applications, we have you covered.",
    },
    {
      icon: AiOutlineDotNet,
      title: "Dotnet Development",
      description:
        "Leverage the versatility and reliability of .NET with our specialized development services. Our team delivers enterprise-grade applications that are secure, scalable, and robust. We cover everything from web applications to complex business solutions.",
    },
    {
      icon: FaReact,
      title: "React Development",
      description:
        "Stay ahead of the curve with our React development expertise. Our team builds dynamic, responsive, and high-performing web applications using the latest React frameworks and tools. We focus on creating intuitive user interfaces that enhance user experience.",
    },
    {
      icon: FaAngular,
      title: "Angular Development",
      description:
        "Transform your ideas into reality with our Angular development services. We develop feature-rich, dynamic web applications that are both powerful and scalable. Our developers are proficient in creating seamless, high-quality Angular solutions tailored to your business needs.",
    },
    {
      icon: FaGolang,
      title: "Golang Development",
      description:
        "Experience the efficiency and performance of Golang with our specialized development services. Our team builds robust, scalable, and efficient applications using Go, ensuring optimal performance and reliability for your business needs.",
    },
    {
      icon: FaPython,
      title: "Python Development",
      description:
        "Unlock the potential of Python with our comprehensive development services. Whether it's web development, data analysis, or machine learning, our team leverages Python's versatility to create innovative and effective solutions tailored to your requirements.",
    },
    {
      icon: FaJava,
      title: "Java Development",
      description:
        "Utilize the power of Java with our expert development services. Our team develops secure, high-performance, and scalable applications for a variety of business needs. From enterprise applications to mobile solutions, we deliver robust Java solutions that meet your demands.",
    },
  ];

  return (
    <section
      id="feature"
      className="w-full lg:h-min-screen flex flex-col justify-center py-24"
    >
      <div className="text-center mb-12 ">
        <p
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-out"
          data-aos-duration="4000"
          className="text-4xl font-bold text-gradient"
        >
          Our Services
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="150"
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-16 mx-auto mb-12"
      ></div>
      <div
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 px-6 lg:px-12"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}

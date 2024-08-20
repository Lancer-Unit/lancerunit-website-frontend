import { AiOutlineDotNet } from "react-icons/ai";
import { FaAngular, FaBriefcase, FaJava, FaNode, FaPython, FaReact } from "react-icons/fa";
import { GiPublicSpeaker } from "react-icons/gi";
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
      icon: AiOutlineDotNet,
      title: "DotNet Technologies",
      description:
        "Leverage the versatility and reliability of .NET with our specialized development services. Our team delivers enterprise-grade applications that are secure, scalable, and robust. We cover everything from web applications to complex business solutions.",
    },
    {
      icon: FaReact,
      title: "Reactjs Development",
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
      icon: GiPublicSpeaker,
      title: "Interview Support",
      description:
        "At Lancer.unit we provide comprehensive end-to-end interview support to help you secure a position at leading MNCs. From personalized technical training to mock interviews to resume optimization, our services are designed to boost chances and skills and offer guidance on negotiating job offers and ensure your career success. Partner with us to navigate the interview process with expert assistance and land your dream role."  },
    {
      icon: FaJava,
      title: "Java Development",
      description:
        "Our expertise extends to popular Java frameworks like Spring and Hibernate. Whether you need assistance with Java SE or Java EE technologies, including servlets, JSP, and RESTful services, we provide comprehensive guidance and support. Our skills also include integrating Java with databases using JDBC and ORM tools, optimizing performance, and troubleshooting issues in Java-based applications.",
    },
  ];

  return (
    <section
      id="feature"
      className="w-full lg:h-min-screen flex flex-col justify-center py-24"
    >
      <div className="text-center mb-12">
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
        className="grid gap-8 lg:grid-cols-2 xl:grid-cols-3 px-6 lg:px-12 justify-center"
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

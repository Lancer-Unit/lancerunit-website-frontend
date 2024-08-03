import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Team.css";
import TeamCard from "./TeamCard";
import { FaLinkedin } from "react-icons/fa6";

const teamMembers = [
  {
    name: "Rohit Gupta",
    role: "Full Stack Developer",
    image:
      "https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg",
    socials: [
      { href: "https://facebook.com", icon: <FaFacebook /> },
      { href: "https://twitter.com", icon: <FaTwitter /> },
      {
        href: "https://www.instagram.com/lancer1_1776/",
        icon: <FaInstagram />,
      },
      {
        href: "https://www.linkedin.com/in/rohit-kansal-870527255/",
        icon: <FaLinkedin />,
      },
    ],
  },
  {
    name: "Maheen Sheikh",
    role: "Full Stack Developer",
    image:
      "https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg",
    socials: [
      { href: "https://facebook.com", icon: <FaFacebook /> },
      { href: "https://twitter.com", icon: <FaTwitter /> },
      {
        href: "https://www.instagram.com/lancer1_1776/",
        icon: <FaInstagram />,
      },
      { href: "https://linkedin.com", icon: <FaLinkedin /> },
    ],
  },
  {
    name: "Utkarsh Yadav",
    role: "Full Stack Developer",
    image:
      "https://imgcdn.stablediffusionweb.com/2024/5/4/685071ad-bd76-43fd-a055-ba4f3defa04a.jpg",
    socials: [
      { href: "https://facebook.com", icon: <FaFacebook /> },
      { href: "https://twitter.com", icon: <FaTwitter /> },
      {
        href: "https://www.instagram.com/lancer1_1776/",
        icon: <FaInstagram />,
      },
      {
        href: "https://www.linkedin.com/in/utkarsh-yadav-835859230/",
        icon: <FaLinkedin />,
      },
    ],
  },
];

export default function Team() {
  return (
    <section className="w-full lg:h-screen flex flex-col justify-center bg-gray-100 py-24" id="team">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4">Meet Our Team</h2>
        <p className="text-xl font-medium mb-8">
          The talented individuals behind Lancer Unit.
        </p>

        <div className="grid gap-8 lg:grid-cols-3 px-6 lg:px-16">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { FaLinkedin } from "react-icons/fa";

const socialLinks = [
  {
    href: "https://www.linkedin.com/company/lancerrunit/",
    icon: <FaLinkedin />,
    label: "LinkedIn",
  },
];

export default function Footer() {
  return (
    <footer className=" md:flex justify-around items-center bg-gradient p-4  text-white text-center shadow-md">
      <p>&copy; 2024 Lancer.unit. All rights reserved.</p>
      <div className="mt-4 md:mt-0 flex justify-center space-x-4">
        <p>Visit us</p>
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-2xl hover:scale-110 transition duration-300"
          >
            {icon}
          </a>
        ))}
      </div>
    </footer>
  );
}

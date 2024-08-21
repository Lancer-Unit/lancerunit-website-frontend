import Image from "next/image";
import logo from "../../assets/Logo.png";

import Link from "next/link";

const NavLink = ({ href, children }: { href: string, children: React.ReactNode}) => {
  return (
    <Link
      href={href}
      className="text-gray-700 font-semibold transition-colors duration-300 hover-text-gradient"
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex py-4 px-6">
        <div className="text-2xl font-bold flex items-center space-x-2">
          <Image src={logo} alt="Lancer.unit" className="w-10 h-10" />
          <span className="text-gradient font-extrabold">Lancer.unit</span>
        </div>
        <div className="w-full hidden md:flex flex-row justify-center items-center space-x-6 font-extrabold text-lg">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about">About Us</NavLink>
          <NavLink href="#feature">Services</NavLink>
          <NavLink href="#team">Our Team</NavLink>
          <NavLink href="#contact">Contact Us</NavLink>
        </div>
      </div>
    </nav>
  );
}

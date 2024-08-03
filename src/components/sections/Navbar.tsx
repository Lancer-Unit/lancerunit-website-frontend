import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-teal-600 flex items-center space-x-2">
          <Image src={logo} alt="Lancer.unit" className="w-10 h-10" />
          <span>Lancer.unit</span>
        </div>
        <div className="hidden lg:flex md:items-center space-x-6">
          <Link
            href="/"
            className="text-gray-700 font-semibold hover:text-teal-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-gray-700 font-semibold hover:text-teal-700 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#feature"
            className="text-gray-700 font-semibold hover:text-teal-700 transition-colors duration-200"
          >
            Features
          </Link>
          <Link
            href="#team"
            className="text-gray-700 font-semibold hover:text-teal-700 transition-colors duration-200"
          >
            Team
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 font-semibold hover:text-teal-700 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

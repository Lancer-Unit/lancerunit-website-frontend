import Link from 'next/link';
import { Bars3Icon } from '@heroicons/react/24/outline';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold text-blue-600 flex items-center space-x-2">
          <Bars3Icon className="h-6 w-6 text-blue-600" />
          <span>Lancer.Unit</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Home</div>
          </Link>
          <Link href="#about" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">About</div>
          </Link>
          <Link href="#findJobs" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Find Jobs</div>
          </Link>
          <Link href="#feature" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Features</div>
          </Link>
          <Link href="#team" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Team</div>
          </Link>
          <Link href="#contact" passHref>
            <div className="text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Contact</div>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/signup" passHref>
            <div className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 cursor-pointer">Signup</div>
          </Link>
          <Link href="/login" passHref>
            <div className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-200 cursor-pointer">Login</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

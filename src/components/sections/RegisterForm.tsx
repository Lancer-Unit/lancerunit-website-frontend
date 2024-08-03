import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/Logo.png";
import { Input } from "../ui/input";

export default function RegisterForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-1 px-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mx-auto">
        <Link href="/">
          <div className="flex items-center justify-center mb-6">
            <Image src={logo} alt="Lancer.unit" className="w-16 h-16 mr-4" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Lancer.unit
            </h2>
          </div>
        </Link>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <Input
              name="firstName"
              label="First Name"
              placeholder="Tyler"
              required={true}
            />
            <Input
              name="lastName"
              label="Last Name"
              placeholder="Durgen"
              required={true}
            />
          </div>
          <Input
            name="email"
            label="Email Address"
            required={true}
            type="email"
            placeholder="abc@gmail.com"
          />
          <Input
            name="password"
            label="Password"
            required={true}
            type="password"
            placeholder="••••••••"
          />
          <Input
            label="Confirm Your Password"
            name="confirmPassword"
            placeholder="••••••••"
            type="password"
            required={true}
          />
          <button
            type="submit"
            className="w-full py-2 px-4 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors duration-200"
          >
            Register &rarr;
          </button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <Link
            href="/login"
            className="text-sm text-teal-500 hover:text-teal-600 transition duration-200"
          >
            Already have an account? Login
          </Link>
          <Link
            href="/"
            className="text-sm text-teal-500 hover:text-teal-600 transition duration-200"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

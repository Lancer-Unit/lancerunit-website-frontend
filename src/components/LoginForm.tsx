"use client";
import React from "react";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { cn } from "@/utils/cn";
import { IconBrandGithub, IconBrandGoogle, IconBrandOnlyfans } from "@tabler/icons-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';




// Import Swiper modules from 'swiper/modules'
export function LoginForm() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center -m-1">
      <div className="flex w-full max-w-screen-2xl p-8 space-x-4 ">
        {/* Signup Form */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 ">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Into the World of Freelancing
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            Use your skills for better today, tomorrow, and beyond..
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Email Address</label>
              <input id="email" placeholder="abc@gmail.com" type="email" className="p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400" />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1">Password</label>
              <input id="password" placeholder="••••••••" type="password" className="p-2 border border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400" />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md shadow-md hover:from-teal-600 hover:to-teal-700 transition duration-200">
              Log In &rarr;
            </button>
          </form>
        </div>

                {/* Carousel */}
                <div className="hidden lg:block w-full lg:w-2/3 bg-gray-200 dark:bg-gray-700 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Our Latest Features</h2>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            loop
            className="w-full"
          >
            {/* Carousel Item */}
            <SwiperSlide className="flex-none w-64 h-48 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200">Feature 1</p>
            </SwiperSlide>
            <SwiperSlide className="flex-none w-64 h-48 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200">Feature 2</p>
            </SwiperSlide>
            <SwiperSlide className="flex-none w-64 h-48 bg-gray-300 dark:bg-gray-600 rounded-lg shadow-md flex items-center justify-center">
              <p className="text-gray-800 dark:text-gray-200">Feature 3</p>
            </SwiperSlide>
            {/* Add more slides as needed */}
          </Swiper>
        </div>

      </div>
    </div>
  );
}


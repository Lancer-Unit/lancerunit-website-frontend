"use client"
import SearchBar from "@/components/jobsections/SearchFilters";
import JobsCollection from "@/components/jobsections/Jobs";
import SocialCard from '@/components/jobsections/SocialCard';
import CompaniesCard from '@/components/jobsections/CompaniesCard'; // Import the new component
import Navbar from '@/components/sections/Navbar';
import { useState } from "react";

export default function Home() {
  const [filters, setFilters] = useState({
    experience: "",
    location: "",
    skills: "",
  });

  const onSearch = (newFilters: { experience: string; location: string; skills: string; }) => {
    setFilters(newFilters);
    // You can add additional logic here to fetch or filter jobs based on the newFilters.
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mx-auto">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold text-gray-800">
            One Stop Place for all Latest Openings in the Job Market
          </h1>
        </div>
        <div>
          <SearchBar onSearch={onSearch} />
        </div>
        <div className="flex">
          <div className="w-2/3">
            <JobsCollection />
          </div>
          <div className="w-1/3 flex flex-col gap-4">
          <SocialCard />
          <CompaniesCard />
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
}

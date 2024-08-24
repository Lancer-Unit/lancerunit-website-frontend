"use client"
import SearchBar from "@/components/jobsections/SearchFilters";
import JobsCollection from "@/components/jobsections/Jobs";
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
        <div>
          <JobsCollection />
        </div>
        {/* <Footer /> */}
      </div>
    </main>
  );
}

// src/pages/index.tsx
"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/Team';
import Contact from '../components/Contact';
import AboutUs from "../components/About";
import { HeroParallaxDemo } from '../components/HeroParallaxDemo';
import './globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <HeroParallaxDemo />
        <AboutUs />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

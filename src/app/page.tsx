// src/pages/index.tsx
"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Team from '../components/HomeSections/Team';
import Contact from '../components/HomeSections/Contact';
import About from "../components/HomeSections/About";
import Feature from "../components/HomeSections/FeatureSection";
import { HeroParallaxDemo } from '../components/HomeSections/HeroParallaxDemo';
import './globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <HeroParallaxDemo />
        <About />
        <Feature/>
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

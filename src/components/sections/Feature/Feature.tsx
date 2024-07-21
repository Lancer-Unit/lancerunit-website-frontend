// src/components/FeaturesSection.tsx
import React from 'react';
import FeatureCard from './FeatureCard';
import { FaBriefcase, FaUserCheck, FaLock, FaLifeRing } from 'react-icons/fa';
import './Feature.css';

export default function Feature(){
  const features = [
    {
      icon: FaBriefcase,
      title: 'Post a Job',
      description: 'A job posting is defined as an official advertisement created by the employer, human resources, or a recruiter to alert existing employees or job seekers regarding a job opening within the company.',
    },
    {
      icon: FaUserCheck,
      title: 'Choose Freelancers',
      description: 'No job is too big or too small. We have freelancers for jobs of any size or budget with extraordinary skills. No job is complex. We can get it done!',
    },
    {
      icon: FaLock,
      title: 'Pay Securely',
      description: "One pays for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.",
    },
    {
      icon: FaLifeRing,
      title: "We're here to help",
      description: 'Our talented team of recruiters can help you find the best freelancer for the job, and our technical co-pilots can even manage the project for you.',
    },
  ];

  return (
    <section id='feature' className="w-full bg-gray-100 py-16">
      <div className="text-center mb-12">
        <p
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-easing="ease-out"
          data-aos-duration="4000"
          className="text-4xl font-bold"
        >
          Lancer.Unit's Specialty
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-offset='150'
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="h-1 bg-gradient-to-r from-teal-500 to-blue-500 w-16 mx-auto mb-12"
      ></div>
      <div
        data-aos='fade-right'
        data-aos-offset='150'
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4 px-6 lg:px-12"
      >
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

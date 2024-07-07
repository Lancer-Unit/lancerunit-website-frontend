// src/components/Team.tsx
import React from 'react';
import TeamCard from './TeamCard';
import '../../Styles/team.css';

const teamMembers = [
  {
    name: 'Lancer2 A',
    role: 'Frontend Developer',
    image: 'https://ik.imagekit.io/lancer11776/Lancer.Units/lancer2.jpg?updatedAt=1682608749618',
    socials: [
      { href: 'https://facebook.com', icon: 'fab fa-facebook' },
      { href: 'https://twitter.com', icon: 'fab fa-twitter' },
      { href: 'https://www.instagram.com/lancer2a_786/', icon: 'fab fa-instagram' },
      { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    ],
  },
  {
    name: 'Lancer1 B',
    role: 'Full Stack Developer',
    image: 'https://ik.imagekit.io/lancer11776/Lancer.Units/lancer1.jpg?updatedAt=1682608756655',
    socials: [
      { href: 'https://facebook.com', icon: 'fab fa-facebook' },
      { href: 'https://twitter.com', icon: 'fab fa-twitter' },
      { href: 'https://www.instagram.com/lancer1_1776/', icon: 'fab fa-instagram' },
      { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    ],
  },
  {
    name: 'Lancer3 C',
    role: 'Backend Developer',
    image: 'https://ik.imagekit.io/lancer11776/Lancer.Units/lancer3.jpg?updatedAt=1682608753482',
    socials: [
      { href: 'https://facebook.com', icon: 'fab fa-facebook' },
      { href: 'https://twitter.com', icon: 'fab fa-twitter' },
      { href: 'https://www.instagram.com/lancer3_97', icon: 'fab fa-instagram' },
      { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    ],
  },
];

const Team: React.FC = () => {
  return (
    <section className="bg-white py-20" id='team'>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <p className="text-lg mb-8">The talented individuals behind Lancer Unit.</p>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              socials={member.socials}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

// src/components/Team.tsx
import React from 'react';
import TeamCard from './TeamCard';
import '../../Styles/team.css';

const teamMembers = [
  {
    name: 'Rohit Gupta',
    role: 'Frontend Developer',
    image: 'https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg',
    socials: [
      { href: 'https://facebook.com', icon: 'fab fa-facebook' },
      { href: 'https://twitter.com', icon: 'fab fa-twitter' },
      { href: 'https://www.instagram.com/lancer2a_786/', icon: 'fab fa-instagram' },
      { href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    ],
  },
  {
    name: 'Shivani Saxena',
    role: 'Full Stack Developer',
    image: 'https://cdn.pixabay.com/photo/2024/02/12/17/23/ai-generated-8569065_1280.jpg',
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
    image: 'https://imgcdn.stablediffusionweb.com/2024/5/4/685071ad-bd76-43fd-a055-ba4f3defa04a.jpg',
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
        <h2 className="text-4xl font-extrabold mb-4">Meet Our Team</h2>
        <p className="text-xl font-medium mb-8">The talented individuals behind Lancer Unit.</p>

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

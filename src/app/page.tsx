
import AboutSection from '@/components/sections/About';
import ContactUs from '@/components/sections/Contact';
import Feature from '@/components/sections/Feature/Feature';
import Footer from '@/components/sections/Footer';
import HeroParallax from '@/components/sections/Home';
import Navbar from '@/components/sections/Navbar';
import Team from '@/components/sections/Team/Team';
import Testimonial from '@/components/sections/Testimonial'
import './globals.css';

const testimonials = [
  {
    quote:
      "I enjoyed my getting Job Support from Rohit. I started as a fresher , new to Software domain at Age of 35. I’m a campus hire. At the start, everything was new to me. There were many things that I did not know despite enrolling in Bootcamps but here I got a chance to learn them. Within a few months, I started working on projects best thing I could ever ask for as a fresher",
    name: "Aayesha Sana ",
    role: "Senior Software Engineer at HSBC ",
    imgSrc: "https://i.pravatar.cc/120?img=1",
  },
  {
    quote:
      "I was highly impressed by level of expertise and professionalism that this freelancer has. The work progressed very nicely and very quickly indeed, and the quality was of a high standard. I would very much recommend any one working with this freelancer, especially as they have shown a high level of commitment and flexibility. Their understanding of the needs and their communication to ensure they understand the requirements was particularly visible and well executed. More projects have already come up with relation to this project, that I felt quite happy ",
    name: "Harpreet Kaur",
    role: "Founder @Billbay , Canada",
    imgSrc: "https://i.pravatar.cc/120?img=10",
  },
  {
    quote:
      " Utkarsh is an incredible professional. He constantly communicates with you and works hard on solving any issues you have, as well as the ones that present while trying to solve the main problem. He's always on time and respect budget. We will for sure work with him in any future inconvenients we experience with our website. 100% recommend him.",
    name: "Hector Benjamin",
    role: "Freelancer at EPIC Healthcare",
    imgSrc: "https://i.pravatar.cc/120?img=9",
  },
  {
    quote:
      " I started earning some money using my skill with the Team , helped me to pay my collge fees , I got to work on various project and also have to complete on time. Company has given me chance to work on various large projects and large team and I have successfully finished the same. I have learned so many new technologies and asp.net features during this tenure and have successfully finished all the tasks assigned to me",
    name: "Kushagra Patel",
    role: "College Grad",
    imgSrc: "https://i.pravatar.cc/120?img=7",
  },
  {
    quote:
      "Very happy with their work. They are attention to detail, always in communication and keep you updated with every step of the way. Very impressive. Definitely would recommend their service.",
    name: "Kevin Johnson",
    role: "Senior Developer at Kroger",
    imgSrc: "https://i.pravatar.cc/120?img=8",
  },
  {
    quote:
      "Great long time work with updating and adding features to .Net Core Admin application! Thanks. good experience with LancerUnit Team. Thanks you Looking for long term cooperation with same dedication ",
    name: "Chace Rodgers",
    role: "Freelancer ",
    imgSrc: "https://i.pravatar.cc/120?img=2",
  },
  
];


const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <HeroParallax />
        <AboutSection />
        <Feature />
        <Team />
        <Testimonial testimonials={testimonials} />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

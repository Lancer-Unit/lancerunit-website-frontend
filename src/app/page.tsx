import AboutSection from '@/components/sections/About';
import ContactUs from '@/components/sections/Contact';
import Feature from '@/components/sections/Feature/Feature';
import Footer from '@/components/sections/Footer';
import HeroParallax from '@/components/sections/HeroParallax';
import Navbar from '@/components/sections/Navbar';
import Team from '@/components/sections/Team/Team';
import './globals.css';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-between">
        <HeroParallax />
        <AboutSection />
        <Feature />
        <Team />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

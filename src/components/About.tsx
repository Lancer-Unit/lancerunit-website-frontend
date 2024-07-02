// components/AboutSection.tsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="w-full my-4 py-20 bg-gray-100" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">About Us</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Lancer unit is your go-to platform for finding and offering freelance services. 
            Whether you're a freelancer looking to offer your skills or a business seeking 
            top-notch freelance talent, we provide a seamless and efficient experience.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold">Our Features</h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 mb-8">
            Discover what sets Lancer unit apart from other freelancing platforms.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Feature
              title="User-Friendly Interface"
              description="Our platform is designed with simplicity and ease of use in mind, ensuring a smooth experience for all users."
              icon="🖥️"
            />
            <Feature
              title="Secure Payments"
              description="We ensure secure and timely payments through our robust payment processing system."
              icon="💳"
            />
            <Feature
              title="Verified Freelancers"
              description="Our freelancers are vetted and verified to provide top-quality services."
              icon="✔️"
            />
            <Feature
              title="24/7 Support"
              description="We offer around-the-clock support to assist you with any issues or queries."
              icon="🕒"
            />
            <Feature
              title="Wide Range of Services"
              description="From web development to graphic design, find experts across various fields."
              icon="🛠️"
            />
            <Feature
              title="Competitive Pricing"
              description="Get the best value for your money with competitive pricing for all services."
              icon="💰"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutSection;

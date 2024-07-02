// src/components/Signup/Signup.tsx
import React from 'react';
import Template from '../Template';
import signupImg from "../../assets/signup.webp";

const Signup: React.FC = () => {
  return (
    <Template
      title="Join the millions to Earn Millions for free"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Future-proof your career."
      image={signupImg}
      formType="signup"
    />
  );
};

export default Signup;

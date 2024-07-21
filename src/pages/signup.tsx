// src/pages/Signup.tsx
"use client";
import React from "react";
import { SignupForm } from "../components/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 m-1 ">
      <SignupForm />
    </div>
  );
};

export default SignupForm;

// src/pages/Signup.tsx
"use client";
import React from "react";
import { SignupFormDemo } from "../components/SignupFormDemo";

const SignupPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <SignupFormDemo />
    </div>
  );
};

export default SignupPage;

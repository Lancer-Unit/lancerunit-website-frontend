// src/pages/Login.tsx
"use client";
import React from "react";
import { LoginFormDemo } from "../components/LoginFormDemo";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <LoginFormDemo />
    </div>
  );
};

export default LoginPage;

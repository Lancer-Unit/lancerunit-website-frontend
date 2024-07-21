// src/pages/Login.tsx
"use client";
import React from "react";
import { LoginForm } from "../components/LoginForm";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <LoginForm />
    </div>
  );
};

export default LoginPage;

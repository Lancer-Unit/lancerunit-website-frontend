// src/components/Signup/SignupForm.tsx
import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';


const SignupForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input fields, state, and form submission logic here
  // (Code commented out in the example)

  return (
    <div>
      {/* Form elements and logic here */}
      <form className="flex w-full flex-col gap-y-4">
        {/* Form inputs */}
        <label>
          <p>First Name *</p>
          <input type="text" placeholder="Enter first name" />
        </label>
        <label>
          <p>Last Name *</p>
          <input type="text" placeholder="Enter last name" />
        </label>
        <label>
          <p>Email Address *</p>
          <input type="email" placeholder="Enter email address" />
        </label>
        <label className="relative">
          <p>Create Password *</p>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        <label className="relative">
          <p>Confirm Password *</p>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirm password"
          />
          <span
            onClick={() => setShowConfirmPassword((prev) => !prev)}
            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
          >
            {showConfirmPassword ? (
              <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
            ) : (
              <AiOutlineEye fontSize={24} fill="#AFB2BF" />
            )}
          </span>
        </label>
        {/* Submit button */}
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;

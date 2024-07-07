// src/components/ContactUs.tsx
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="h-screen flex items-center justify-center bg-purple-200">
      <div className="container mx-auto p-4 max-w-md bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold mb-4 text-center">Contact Us</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-100 p-2">John Doe</p>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-100 p-2">john.doe@example.com</p>
          </div>
          <div>
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <p className="mt-1 block w-full border-gray-300 rounded-md shadow-sm sm:text-sm bg-gray-100 p-2">Your message here...</p>
          </div>
        </div>
      </div>
    </section>
  );
}

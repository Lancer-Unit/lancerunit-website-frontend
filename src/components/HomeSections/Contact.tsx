// src/components/ContactUs.tsx
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <section id="contact" className="w-full bg-gray-100 py-16">
      <div className="text-center mb-12">
        <p
          data-aos='fade-left'
          data-aos-offset='200'
          data-aos-easing="ease-out"
          data-aos-duration="4000"
          className="text-4xl font-bold"
        >
          Contact Us
        </p>
      </div>
      <div
        data-aos='fade-left'
        data-aos-offset='150'
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="h-1 bg-gradient-to-r from-teal-500 to-blue-500 w-16 mx-auto mb-12"
      ></div>
      <div
        data-aos='fade-right'
        data-aos-offset='150'
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="container mx-auto px-6 lg:px-12"
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm p-2"
                required
              />
            </div>
            <div>
              <label className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm sm:text-sm p-2"
                rows={4}
                required
              ></textarea>
            </div>
            <div className="text-center">
            <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-md shadow-md hover:from-teal-600 hover:to-teal-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
          data-aos="fade-left"
          data-aos-offset="200"
          data-aos-easing="ease-out"
          data-aos-duration="4000"
          className="text-4xl font-bold"
        >
          Contact Us
        </p>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="150"
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="h-1 bg-gradient-to-r from-teal-500 to-blue-500 w-16 mx-auto mb-12"
      ></div>
      <div
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-out"
        data-aos-duration="4000"
        className="container mx-auto px-6 lg:px-12"
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              handleChange={handleChange}
              required={true}
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={formData.email}
              handleChange={handleChange}
              required={true}
            />
            <TextArea
              label="Message"
              name="message"
              value={formData.message}
              required={true}
              handleChange={handleChange}
            />
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md shadow-md hover:from-teal-600 hover:to-teal-700 transition duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

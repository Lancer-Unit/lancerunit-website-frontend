"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { TextArea } from "../ui/textarea";

interface FieldConfig {
  name: string;
  type: string;
  label: string;
  required: boolean;
}

const fieldsConfig: FieldConfig[] = [
  { name: "name", type: "text", label: "Full Name", required: true },
  { name: "email", type: "email", label: "Email", required: true },
  { name: "message", type: "textarea", label: "Message", required: true },
];

export default function ContactUs() {
  const [formData, setFormData] = useState<Record<string, string>>(
    fieldsConfig.reduce((acc, field) => {
      acc[field.name] = "";
      return acc;
    }, {} as Record<string, string>)
  );

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbwKeHzyF2gADpvsT3nNFwiQn6RSJcMjJ54stxAiQC6K81g1Rvf7CCrF3ujt6bQN9SocaA/exec";
    fetch(scriptURL, { method: "POST", body: JSON.stringify(formData) })
      .then((response) => response.json())
      .then(() => setIsSubmitted(true))
      .catch(() =>
        setErrorMessage("An error occurred. Please try again.")
      );
  };

  const handleSendAnother = () => {
    setIsSubmitted(false);
    setFormData(
      fieldsConfig.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
      }, {} as Record<string, string>)
    );
  };

  return (
    <section id="contact" className="w-full lg:h-screen flex flex-col py-24">
      <div>
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
          className="h-1 bg-gradient-to-r from-blue-500 to-blue-500 w-16 mx-auto mb-12"
        ></div>
        <div
          data-aos="fade-right"
          data-aos-offset="150"
          data-aos-easing="ease-out"
          data-aos-duration="4000"
          className="container mx-auto px-6 lg:px-12"
        >
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
            {isSubmitted ? (
              <div className="text-center">
                <div className="bg-green-500 text-white border border-black-600 rounded-md p-4 mb-4">
                  Thank you for your message! We will get back to you soon.
                </div>
                <button
                  onClick={handleSendAnother}
                  className="w-full py-2 px-4 bg-gradient text-white rounded-md shadow-md hover:scale-110 transition duration-300"
                >
                  Send Another Message
                </button>
              </div>
            ) : errorMessage ? (
              <div className="bg-red-100 text-red-800 border border-red-300 rounded-md p-4 mb-4">
                {errorMessage}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {fieldsConfig.map((field) =>
                  field.type === "textarea" ? (
                    <TextArea
                      key={field.name}
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      required={field.required}
                      handleChange={handleChange}
                    />
                  ) : (
                    <Input
                      key={field.name}
                      type={field.type}
                      label={field.label}
                      name={field.name}
                      value={formData[field.name]}
                      handleChange={handleChange}
                      required={field.required}
                    />
                  )
                )}
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-gradient text-white rounded-md shadow-md hover:scale-110 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

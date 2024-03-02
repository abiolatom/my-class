"use client";
import { RegistrationFormProps } from "@/lib/definition";
import { FormData } from "@/lib/definition";
import React, { useState } from "react";
import { skillLevels } from "@/lib/definition";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
    skillLevel: "",
    additionalInfo: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div min-h-screen items-center justify-center>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <section className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              className="rounded-md border border-gray-300 
            px-3 py-2 focus:outline-none focus:border-sky-500"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium">
              Enter your email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone Number: Intl format
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="country" className="text-sm font-medium">
              Enter current country of residence
            </label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="city" className="text-sm font-medium">
              Enter city
            </label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500"
            />
          </div>
        </section>
        <section className="flex flex-col space-y-2">
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Finnish Skills</h1>
            <label htmlFor="skillLevel" className="text-sm font-medium mt-2">
              Define your Finnish Skill Level
            </label>
            <select
              id="skillLevel"
              name="skillLevel"
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500 appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                How do you classify your Finnish Skill Level?
              </option>
              {skillLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="additionalInfo" className="text-sm font-medium">
              Additional Information:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              placeholder="Have some additional information for us?"
              onChange={handleChange}
              required
              className="rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-sky-500 resize-none"
            ></textarea>
          </div>
        </section>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-sky-500 text-white font-medium hover:bg-sky-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;

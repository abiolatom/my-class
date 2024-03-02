"use client";
import { ContactFormProps } from "@/lib/definition";
import { FormData } from "@/lib/definition";
import React, { useState } from "react";


const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phoneNumber: "",
    country: "",
    city: "",
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
    <form onSubmit={handleSubmit}>
      <section>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="Phone Number: Intl format"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="country"
            name="country"
            placeholder="Enter current country of residence"
            value={formData.country}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Enter city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </section>
      <section>
        {" "}
        <div>
          <h1> Finnish Skills</h1>
        </div>
        <div>
          <label htmlFor="additionalInfo">Additional Information:</label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            required
          ></textarea>
        </div>
      </section>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;

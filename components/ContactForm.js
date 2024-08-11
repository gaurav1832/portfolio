require("dotenv").config();

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_hbv5p9o";
const EMAILJS_TEMPLATE_ID = "template_y54bao9";
const PUBLIC_KEY = "sMrk67vY3eOrK3GJJ";

const ContactForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const templateParams = {
    to_name: "Gaurav",
    from_name: formData.name,
    sender_email: formData.email,
    subject: formData.subject,
    message: formData.message,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to send message, please try again later.");
          console.log(error);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} ref={form} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
        />
      </div>
      <div>
        <label className="block text-sm font-medium">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          rows="4"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="bg-amber-300 text-black px-4 py-2 rounded-md"
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;

import React from "react";
import ContactForm from "../components/ContactForm";
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto mt-2 bg-transparent shadow-md rounded-lg">
      <button
        onClick={() => router.push("/")}
        className="mb-4 text-amber-200 hover:text-amber-300"
      >
        &larr; Home
      </button>
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      <div className="mb-8">
        <h2 className=" flex flex-col justify-center text-2xl font-semibold mb-4">
          Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d56225.458556443125!2d75.77341222416992!3d28.265252539855016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1723302967426!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          width="100%"
          height="350px"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

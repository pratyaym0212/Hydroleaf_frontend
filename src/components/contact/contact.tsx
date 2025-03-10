'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Image from 'next/image';

import contactus from '../../../public/images/Contactus.png';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus('Please fill out all fields.');
      setLoading(false);
      return;
    }

    try {
      console.log('Sending email:', {
        name: trimmedName,
        email: trimmedEmail,
        message: trimmedMessage,
      });

      await emailjs.send(
        'service_3cz4i1h',
        'template_bdnjc81',
        {
          to_name: 'Hydroleaf',
          from_name: trimmedName,
          message: trimmedMessage,
          reply_to: trimmedEmail,
        },
        '3oGq6Ov_cS_txejuB' // Replace with your actual EmailJS public key
      );

      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error); // Detailed error logging
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-8 md:flex-row">
      {/* Left Side - Image */}
      <div className="flex w-full justify-center md:w-1/2">
        <Image
          src={contactus}
          alt="Contact Us"
          className="w-full rounded-lg shadow-lg md:w-3/4 lg:w-2/3"
          priority
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="mt-6 w-full rounded-lg bg-white p-6 shadow-lg md:mt-0 md:w-1/2 md:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2 block font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2 block font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-2 block font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-green-600 p-3 font-medium text-white transition duration-300 hover:bg-green-700"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <p
            className={`mt-4 text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

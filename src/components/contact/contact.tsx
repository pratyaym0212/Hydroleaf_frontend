'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';
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

    try {
      console.error(name, message, email
      );
      await emailjs.send("service_3cz4i1h","template_bdnjc81",{
        to_name: "Hydroleaf",
        from_name: name,
        message: message,
        reply_to: email,
        }, '3oGq6Ov_cS_txejuB');
      setStatus('Message sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);  // Log the error for debugging
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100 min-h-screen">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <Image
          src={contactus}
          alt="Contact Us"
          className="w-full md:w-3/4 lg:w-2/3 rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-white p-6 md:p-8 rounded-lg shadow-lg mt-6 md:mt-0">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded-lg font-medium hover:bg-green-700 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <p className={`mt-4 text-center ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {status}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;

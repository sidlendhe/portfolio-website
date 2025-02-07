import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full p-2 border rounded"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            className="w-full p-2 border rounded"
            placeholder="Your Message"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
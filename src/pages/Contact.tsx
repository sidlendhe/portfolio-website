import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400">Let's Connect</h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-lg font-semibold transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                📧
              </div>
              <div>
                <h3 className="font-bold">Email</h3>
                <p className="text-gray-400">siddheshlendhe35@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                📱
              </div>
              <div>
                <h3 className="font-bold">Phone</h3>
                <p className="text-gray-400">041-121-9586</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-blue-600 p-3 rounded-lg">
                🔗
              </div>
              <div>
                <h3 className="font-bold">LinkedIn</h3>
                <p className="text-gray-400">linkedin.com/in/siddhesh-lendhe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
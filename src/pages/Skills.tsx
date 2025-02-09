import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400">Technical Arsenal</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">🔧 Automation Tools</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Selenium</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Cucumber</span>
              <span className="bg-blue-600 px-3 py-1 rounded-full text-sm">Postman</span>
            </div>
          </div>

          {/* DevOps */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">🛠️ DevOps</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Kubernetes</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Docker</span>
              <span className="bg-purple-600 px-3 py-1 rounded-full text-sm">Jenkins</span>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">💻 Languages</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Java</span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-green-600 px-3 py-1 rounded-full text-sm">C#</span>
            </div>
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mt-12 bg-gray-800 p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold mb-6">🌟 Professional Skills</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Test Strategy Design</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Agile Methodology</span>
            </div>
            {/* Add more skills */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-400">Professional Journey</h1>
        
        {/* Timeline */}
        <div className="space-y-12">
          {/* CitrusAd */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-blue-600">
            <h2 className="text-2xl font-bold mb-2">🧪 CitrusAd - Software Test Engineer</h2>
            <p className="text-gray-400 mb-4">06/2022 - Present | Brisbane</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Designed Selenium Java automation frameworks with Cucumber</li>
              <li>Implemented Kubernetes-based CI/CD pipelines in GCP</li>
              <li>Conducted API testing with Postman and Swagger</li>
            </ul>
          </div>

          {/* MYP Corp */}
          <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border-l-4 border-purple-600">
            <h2 className="text-2xl font-bold mb-2">🤖 MYP Corporation - QA Automation Engineer</h2>
            <p className="text-gray-400 mb-4">11/2021 - 06/2022 | Brisbane</p>
            <ul className="list-disc pl-6 space-y-3 text-gray-300">
              <li>Developed C# automation scripts with Selenium</li>
              <li>Managed Azure DevOps pipelines</li>
              <li>Optimized test case efficiency by 40%</li>
            </ul>
          </div>

          {/* Add other experiences similarly */}
        </div>
      </div>
    </div>
  );
};

export default Experience;
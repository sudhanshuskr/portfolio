import React from 'react';

function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Contact Me</h2>
        
        {/* Profile Picture and Info */}
        <div className="flex flex-col items-center mb-12">
          <img 
            src="/portfolio/images/profile-photo.jpg" // Replace with your actual image URL
            alt="Profile Picture" 
            className="rounded-full w-64 h-64 object-cover mb-4 border-4 border-amber-300"
          />
          <p className="text-2xl text-gray-800">Sudhanshu Shankar</p>
        </div>
        
        {/* Email IDs */}
        <div className="mb-6">
          <p className="text-lg text-gray-700">You can reach me at:</p>
          <div className="space-x-4 mt-2">
            <a 
              href="mailto:sudhanshuskr2000@gmail.com" 
              className="text-blue-500 hover:text-blue-700"
            >
              sudhanshuskr2000@gmail.com
            </a>
            <span> | </span>
            <a 
              href="mailto:sshankar@ucsd.edu" 
              className="text-blue-500 hover:text-blue-700"
            >
              sshankar@ucsd.edu
            </a>
          </div>
        </div>
        
        {/* LinkedIn and GitHub Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {/* LinkedIn Button */}
          <a 
            href="https://www.linkedin.com/in/sudhanshu-shankar-a60180197/" // Replace with your LinkedIn URL
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
          >
            LinkedIn
          </a>
          
          {/* GitHub Button */}
          <a 
            href="https://github.com/sudhanshuskr" // Replace with your GitHub URL
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-900 transition duration-300"
          >
            GitHub
          </a>
        </div>
        
        {/* Address Section */}
        <div className="text-gray-700 mb-12">
          <p className="text-lg font-medium">Address:</p>
          <p className="text-md">Raleigh, NC, USA</p> {/* Replace with your actual address */}
        </div>
      </div>
    </section>
  );
}

export default Contact;

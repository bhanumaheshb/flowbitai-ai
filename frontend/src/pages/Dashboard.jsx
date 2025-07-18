import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-200 to-pink-300 flex">
      
      {}
      <div className="w-64 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <ul className="space-y-4">
          <li className="flex items-center p-2 rounded-lg hover:bg-indigo-100 transition duration-200">
            <svg className="w-6 h-6 text-indigo-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M3 18h18" />
            </svg>
            <Link to="/support-tickets" className="text-indigo-700 font-semibold">Support Tickets</Link>
          </li>
          <li className="flex items-center p-2 rounded-lg hover:bg-indigo-100 transition duration-200">
            <svg className="w-6 h-6 text-indigo-700 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h-4v4h-4v-4H4l8-8 8 8z" />
            </svg>
            <Link to="/contact" className="text-indigo-700 font-semibold">Contact</Link>
          </li>
          {}
        </ul>
      </div>

      {}
      <div className="flex-1 p-6">
        <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <span className="bg-indigo-200 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">BETA</span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-2">
                Welcome to <span className="text-indigo-700">Flowbit</span> 
              </h1>
              <p className="text-gray-700 text-lg md:text-xl">
                Your all-in-one workspace for seamless workflow management, team collaboration, and productivity tracking.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Real-time analytics and reporting</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Customizable workflows for your team</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Secure, tenant-aware environment</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-indigo-200 p-2 rounded-full">
                  <svg className="w-6 h-6 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-800 text-lg">Integrated communication tools</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-8 rounded-lg transition duration-200 text-lg">
                Explore Features
              </button>
              <Link to="/support-tickets" className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-3 px-8 rounded-lg transition duration-200 text-lg">
                Request Tickets 
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
              alt="Dashboard Analytics" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

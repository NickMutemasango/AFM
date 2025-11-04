"use client";

import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-14 h-8 bg-gray-200 rounded-full animate-pulse"></div>
    );
  }

  return (
    <button
      onClick={toggleDarkMode}
      className={`
        relative w-14 h-8 rounded-full p-1 transition-all duration-500 ease-in-out
        focus:outline-none focus:ring-2 focus:ring-[#0747A1] dark:focus:ring-blue-400
        ${isDarkMode ? 'bg-blue-600' : 'bg-gray-300'}
        overflow-hidden
      `}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {/* Background Stars for Dark Mode */}
      <div className={`
        absolute inset-0 transition-opacity duration-500
        ${isDarkMode ? 'opacity-100' : 'opacity-0'}
      `}>
        <div className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full"></div>
        <div className="absolute top-3 left-4 w-0.5 h-0.5 bg-white rounded-full"></div>
        <div className="absolute top-5 left-3 w-0.5 h-0.5 bg-white rounded-full"></div>
      </div>

      {/* Toggle Knob with Flip Animation */}
      <div
        className={`
          relative w-6 h-6 bg-white rounded-full shadow-lg
          transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}
          ${isDarkMode ? 'rotate-y-180' : ''}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front side (Sun) */}
        <div className={`
          absolute inset-0 flex items-center justify-center transition-opacity duration-300
          ${isDarkMode ? 'opacity-0' : 'opacity-100'}
        `}>
          <svg 
            className="w-3 h-3 text-yellow-500"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Back side (Moon) */}
        <div className={`
          absolute inset-0 flex items-center justify-center transition-opacity duration-300
          ${isDarkMode ? 'opacity-100' : 'opacity-0'}
          transform rotate-y-180
        `}>
          <svg 
            className="w-3 h-3 text-blue-600"
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
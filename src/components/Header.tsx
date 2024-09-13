import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/path/to/logo.png" alt="Logo" className="h-10" />
        <h1 className="text-red-500">Tailwind Test</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:underline">The Problem</a></li>
          <li><a href="#" className="hover:underline">Our Solution</a></li>
        </ul>
      </nav>
      <div>
        <button className="bg-blue-700 px-4 py-2 rounded">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;

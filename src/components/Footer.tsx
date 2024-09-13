import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white p-8">
      <div className="flex justify-between">
        <div>
          <img src="/path/to/logo.png" alt="Logo" className="h-10" />
          <p className="mt-4">International Justice Mission</p>
        </div>
        <div>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:underline">
                Follow us on Twitter
              </a>
            </li>
            {/* Add more social media links */}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

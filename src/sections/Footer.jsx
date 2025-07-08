import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-6 px-4 md:px-10 mt-16">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-700 pb-6">
        {/* Logo/Company Name */}
        <div>
          <h1 className="text-2xl font-bold text-red-500">AryanTech</h1>
          <p className="text-sm text-gray-400 mt-2">Building Future-Ready Web Experiences</p>
        </div>

        {/* Links */}
        <div className="flex gap-12 flex-wrap">
          <div>
            <h2 className="text-lg font-semibold text-red-500 mb-2">Company</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Careers</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-red-500 mb-2">Services</h2>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href="#" className="hover:text-red-500">Web Dev</a></li>
              <li><a href="#" className="hover:text-red-500">App Dev</a></li>
              <li><a href="#" className="hover:text-red-500">Consulting</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-red-500"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#" className="text-gray-400 hover:text-red-500"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="#" className="text-gray-400 hover:text-red-500"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#" className="text-gray-400 hover:text-red-500"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          <a href="#" className="text-gray-400 hover:text-red-500"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-500 mt-6">
        © {new Date().getFullYear()} AryanTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

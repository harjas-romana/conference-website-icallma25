import { motion } from 'framer-motion';
import { FaTwitter, FaLinkedin, FaFacebook, FaYoutube, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/additionalData';

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Tracks", href: "#tracks" },
  { name: "Speakers", href: "#speakers" },
  { name: "Registration", href: "#registration" },
  { name: "Contact", href: "#contact" }
];

const resources = [
  { name: "Call for Papers", href: "#" },
  { name: "Program Schedule", href: "#" },
  { name: "Submission Guidelines", href: "#" },
  { name: "Travel Information", href: "#" },
  { name: "Accommodation", href: "#" },
  { name: "FAQ", href: "#faq" }
];

export const Footer = () => {
  return (
    <footer className="w-full bg-[#1a0f2e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* About Conference */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">ICALLMA 2024</h3>
            <p className="text-gray-400 text-sm">
              International Conference on Advancement in Large Language Models and Applications
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm flex items-center space-x-2">
                <FaEnvelope className="text-blue-400" />
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {socialLinks.email}
                </a>
              </p>
              <p className="text-gray-400 text-sm">
                VIT Bhopal University
                <br />
                Bhopal-Indore Highway
                <br />
                Madhya Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ICALLMA. All rights reserved.
            </p>
            <div className="mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm mx-4">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

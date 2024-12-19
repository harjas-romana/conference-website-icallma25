import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import './Navbar.css';

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Committee',
    children: [
      { label: 'Chief Patron', path: '/committee/chief-patron' },
      { label: 'Patron', path: '/committee/patron' },
      { label: 'Co-Patron', path: '/committee/co-patron' },
      { label: 'General Chairs', path: '/committee/general-chairs' },
      { label: 'General Co-Chairs', path: '/committee/general-co-chairs' },
      { label: 'Honorary Chairs', path: '/committee/honorary-chairs' },
      { label: 'Program Chair', path: '/committee/program-chair' },
      { label: 'Chief Convenor', path: '/committee/chief-convenor' },
      { label: 'Convenor', path: '/committee/convenor' },
      { label: 'Keynote Speakers', path: '/committee/keynote-speakers' },
      { label: 'Steering Committee', path: '/committee/steering-committee' },
      { label: 'Organising Committee', path: '/committee/organising-committee' },
      { label: 'Advisory', path: '/committee/advisory' },
      { label: 'Technical Program Committee', path: '/committee/technical-program-committee' },
    ],
  },
  {
    label: 'Conference',
    children: [
      { label: 'Call For Papers', path: '/conference/call-for-papers' },
      { label: 'Important Dates', path: '/conference/important-dates' },
      { label: 'Program', path: '/conference/program' },
      { label: 'Venue', path: '/conference/venue' },
      { label: 'Tracks', path: '/about/tracks' },
      { label: 'Who Should Join', path: '/about/who-should-join' },
      { label: 'FAQ', path: '/about/faq' },
      { label: 'Benefits', path: '/about/benefits' },
    ],
  },
  {
    label: 'Registration',
    children: [
      { label: 'Fee Structure', path: '/registration/fee-structure' },
      { label: 'Guidelines', path: '/registration/guidelines' },
      { label: 'Register', path: '/registration/register' },
    ],
  },
  { label: 'Research', path: '/research' },
  {
    label: 'Speakers',
    children: [
      { label: 'Guest Speakers', path: '/speakers/guest' },
      { label: 'Keynote Speakers', path: '/speakers/keynote' },
      { label: 'Session Chairs', path: '/speakers/session-chairs' },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'Designed By', path: '/about/designed-by' },
      { label: 'Infrastructure', path: '/about/infrastructure' },
      { label: 'Institution', path: '/about/institution' },
      { label: 'Vision & Mission', path: '/about/vision-mission' },
      { label: 'About Conference', path: '/about/about-conference' },
    ],
  },
  { label: 'Contact Us', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setClickedDropdown(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (!clickedDropdown) setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    if (!clickedDropdown) setActiveDropdown(null);
  };

  const handleClick = (label: string) => {
    setClickedDropdown(clickedDropdown === label ? null : label);
    setActiveDropdown(clickedDropdown === label ? null : label);
  };

  const isDropdownActive = (label: string) => activeDropdown === label || clickedDropdown === label;

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ICALLMA 2025
        </Link>

        <div className="navbar-links" ref={dropdownRef}>
          {navItems.map((item) => (
            <div
              key={item.label}
              className="nav-item-container"
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {item.path ? (
                <Link
                  to={item.path}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleClick(item.label)}
                  className={`nav-link ${isDropdownActive(item.label) ? 'active' : ''}`}
                >
                  {item.label}
                  <motion.div
                    className={`dropdown-arrow ${isDropdownActive(item.label) ? 'active' : ''}`}
                    initial={false}
                  >
                    <FaChevronDown />
                  </motion.div>
                </button>
              )}

              {item.children && (
                <AnimatePresence>
                  {isDropdownActive(item.label) && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ 
                        duration: 0.2,
                        ease: "easeOut"
                      }}
                      className={`dropdown-menu ${isDropdownActive(item.label) ? 'active' : ''}`}
                    >
                      {item.children.map((child, index) => (
                        <motion.div
                          key={child.path}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ 
                            duration: 0.2,
                            delay: index * 0.05,
                            ease: "easeOut"
                          }}
                        >
                          <Link
                            to={child.path}
                            className="dropdown-item"
                            onClick={() => setClickedDropdown(null)}
                          >
                            {child.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <button className="navbar-mobile-menu md:hidden">
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

// src/components/MobileMenuBar.jsx

import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaChevronDown, FaHome, FaInfoCircle, FaShoppingCart, FaEnvelope } from 'react-icons/fa';
import { RiContactsFill } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { SiPowerpages } from "react-icons/si";

const MobileMenuBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const menuRef = useRef(null);

  const menuItems = [
    { title: 'Home', icon: <FaHome />, link: '/' },
    {
      title: 'Pages',
      icon: <SiPowerpages />,
      subMenu: [
        { title: 'Contact', link: '/contact' },
        { title: 'Projects', link: '/portfolio' },
      ],
    },
    { title: 'Blog', icon: <FaInfoCircle />, link: '/about' },
    { title: 'Projects', icon: <GoProjectSymlink />, link: '/portfolio' },
    { title: 'Contact', icon: <RiContactsFill />, link: '/contact' },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full bg-gradient-to-r text-white md:hidden"
      ref={menuRef}
      role="navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-12 py-8">
        {/* <div className="text-2xl font-bold">Logo</div> */}
        <button
          className="rounded-md p-2 text-white focus:outline-none focus:ring-2 focus:ring-white"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle menu"
        >
          <FaBars className="h-10 w-10 text-black" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 top-full min-h-[30rem] w-full bg-gradient-to-r from-purple-600 to-indigo-500 shadow-lg">
          <ul className="space-y-5 px-7 pt-10">
            {menuItems.map((item, index) => (
              <li key={index} className="relative text-[1.5rem]">
                {item.subMenu ? (
                  <div>
                    <button
                      className="flex w-full items-center justify-between rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={() => toggleDropdown(index)}
                      aria-expanded={activeDropdown === index}
                    >
                      <span className="flex items-center">
                        {item.icon}
                        <span className="ml-2">{item.title}</span>
                      </span>
                      <FaChevronDown
                        className={`ml-2 transform transition-transform duration-200 ${
                          activeDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === index && (
                      <ul className="mt-2 space-y-2 pl-6">
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white hover:bg-opacity-20"
                            >
                              {subItem.title}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="flex items-center rounded-md px-3 py-2 transition-colors duration-200 hover:bg-white hover:bg-opacity-20"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default MobileMenuBar;

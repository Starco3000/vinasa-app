import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../data/mockNavItemData';
import ButtonLanguage from './ButtonLanguage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faBars,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="absolute top-0 right-0 md:my-3">
      <nav className="flex flex-col items-end md:relative top-full left-0 right-0 md:border-0 border-[#ccc]">
        <div className="md:hidden p-3 w-fit">
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            onClick={handleToggle}
          />
        </div>
        <ul
          className={`md:flex md:items-center ${
            isOpen ? 'block' : 'hidden'
          } bg-white md:bg-transparent`}
        >
          {navItems.map((item) => (
            <li
              key={item.id}
              className="relative float-left group w-full md:w-auto"
            >
              <NavLink
                to={item.path}
                className="text-sm uppercase p-2 mx-1 text-black block font-semibold group-hover:text-gold transition border-b-2
                border-transparent group-hover:border-gold cursor-pointer duration-500 ease-in-out"
              >
                {item.title}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 group-hover:rotate-180 group-hover:text-gold hover:ml-1 transition-all duration-300 ease-in-out"
                />
              </NavLink>
              {/* If nav-item have submenu == true => call sublinks*/}
              {item.submenu && (
                <ul className="relative md:absolute left-0 w-full md:w-[200px] bg-white hidden md:group-hover:block group-hover:block">
                  {item.sublinks.map((subitem) => (
                    <li
                      key={subitem.id}
                      className="w-full border-b-[1px] border-[#ccc] text-sm font-semibold text-black p-3 md:p-5 hover:bg-mint hover:text-white"
                    >
                      <NavLink to={subitem.path} className="hover:text-sm">
                        {subitem.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <ButtonLanguage />
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

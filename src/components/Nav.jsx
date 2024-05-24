import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="w-3/5 flex justify-end">
        <div className="hidden w-full justify-between mr-[34px] md:flex pr-10">
          <NavLink

            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to="/gioithieuchung"

          >
            Giới thiệu
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"

            to=""
          >
            Quyền lợi
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"

            to=""
          >
            Danh sách đề cử 2023
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"

            to=""
          >
            Tin tức
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to="/faq"

          >
            FAQs
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to="/contact"

          >
            Liên hệ
          </NavLink>
          <NavLink
            className="font-open-sans font-semibold text-sm uppercase hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"

            to=""
          >
            Lang
          </NavLink>
        </div>

        <div className="md:hidden pr-4">
          <button onClick={toggleNavbar}>
            {isOpen ? (
              <FontAwesomeIcon icon={faX} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="h-auto bg-baby-blue flex basis-full flex-col items-center py-3 gap-3">
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Giới thiệu
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Quyền lợi
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate2400 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Danh sách đề cử 2023
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Tin tức
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""

          >
            FAQs
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Liên hệ
          </NavLink>
          <NavLink
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to=""
          >
            Lang
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Nav;

import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-1/2 flex justify-end">
        <div className="hidden w-full justify-between mr-[34px] md:flex">
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to=""
          >
            Giới thiệu
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to=""
          >
            Quyền lợi
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to=""
          >
            Danh sách đề cử 2023
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to="/new"
          >
            Tin tức
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to="/FAQ"
          >
            FAQs
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
            to=""
          >
            Liên hệ
          </NavLink>
          <NavLink
            className="font-open-sans font-medium text-[18px] hover:text-gold transition border-b-2 border-transparent hover:border-gold cursor-pointer duration-500 ease-in-out"
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
            // onClick={() => {
            //   navigate("/test-navigate");
            // }}
            spy={true}
            smooth={true}
            className="p-4 w-[300px] font-open-sans font-medium text-center text-white text-base border-b border-slate-200 hover:bg-mint hover:rounded-lg transition duration-500 ease-in-out"
            to="/test-navigate"
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

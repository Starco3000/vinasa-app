import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faListCheck,
  faPeopleGroup,
  faHandshake,
  faClipboard,
} from '@fortawesome/free-solid-svg-icons';

const HomeOptions = () => {
  return (
    <div className="flex justify-center gap-3 lg:gap-[80px] ">
      <div className="flex flex-col items-center gap-2 lg:gap-6">
        <NavLink
          className="flex flex-col items-center justify-center bg-white w-[70px] h-[45px] lg:w-[210px] lg:h-[150px] shrink-0 border-4 border-mint rounded-10 lg:rounded-30 text-center lg:mt-[50px]"
          to="/hoatdong"
        >
          <FontAwesomeIcon
            icon={faListCheck}
            className="text-xl lg:text-8xl text-custom-green"
          />
        </NavLink>
        <p className="text-xs text-center lg:text-2xl font-semibold uppercase">
          Hoạt động
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-6">
        <NavLink
          className="flex flex-col items-center justify-center bg-white w-[70px] h-[45px] lg:w-[210px] lg:h-[150px] shrink-0 border-4 border-mint rounded-10 lg:rounded-30 text-center lg:mt-[50px]"
          to="/judges"
        >
          <FontAwesomeIcon
            icon={faPeopleGroup}
            className="text-xl lg:text-8xl text-custom-green"
          />
        </NavLink>
        <p className="text-xs text-center lg:text-2xl font-semibold uppercase">
          Hội đồng
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-6">
        <NavLink
          className="flex flex-col items-center justify-center bg-white w-[70px] h-[45px] lg:w-[210px] lg:h-[150px] shrink-0 border-4 border-mint rounded-10 lg:rounded-30 text-center lg:mt-[50px]"
          to="/projectorder"
        >
          <FontAwesomeIcon
            icon={faClipboard}
            className="text-xl lg:text-8xl text-custom-green"
          />
        </NavLink>
        <p className="text-xs text-center text-wrap lg:text-2xl font-semibold uppercase">
          Dự án doanh nghiệp
        </p>
      </div>
      <div className="flex flex-col items-center gap-2 lg:gap-6">
        <NavLink
          className="flex flex-col items-center justify-center bg-white w-[70px] h-[45px] lg:w-[210px] lg:h-[150px] shrink-0 border-4 border-mint rounded-10 lg:rounded-30 text-center lg:mt-[50px]"
          to="/participating"
        >
          <FontAwesomeIcon
            icon={faHandshake}
            className="text-xl lg:text-8xl text-custom-green"
          />
        </NavLink>
        <p className="text-xs text-center lg:text-2xl font-semibold uppercase">
          Đơn vị tham gia
        </p>
      </div>
    </div>
  );
};

export default HomeOptions;

import React from 'react';
import Subbanner from '../assets/imgs/sub-banner.png';

const SubBanner = ({ title }) => {
  return (
    <div className="relative">
      <img
        className="w-full h-40 md:h-[356px] mt-[-84px] md:mt-[-103px]"
        src={Subbanner}
        alt="Sub banner"
      />
      <div className="absolute inset-x-0 top-[50%] md:inset-y-0 flex items-center justify-center">
        <h1 className="font-nunito-sans font-semibold text-base md:text-[52px] uppercase text-white text-center tracking-[1.4px]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SubBanner;

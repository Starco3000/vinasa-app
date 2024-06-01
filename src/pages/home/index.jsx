import React from 'react';

import Banner from '../../assets/imgs/banner.png';
import './Home.css';
import HomeSlider from './HomeSlider';
import { slides } from '../../data/mockData';
import HomeOptions from './HomeOptions';
import HomeEventDesc from './HomeEventDesc';
import HomeTimer from './HomeTimer';
import Reason from '../../assets/imgs/intro.jpg';
import SixteenTypes from '../../assets/imgs/16-linh-vuc-du-thi.png';
import Sponsor1 from '../../assets/imgs/sponsor1.png';
import Sponsor2 from '../../assets/imgs/sponsor2.png';

function Home() {
  return (
    <div className="w-full h-full font-open-sans ">
      <div className="relative">
        <img
          className="w-full h-auto lg:mt-[-100px] mt-[-80px]"
          src={Banner}
          alt="banner"
        />
        <button className="absolute lg:left-[300px] lg:top-[650px] left-[95px] top-[160px] lg:w-72 lg:h-14 w-52 h-11 bg-gradient-to-r from-yellow-400 via-emerald-200 to-blue-400 rounded-3xl font-semibold lg:text-2xl text-lg text-center text-white uppercase ">
          Tham gia ngay
        </button>
      </div>
      <div className="flex flex-col justify-center items-center w-full shrink-0 gap-[50px] mt-4 px-6 lg:mt-0 lg:mx-0">
        <HomeOptions />
        <HomeEventDesc />
      </div>
      <div className=" mt-16 px-3 lg:px-[133px]">
        <div>
          <img
            className="w-full h-[150px] lg:h-auto object-fill"
            src={Reason}
            alt="tại sao"
          />
        </div>
        <HomeSlider data={slides} />
      </div>
      <div className="w-full flex justify-center items-center lg:px-[133px] my-4 lg:my-24">
        <img
          className="w-full lg:h-[600px] object-scale-down"
          src={SixteenTypes}
          alt="16 lĩnh vực"
        />
      </div>
      <div className="flex justify-center items-center my-4 lg:my-24">
        <HomeTimer />
      </div>
      <div className="lg:relative w-full h-[250px] lg:h-340 flex flex-col justify-center items-start my-3 lg:my-30">
        <img
          src={Sponsor1}
          alt="Đơn vị tổ chức-Cơ quan bảo trợ"
          className="sponsor1 lg:absolute lg:w-90 lg:h-340 "
        />
        <img
          src={Sponsor2}
          alt="Nhà tài trợ"
          className="sponsor2 lg:absolute lg:w-597 lg:h-200 items-center bg-cover bg-no-repeat   lg:mt-8 lg:ml-432 object-scale-down "
        />
      </div>
    </div>
  );
}

export default Home;

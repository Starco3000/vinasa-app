import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../assets/imgs/vietfuture-trang.png';
import logo2 from '../assets/imgs/vietfuture-den.png';

const Logo = () => {
  const [logoImage, setLogoImage] = useState(logo1);

  const checkScroll = () => {
    const scrollPosition = window.scrollY;
    const pointB = 250; // Điểm B

    // Nếu người dùng cuộn đến điểm B, thay đổi hình ảnh logo
    if (scrollPosition > pointB) {
      setLogoImage(logo2);
    } else {
      setLogoImage(logo1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <div className="md:w-1/5 h-[70px] w-[130px] object-cover md:h-[100px] py-5 md:py-3 md:ml-15 flex items-center">
      <NavLink to="">
        <img src={logoImage} alt="Logo" />
      </NavLink>
    </div>
  );
};

export default Logo;

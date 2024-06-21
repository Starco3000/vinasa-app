import React, { useState, useEffect } from 'react';
import logo1 from '../../assets/imgs/vietfuture-trang.png';
import logo2 from '../../assets/imgs/vietfuture-den.png';
import { NavLink } from 'react-router-dom';

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
    <NavLink to="/">
      <img
        className="w-auto h-11 md:h-16 "
        src={logoImage}
        alt="logo vietfuture"
      />
    </NavLink>
  );
};

export default Logo;

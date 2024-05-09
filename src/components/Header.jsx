import React, { useState, useEffect } from 'react';
import Logo from './Logo';
// import Navbar from './Navbar';
import Nav from './Nav';

const Header = () => {
  const [opacity, setOpacity] = useState(0); // Khởi tạo opacity là 0
  const [textColor, setTextColor] = useState('white');

  const checkScroll = () => {
    const scrollPosition = window.scrollY;
    const pointA = 0; // Điểm A
    const pointB = 300; // Điểm B

    // Tính toán giá trị opacity dựa trên vị trí cuộn của trang
    const calculatedOpacity = (scrollPosition - pointA) / (pointB - pointA);
    setOpacity(calculatedOpacity);

    // Tính toán màu chữ dựa trên vị trí cuộn của trang
    const calculatedTextColor = scrollPosition > pointB ? 'black' : 'white';
    setTextColor(calculatedTextColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header
      className="sticky top-0 z-50 mx-auto w-full h-[70px] flex flex-wrap items-center justify-between md:flex-nowrap md:justify-between  md:h-[100px]"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        color: textColor,
      }}
    >
      <Logo />
      <Nav />
    </header>
  );
};

export default Header;

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
  const [opacity, setOpacity] = useState(0); // Khởi tạo opacity là 0
  const [textColor, setTextColor] = useState('white');

  const checkScroll = () => {
    const scrollPosition = window.scrollY;
    const pointA = 0; // Điểm A
    const pointB = 300; // Điểm B
    const pointC = 150; // Điểm C

    // Tính toán giá trị opacity dựa trên vị trí cuộn của trang
    const calculatedOpacity = (scrollPosition - pointA) / (pointB - pointA);
    setOpacity(calculatedOpacity);

    // Tính toán màu chữ dựa trên vị trí cuộn của trang
    const calculatedTextColor = scrollPosition > pointC ? 'black' : 'white';
    setTextColor(calculatedTextColor);
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);

    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);
  return (
    <div
      className="sticky top-0 left-0 right-0 py-3 font-open-sans md:py-5 md:px-[5%] flex flex-wrap justify-between items-center z-[10000]"
      style={{
        backgroundColor: `rgba(255, 255, 255, ${opacity})`,
        color: textColor,
      }}
    >
      <div className="relative w-full">
        <Logo />
        <Navbar />
      </div>
    </div>
  );
};

export default Header;

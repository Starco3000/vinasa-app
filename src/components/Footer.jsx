import React from 'react';
import { NavLink } from 'react-router-dom';
import Facebook from '../assets/imgs/facebook-icon.png';
import Youtube from '../assets/imgs/youtube-icon.png';
import Linkedin from '../assets/imgs/linkedin.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full h-full  bg-gradient-to-b from-turquoise to-baby-blue">
      <div className="flex flex-col md:flex-row pt-[60px] pb-[40px] md:pb-[80px] md:mx-[133px] mx-[40px]">
        {/* LEFT SIDE */}
        <div className="md:w-[490px] md:mr-[180px]">
          <h1 className="font-open-sans font-bold text-[24px] md:text-[30px] text-white">
            VỀ CHÚNG TÔI
          </h1>
          <p className="font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 mt-[17px] mb-[37px]">
            Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA) là một tổ chức
            phi chính phủ họat động phi lợi nhuận, đại diện cho ngành phần mềm
            và dịch vụ CNTT Việt Nam với mục đích tăng cường hợp tác, hỗ trợ và
            bảo vệ quyền lợi của các hội viên. VINASA được thành lập vào ngày
            27/04/2002.
          </p>
          <h2 className="font-open-sans font-bold text-justify text-white text-[18px] tracking-[0.5] leading-6.5">
            Theo dõi chúng tôi tại
          </h2>
          <div className="flex justify-start mt-[14px] mb-14 md:mb-0">
            <NavLink>
              <img
                src={Facebook}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '5px',
                  margin: '5px 10px 5px 5px',
                }}
                alt="Facebook"
              />
            </NavLink>
            <NavLink>
              <img
                src={Youtube}
                style={{
                  width: '30px',
                  height: '24px',
                  borderRadius: '5px',
                  margin: '5px 10px 5px 5px',
                }}
                alt="Youtube"
              />
            </NavLink>
            <NavLink>
              <img
                src={Linkedin}
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '5px',
                  margin: '5px 10px 5px 5px',
                }}
                alt="Linkedin"
              />
            </NavLink>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="font-open-sans font-bold text-[24px] md:text-[30px] text-white">
            THÔNG TIN LIÊN HỆ
          </h1>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ color: 'white', width: '24px', height: '24px' }}
            />
            <p className="w-[377px] font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 ml-4 mt-[17px] mb-[13px]">
              Tầng 11, Tòa nhà Cung Trí Thức thành phố Số 01 Tôn Thất Thuyết,
              Cầu Giấy, Hà Nội
            </p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faPhone}
              style={{ color: 'white', width: '24px', height: '24px' }}
            />
            <div className="flex flex-col">
              <p className="font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 ml-4 mt-[13px]">
                Điện thoại: (024) 3577 2336 - 3577 2338{' '}
              </p>
              <p className="font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 ml-4 mb-[13px]">
                Fax: (024) 3577 2337
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faEnvelope}
              style={{ color: 'white', width: '24px', height: '24px' }}
            />
            <p className="font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 ml-4 my-[13px]">
              Email: contact@vinasa.org.vn
            </p>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon
              icon={faGlobe}
              style={{ color: 'white', width: '24px', height: '24px' }}
            />
            <p className="font-open-sans font-semibold text-justify text-white text-[18px] tracking-[0.5] leading-6.5 ml-4 my-[13px]">
              Website: www.vinasa.org.vn
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

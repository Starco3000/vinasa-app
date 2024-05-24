import React,{ useState, useEffect } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import './Home.css';
import { Autoplay,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';




function Home() {
//---------------------- SLIDER--------------------------------//
//---------------------- TIMER--------------------------------//
const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.436875)); // average month length
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.436875)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ months, days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "EXPIRED";
        setCountdown({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };

    return (
    <div className="Home text-center font-exo2 flex-col mt-15 mr-15 ml-15 md:max-lg:flex">
        <div className="Home1 bg-custom-green w-90 h-55 shrink-0 my-30 mx-15">
            <div className="branding justify-center flex m-15 gap-x-10">
                <div className="branding1">
                    <div className="brand-img bg-custom-light-gray m-15 w-15 h-0.9 shrink-0 rounded-30 text-center"></div>
                    <div className="brand-cap mt-2.5 font-exo2 text-2xl font-normal "><b>HOẠT ĐỘNG</b></div>
                </div>
                <div className="branding2">
                    <div className="brand-img bg-custom-light-gray m-15 w-15 h-0.9 shrink-0 rounded-30 text-center"></div>
                    <div className="brand-cap mt-2.5 font-exo2 text-2xl font-normal"><b>HỘI ĐỒNG</b></div>
                </div>
                <div className="branding3">
                    <div className="brand-img bg-custom-light-gray m-15 w-15 h-0.9 shrink-0 rounded-30 text-center"></div>
                    <div className="brand-cap mt-2.5 font-exo2 text-2xl font-normal"><b>DỰ ÁN DOANH NGHIỆP</b></div>
                </div>
                <div className="branding4">
                    <div className="brand-img  bg-custom-light-gray m-15 w-15 h-0.9 shrink-0 rounded-30 text-center"></div>
                    <div className="brand-cap mt-2.5 font-exo2 text-2xl font-normal"><b>ĐƠN VỊ THAM GIA</b></div>
                </div>
            </div>
            <div className="caption text-center w-73 h-31 shrink-0 rounded-50 bg-custom-gray mt-1% ml-10%">
                <div className="caption-title text-center w-43 h-57 rounded-50 bg-custom-green inline-block pt-13 text-2xl text-white font-extrabold m-5%">VietFuture Award 2024 - Giải thưởng sáng tạo tương lai</div>
                <div className="caption-text">
                    <p className='text-justify text-xl mx-200'><b>VietFuture Award 2024 - Giải thưởng sáng tạo tương lai</b> là giải thưởng dành cho các dự án khởi nghiệp Đổi mới sáng tạo của sinh viên các trường đại học, cao đẳng trên cả nước và các dự án theo đặt hàng từ doanh nghiệp, các dự án R&D của các trường Đại học/Cao đẳng muốn thương mại hoá.</p>
                    <br/>
                    <p className='text-justify text-xl mx-200'><b>Giải thưởng</b> này thu hút sự quan tâm của cá nhân và nhóm nghiên cứu để giải quyết các bài toán thực tiễn, thúc đẩy khởi nghiệp tại trường đại học và hỗ trợ doanh nghiệp tìm kiếm ý tưởng mới và tài năng.</p>
                </div>
            </div>
        </div>
        <div className="Home2 w-90 h-882 my-30 mx-15" >
            <div className="banner">
                <img className="w-full" src="   /images/intro.jpg" alt="tại sao" />
            </div>
            <div className="slider-container object-cover h-72 mt-8">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                clickable: true,
                }}
                modules={[Autoplay,Pagination]}
                className="mySwiper w-11/12 h-11/12"
            >
                <SwiperSlide><img className='object-cover h-72' src="/images/award.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award4.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award3.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award4.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award3.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award4.jpg" alt="award" /></SwiperSlide>
                <SwiperSlide><img className='object-cover h-72' src="/images/award3.jpg" alt="award" /></SwiperSlide>
            </Swiper>
            </div>
       
        </div>
        <div className="Home3 w-90 h-882 text-center flex justify-center items-center my-30 mx-15">
                <img className="w-90 h-882" src="./images/16.jpg" alt="16 lĩnh vực" />
        </div>
        <div className="Home4 positive flex my-30 mx-15 w-90 h-450 ">
            <img className="absolute w-90 h-450 items-center " src="./images/background.jpg" alt="background" />
            <div className="timer absolute text-white w-878 h-208 shadow-custom mt-32 bg-custom-gradient ml-300">
                <h1 className='p-0'>
                    <ul className='pt-2.5 flex list-none mr-3.5 mx-24 my-12 gap-x-2.5  font-sans'>
                        <li className=" "><span className='flex text-white text-center text-7xl font-bold'>{formatNumber(countdown.months)}</span><span className='text-lg'>MONTHS</span></li> <svg className='aligns-center mt-20' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z" fill="white"/>
                            </svg>
                        <li><span className='flex text-white text-center  text-7xl font-bold'>{formatNumber(countdown.days)}</span><span className='text-lg'>DAYS</span></li> <svg className='aligns-center mt-20' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z" fill="white"/>
                            </svg>
                        <li><span className='flex text-white text-center  text-7xl font-bold'>{formatNumber(countdown.hours)}</span><span className='text-lg'>HOURS</span></li> <svg className='aligns-center mt-20' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z" fill="white"/>
                            </svg>
                        <li><span className='flex text-white text-center  text-7xl font-bold'>{formatNumber(countdown.minutes)}</span><span className='text-lg'>MINUTES</span></li> <svg className='aligns-center mt-20' xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none">
                            <path d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z" fill="white"/>
                            </svg>
                        <li><span className='flex text-white text-center  text-7xl font-bold'>{formatNumber(countdown.seconds)}</span><span className='text-lg'>SECONDS</span></li>
                    </ul>
                </h1>
            </div>
        </div>
        <div className="Home5 relative w-full h-340 flex justify-content items-center mb-0 my-30 mx-15">
                <img src="/images/sponsor1.png" alt="Đơn vị tổ chức-Cơ quan bảo trợ" className="sponsor1 absolute w-90 h-340"/>
                <img src="/images/sponsor2.png" alt="Nhà tài trợ" className="sponsor2 absolute w-597 h-200 items-center bg-cover bg-no-repeat mt-8 ml-432"/>
        </div>
    </div>
    );
}

export default Home;

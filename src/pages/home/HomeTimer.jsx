import React, { useState, useEffect } from 'react';
import BackgroundTimer from '../../assets/imgs/Backgorund.png';

const HomeTimer = () => {
  const [countdown, setCountdown] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countDownDate = new Date('Jan 1, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.436875)); // average month length
      const days = Math.floor(
        (distance % (1000 * 60 * 60 * 24 * 30.436875)) / (1000 * 60 * 60 * 24),
      );
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ months, days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        document.getElementById('timer').innerHTML = 'EXPIRED';
        setCountdown({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (number) => {
    return number.toString().padStart(2, '0');
  };
  return (
    <div className="relative flex justify-center items-center w-full h-[200px] lg:h-450 ">
      <img
        className="absolute w-full h-[200px] lg:w-90 lg:h-450 items-center backdrop-blur-sm"
        src={BackgroundTimer}
        alt="background"
      />
      <div className="absolute text-white w-11/12 h-[160px] lg:w-878 lg:h-208 shadow-custom  bg-gradient-to-b from-turquoise to-baby-blue ">
        <ul className="pt-2.5 flex flex-wrap justify-center items-center list-none lg:mr-3.5 lg:mx-24 lg:my-12 gap-x-2.5 text-center">
          <li className=" ">
            <span className="flex flex-col text-white text-center text-2xl lg:text-7xl font-bold">
              {formatNumber(countdown.months)}
            </span>
            <span className="text-lg">MONTHS</span>
          </li>
          <svg
            className="aligns-center mt-20"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z"
              fill="white"
            />
          </svg>
          <li>
            <span className="flex flex-col text-white text-center  text-2xl lg:text-7xl font-bold">
              {formatNumber(countdown.days)}
            </span>
            <span className="text-lg">DAYS</span>
          </li>
          <svg
            className="aligns-center mt-20"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z"
              fill="white"
            />
          </svg>
          <li>
            <span className="flex flex-col text-white text-center text-2xl lg:text-7xl font-bold">
              {formatNumber(countdown.hours)}
            </span>
            <span className="text-lg">HOURS</span>
          </li>
          <svg
            className="aligns-center mt-20"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z"
              fill="white"
            />
          </svg>
          <li>
            <span className="flex flex-col text-white text-center text-2xl lg:text-7xl font-bold">
              {formatNumber(countdown.minutes)}
            </span>
            <span className="text-lg">MINUTES</span>
          </li>
          <svg
            className="aligns-center mt-20"
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
          >
            <path
              d="M22.5023 18.45C23.1523 18.4498 23.7959 18.3214 24.3964 18.0724C24.9968 17.8234 25.5423 17.4585 26.0018 16.9986C26.4612 16.5388 26.8256 15.9929 27.0741 15.3923C27.3226 14.7916 27.4503 14.1478 27.45 13.4978C27.4497 12.8478 27.3214 12.2041 27.0723 11.6037C26.8233 11.0032 26.4584 10.4577 25.9986 9.99828C25.5387 9.53884 24.9929 9.17447 24.3922 8.92598C23.7915 8.6775 23.1478 8.54975 22.4978 8.55005C21.1849 8.55065 19.9261 9.07273 18.9982 10.0015C18.0704 10.9302 17.5494 12.1895 17.55 13.5023C17.5506 14.8151 18.0727 16.0739 19.0014 17.0018C19.9301 17.9297 21.1894 18.4506 22.5023 18.45ZM22.5023 26.55C21.1888 26.55 19.9292 27.0718 19.0005 28.0005C18.0718 28.9293 17.55 30.1889 17.55 31.5023C17.55 32.8157 18.0718 34.0753 19.0005 35.0041C19.9292 35.9328 21.1888 36.4545 22.5023 36.4545C23.8157 36.4545 25.0753 35.9328 26.004 35.0041C26.9327 34.0753 27.4545 32.8157 27.4545 31.5023C27.4545 30.1889 26.9327 28.9293 26.004 28.0005C25.0753 27.0718 23.8157 26.55 22.5023 26.55Z"
              fill="white"
            />
          </svg>
          <li>
            <span className="flex flex-col text-white text-center  text-2xl lg:text-7xl font-bold">
              {formatNumber(countdown.seconds)}
            </span>
            <span className="text-lg">SECONDS</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomeTimer;

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SubBanner from '../../components/SubBanner';
import { projectData } from '../../data/mockProjectData';
import ProjectCard from './ProjectCard';

const ProjectOrder = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Kiểm tra kích thước màn hình để xác định có phải là dạng mobile hay không
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768, //moblie breakpoint
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  // Hàm xử lý khi click vào một ProjectCard
  const handleProjectCardClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <div>
      <SubBanner title="Dự án được đặt hàng từ doanh nghiệp" />
      <div className="w-full h-auto bg-[#A3D0DF]">
        <div className="py-[40px] px-[30px]">
          {isMobile ? (
            // Nếu là dạng mobile, sử dụng Slider
            <Slider {...settings}>
              {projectData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectCardClick}
                />
              ))}
            </Slider>
          ) : (
            // Nếu không phải dạng mobile, hiển thị các ProjectCard thông thường
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-[60px]">
              {projectData.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={handleProjectCardClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      {selectedProject && (
        <div className="w-full h-full bg-white pt-[80px] px-6 md:px-[133px]">
          <div className="md:w-4/5 w-full h-[2px] bg-[gold] md:mx-[180px]"></div>
          <h2 className="mt-[46px] mb-[62px] font-open-sans font-bold text-2xl md:text-5xl text-center">
            {selectedProject.name}
          </h2>
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-[90px]">
            <img
              className="md:w-[500px] md:h- object-top"
              src={selectedProject.img}
              alt={selectedProject.name}
            />
            <div className="flex flex-col items-center overflow-auto">
              <p className="font-open-sans font-normal text-lg md:text-2xl tracking-tight text-justify">
                {selectedProject.desc}
              </p>
              <button className="w-full md:w-[350px] h-12 md:h-[70px] bg-[gold] opacity-70 rounded-[50px] font-open-sans font-semibold text-2xl my-5 md:my-12 hover:bg-turquoise hover:text-white transition duration-300 ease-in-out">
                Đăng ký ngay
              </button>
            </div>
          </div>

          <div className="md:w-full mt-2 md:mt-[60px] md:ml-4 pb-24 md:pb-[200px]">
            <table className="table-auto ">
              <tbody>
                <tr>
                  <td className="font-open-sans font-semibold text-lg md:text-3xl tracking-tight w-2/5 border-r-2 md:border-r-[3px] border-gold align-top">
                    Tên công ty:
                  </td>
                  <td className="font-open-sans font-normal text-black text-lg md:text-3xl tracking-tight pl-4 md:pl-[80px] w-3/5">
                    {selectedProject.company}
                  </td>
                </tr>
                <tr>
                  <td className="font-open-sans font-semibold text-lg md:text-3xl tracking-tight pt-[50px] w-2/5 border-r-2 md:border-r-[3px] border-gold align-top">
                    Thời gian thực hiện:
                  </td>
                  <td className="font-open-sans font-normal text-black text-lg md:text-3xl tracking-tight pt-[50px] pl-4 md:pl-[80px] w-3/5">
                    {selectedProject.deadline}
                  </td>
                </tr>
                <tr>
                  <td className="font-open-sans font-semibold text-lg md:text-3xl tracking-tight pt-[50px] w-2/5 border-r-2 md:border-r-[3px] border-gold align-top">
                    Yêu cầu dự án:
                  </td>
                  <td className="font-open-sans font-normal text-black text-lg md:text-3xl text-justify tracking-tight pt-[50px] pl-4 md:pl-[80px] w-3/5">
                    {selectedProject.desc}
                  </td>
                </tr>
                <tr>
                  <td className="font-open-sans font-semibold text-lg md:text-3xl tracking-tight pt-[50px] w-2/5 border-r-2 md:border-r-[3px] border-gold align-top">
                    Giải thưởng:
                  </td>
                  <td className="font-open-sans font-normal text-black text-lg md:text-3xl tracking-tight pt-[50px] pl-4 md:pl-[80px] w-3/5">
                    {selectedProject.price}
                  </td>
                </tr>
                <tr>
                  <td className="font-open-sans font-semibold text-lg md:text-3xl tracking-tight pt-[50px] w-2/5 border-r-2 md:border-r-[3px] border-gold align-top">
                    Nhóm lĩnh vực:
                  </td>
                  <td className="font-open-sans font-normal text-black text-lg md:text-3xl tracking-tight pt-[50px] pl-4 md:pl-[80px] w-3/5">
                    {selectedProject.requirements}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectOrder;

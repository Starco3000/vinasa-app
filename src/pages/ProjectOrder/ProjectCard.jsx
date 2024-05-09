import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({ project, onClick }) => {
  const { name, company, type, deadline, price, img } = project;

  const handleClick = () => {
    onClick(project);
  };
  return (
    <div
      className="md:w-[300px] h-[420px] bg-[#FAF5FC] rounded-[25px] mx-2 cursor-pointer"
      onClick={handleClick}
    >
      <div className="w-full h-[200px] bg-[#FAF5FC] px-[10px] pt-[10px] rounded-[25px] ">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover rounded-[25px]"
        />
      </div>
      <div className="w-full py-4 px-[10px]">
        <h3 className="h-[40px] md:h-[48px] font-open-sans font-semibold text-[15px] md:text-base text-justify mb-4">
          {name}
        </h3>
        <p className="font-open-sans font font-normal text-base md:text-sm mb-3">
          {company}
        </p>
        <p className="h-[40px] font-open-sans font font-normal text-base md:text-sm mb-3">
          <FontAwesomeIcon icon={faBookOpen} /> {type}
        </p>
        <div className="border-b border-[gold]"></div>
        <div className="flex justify-between mt-3">
          <p className="font-open-sans font font-normal text-base md:text-sm ">
            {price}
          </p>
          <p className="font-open-sans font font-normal text-base md:text-sm ">
            {deadline}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';
import './Judges.css';

const PersonalCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[40px] lg:gap-[80px] px-[31px] py-5 lg:py-[100px]">
      {data.map((person) => (
        <div className="" key={person.id}>
          <div className="image-bolder bg-custom-cyan w-250 h-330 px-[15px] pt-[15px]">
            <div className="image">
              <img src={person.img} alt={person.alt} />
            </div>
            <div className="image-caption text-left pt-[17px]">
              <p className="bold">{person.name}</p>
              <p className="light">{person.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PersonalCard;

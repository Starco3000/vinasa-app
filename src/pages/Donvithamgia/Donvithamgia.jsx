import React from 'react';
import {
  participatingUnits,
  cooperatingUnits,
  accompanyingUnits,
} from '../../const/images';
import './Donvithamgia.css';
import SubBanner from '../../components/SubBanner';

const Participating = () => {
  return (
    <div className="content">
      <SubBanner title="Đơn vị tham gia" />
      <div className="participating-units text-center mt-5">
        <h1 className="blue font-open-sans font-bold text-3xl">
          Danh sách các trường đại học và đơn vị tham gia năm 2023
        </h1>
        <div className="logos">
          {participatingUnits.map((unit, index) => (
            <img key={index} src={unit.logoUrl} alt={unit.alt} />
          ))}
        </div>
      </div>
      <div className="Donvithamgia text-center mt-20  ">
        <h2 className="font-open-sans font-bold text-3xl">Đơn vị phối hợp</h2>
        <div className="logos">
          {cooperatingUnits.map((unit, index) => (
            <img key={index} src={unit.logoUrl} alt={unit.alt} />
          ))}
        </div>
      </div>
      <div className="Donvithamgia text-center mt-10">
        <h2 className="font-open-sans font-bold text-3xl">Đơn vị đồng hành</h2>
        <div className="logos">
          {accompanyingUnits.map((unit, index) => (
            <img key={index} src={unit.logoUrl} alt={unit.alt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Participating;

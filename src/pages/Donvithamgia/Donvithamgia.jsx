import React from "react";
import {
  participatingUnits,
  cooperatingUnits,
  accompanyingUnits,
} from "../../const/images";
import "./Donvithamgia.css";

const Participating = () => {
  return (
    <div className="content">
      <div className="App participating-units text-center ">
        <h1 className="blue ">
          Danh sách các trường đại học và đơn vị tham gia năm 2023
        </h1>
        <div className="logos">
          {participatingUnits.map((unit, index) => (
            <img key={index} src={unit.logoUrl} alt={unit.alt} />
          ))}
        </div>
      </div>
      <div className="Donvithamgia text-center  ">
        <h2 className="font-semibold">Đơn vị phối hợp</h2>
        <div className="logos">
          {cooperatingUnits.map((unit, index) => (
            <img key={index} src={unit.logoUrl} alt={unit.alt} />
          ))}
        </div>
      </div>
      <div className="Donvithamgia text-center">
        <h3 className="font-semibold">Đơn vị đồng hành</h3>
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

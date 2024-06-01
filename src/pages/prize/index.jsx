import React from 'react';
import './Prize.css';
import Prize from '../../assets/imgs/prize.png';
import SubBanner from '../../components/SubBanner';

function PrizePage() {
  return (
    <div>
      <SubBanner title="Cơ cấu giải thưởng" />
      <div className="prize">
        <img src={Prize} alt="Cơ cấu giải thưởng" className="center-image" />
      </div>
    </div>
  );
}

export default PrizePage;

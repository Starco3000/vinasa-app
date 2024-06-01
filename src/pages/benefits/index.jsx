import React from 'react';
import './Benefits.css'; // Đảm bảo đã import CSS
import Benefit from '../../assets/imgs/quyenloi.png';
import SubBanner from '../../components/SubBanner';

function Benefits() {
  return (
    <div className="w-full">
      <SubBanner title="Quyền lợi tham gia" />
      <div className="benefits">
        <img src={Benefit} alt="Quyền lợi" className="center-image" />
      </div>
    </div>
  );
}

export default Benefits;

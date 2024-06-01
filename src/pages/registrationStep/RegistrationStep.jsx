import React from 'react';
import './RegistrationStep.css';
import RegistrasionStep from '../../assets/imgs/registration.png';
import SubBanner from '../../components/SubBanner';

function RegistrationStep() {
  return (
    <div>
      <SubBanner title="Quy trình đăng ký" />
      <div className="prize">
        <img
          src={RegistrasionStep}
          alt="Quy trình đăng ký"
          className="center-image"
        />
      </div>
    </div>
  );
}

export default RegistrationStep;

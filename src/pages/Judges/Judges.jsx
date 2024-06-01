import React from 'react';
import './Judges.css';
import SubBanner from '../../components/SubBanner';
import PersonalCard from './PersonalCard';
import { judges } from '../../data/mockData';

function Judges() {
  return (
    <div>
      <SubBanner title="Hội đồng" />
      <div className="w-full text-left font-open-sans flex flex-col items-center justify-center my-30 md:max-lg:flex">
        <div className="top-section h-full  bg-custom-white flex flex-col lg:flex-row w-90 lg:h-669 max-w-full pl-5% px-6 lg:px-[112px]">
          <div className="left-section flex-1 leading-loose ">
            <h1 className="text-black text-3xl lg:text-custom font-bold not-italic tracking-normal lg:tracking-custom leading-4 pt-10 lg:pt-28 lg:ml-[39px] ">
              GIỚI THIỆU
            </h1>
            <h2 className="text-black text-2xl lg:text-5xl font-light not-italic tracking-custom1 leading-10 mt-2 lg:mt-6  lg:ml-[39px]">
              CHUNG
            </h2>
          </div>
          <div className="right-section flex-1 mt-10  lg:mt-[150px] ">
            <p className="p1 text-black text-justify text-lg lg:text-xl tracking-wide leading-7">
              Hội đồng bình chọn do VINASA thành lập, gồm các chuyên gia về
              những lĩnh vực chuyên môn, đại diện các cơ quan quản lý, cơ quan
              báo chí… Hội đồng bình chọn có nhiệm vụ nghiên cứu, đánh giá từng
              hồ sơ, dựa trên kết quả thuyết trình của doanh nghiệp để lựa chọn
              các giải pháp, dịch vụ đạt Giải thưởng Sao Khuê. Để đảm bảo tính
              khách quan, chính xác, Hội đồng bình chọn tổ chức Vòng thuyết
              trình dành cho các doanh nghiệp trình bày trực tiếp với Hội đồng
              đánh giá.
            </p>
            <p className="p2 my-[40px] text-black text-justify text-lg lg:text-xl tracking-wide leading-7 ">
              Tại vòng thuyết trình, Hội đồng đánh giá chấm điểm thuyết trình
              của doanh nghiệp theo bảng tiêu chí, đánh giá, chấm điểm của
              chương trình.
              <br />
              Tại Hội nghị Chung tuyển, trưởng nhóm đánh giá của từng Hội đồng
              báo cáo kết quả thuyết trình của doanh nghiệp về các giải pháp,
              dịch vụ ứng cử, Hội đồng quyết định theo nguyên tắc đa số.
            </p>
          </div>
        </div>
        <div className="bottom-section text-white w-fullscreen-custom h-auto bg-custom-gradient1 max-w-full flex flex-col items-center justify-center">
          <div className="relative -left-[95px] lg:-left-[463px]">
            <h1 className="pt-14 lg:pt-28 text-white text-3xl lg:text-custom not-italic font-bold leading-4 tracking-normal lg:tracking-custom">
              HỘI ĐỒNG
            </h1>
            <h2 className="text-white text-2xl lg:text-4xl not-italic font-light leading-4 tracking-wide pt-5 lg:pt-10">
              GIÁM KHẢO
            </h2>
          </div>
          <PersonalCard data={judges} />
        </div>
      </div>
    </div>
  );
}

export default Judges;

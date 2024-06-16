import React from 'react';
import '../Gioithieuchung/Gioithieuchung.css';
import image from '../../assets/imgs/anh1.jpg';
import image2 from '../../assets/imgs/Untitled.png';
import field from '../../assets/imgs/16-linh-vuc-du-thi.png';
import SubBanner from './../../components/SubBanner';

const Gioithieuchung = () => {
  return (
    <div className="bg-white">
      <SubBanner title="Giới thiệu chung" />
      <div className="flex justify-around mx-10 my-10">
        <div className="w-[660px]">
          <h1 className="font-open-sans font-bold text-4xl py-10 ">
            Lần thứ hai tổ chức tại Việt Nam
          </h1>
          <p className="font-open-sans tracking-[0.26px] text-justify leading-[25.6px] text-[20px]">
            <b>Giải thưởng Sáng tạo tương lai - VietFuture</b> là Giải thưởng
            dành cho các dự án khởi nghiệp Đổi mới sáng tạo của sinh viên các
            trường Đại học, Cao đẳng trên cả nước và các dự án theo đặt hàng từ
            doanh nghiệp, các dự án R&D của các trường Đại học/Cao đẳng muốn
            thương mại hoá. Giải thưởng Sáng tạo tương lai - VietFuture đã được
            tổ chức thường niên bắt đầu từ năm 2023 bởi Hiệp hội Phần mềm và
            dịch vụ CNTT (VINASA) với mong muốn đồng hành cùng Chính phủ, Bộ
            Khoa học và Công nghệ thúc đẩy khởi nghiệp đổi mới sáng tạo, đồng
            thời kết nối hợp tác giữa các trường đại học và doanh nghiệp (doanh
            nghiệp đầu tư cho các dự án mới theo ý tưởng của các nhóm khởi
            nghiệp, doanh nghiệp đặt hàng các dự án theo yêu cầu)..
          </p>
        </div>
        <div>
          <img
            src={image}
            alt="Hình ảnh 1"
            className="w-[400px] h-[420px] py-9 object-cover"
          />
        </div>
      </div>
      <div className="flex justify-around mx-10 my-10">
        <div>
          <img
            src={image}
            alt="Hình ảnh 2"
            className="w-[400px] h-[420px] py-9 object-cover"
          />
        </div>
        <div className="w-[660px] py-10">
          <h2 className="font-open-sans font-bold text-4xl text-right">
            VietFuture Awards 2024
          </h2>
          <p className="tracking-[0.26px] text-justify leading-[25.6px] text-[20px]">
            <b>Giải thưởng Sáng tạo tương lai - VietFuture 2024</b> kỳ vọng sẽ
            thu hút sự quan tâm của các cá nhân, các nhóm nghiên cứu trong và
            ngoài nước về việc giải quyết các bài toán thiết thực xuất phát từ
            thực tiễn từ đó có thể ứng dụng rộng rãi trong cả nước, hướng đến
            khu vực và quốc tế, thúc đẩy phong trào khởi nghiệp mạnh mẽ hơn tại
            các trường đại học và giúp các doanh nghiệp tìm được các ý tưởng mới
            cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp; đồng thời
            tuyển dụng được các nhóm nhân tài tham gia chương trình
          </p>
        </div>
      </div>
      <div>
        <p className="w-[626px] h-[43px] font-bold mx-10 my-10 text-2xl px-10">
          Giải thưởng tổ chức thành 3 giai đoạn
        </p>
        <img
          src={image2}
          alt="Hình ảnh 3"
          className="mx-auto py-10 object-contain"
        />
      </div>
      <div>
        <p className="w-[626px] h-[43px] font-bold mx-10 my-10 text-2xl px-10">
          Các lĩnh vực dự thi
        </p>
        <img
          src={field}
          alt="Hình ảnh 4"
          className="mx-auto py-10 object-contain"
        />
      </div>
    </div>
  );
};

export default Gioithieuchung;

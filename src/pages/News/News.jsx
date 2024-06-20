import React from "react";
import img2 from "../../assets/imgs/anh2.jpg";
import img1 from "../../assets/imgs/anh1.jpg";
import img3 from "../../assets/imgs/anh3.jpeg";
import Post from "./Post/Post";
import SubBanner from "../../components/SubBanner";
export const fakePosts = [
  {
    endpoint: "trao-giai-thuong-sang-tao-online",
    title: "Trao giải thưởng sáng tạo tương lai - VietFuture 2023",
    img: img1,
    content:
      "Trong khuôn khổ Tuần Chuyển đổi số – Huế 2023, tối 14/12, tại Nhà hát Sông Hương diễn ra Lễ công bố và trao giải thưởng Sáng tạo tương lai – VietFuture 2023. Đến dự có Phó Chủ tịch Thường trực UBND tỉnh Nguyễn Thanh Bình",
  },
  {
    endpoint: "20-du-an-khoi-nghiep",
    title:
      "20 dự án khởi nghiệp đổi mới sáng tạo của sinh viên giành giải VietFuture 2023",
    img: img2,
    content:
      "Trong 20 dự án khởi nghiệp đổi mới sáng tạo được trao giải thưởng Sáng tạo Tương lai – VietFuture 2023, có 5 dự án của sinh viên FPT Arena Multimedia và các trường đại học Duy Tân, Lạc Hồng, Bách khoa Hà Nội, CNTT-TT Việt – Hàn được trao giải Nhất.",
  },
  {
    endpoint: "vietfuture-award",
    title:
      "VietFuture Award: Rút ngắn quãng đường đưa dự án khởi nghiệp vào thị trường",
    img: img3,
    content:
      "Giải thưởng Sáng tạo tương lai thúc đẩy hợp tác giữa doanh nghiệp và các cơ sở đào tạo trong khởi nghiệp đổi mới sáng tạo, giúp doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái của minh.",
  },
  {
    endpoint: "trao-giai-thuong-sang-tao-tuong-lai",
    title:
      "Trao Giải thưởng Sáng tạo tương lai 2023 cho 20 dự án khởi nghiệp đổi mới sáng tạo của sinh viên",
    img: img1,
    content:
      "Hiệp hội Phần mềm và dịch vụ công nghệ thông tin Việt Nam (VINASA) vừa tổ chúc Lễ công bố và Trao giải thưởng Sáng tạo tương lai – VietFuture Award 2023 trong khuôn khổ Tuần lễ chuyển đổi số – Huế 2023.",
  },
];
const News = () => {
  return (
    <div>
      <SubBanner title="Tin tức" />
      <ul className="container columns-2 flex flex-wrap gap-2 md:gap-5 justify-between ">
        {fakePosts.map((e, i) => {
          return (
            <Post
              endpoint={e.endpoint}
              content={e.content}
              img={e.img}
              title={e.title}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default News;

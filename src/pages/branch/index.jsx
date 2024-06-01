import React from 'react';
import './branch.css';
import SubBanner from '../../components/SubBanner';

function Branch() {
  return (
    <div className="branch">
      <SubBanner title="Lĩnh vực dự thi" />
      <h1 className="branch-title text-center font-bold mt-6">
        Các dự án, công nghệ số được sinh viên phát triển phải nằm trong 16 lĩnh
        vực sau
      </h1>
      <table className="branch-table ">
        <thead>
          <tr>
            <th>STT</th>
            <th>Lĩnh vực</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center">1</td>
            <td className="text-justify">Giáo dục, học tập và đào tạo 4.0</td>
            <td className="text-justify">
              Khởi nghiệp liên quan đến sử dụng công nghệ và dữ liệu để cải
              thiện phương pháp giảng dạy, học tập trực tuyến và quản lý học
              tập.
            </td>
          </tr>
          <tr>
            <td className="text-center">2</td>
            <td className="text-justify">
              Khởi nghiệp liên quan đến sử dụng công nghệ và dữ liệu để cải
              thiện phương pháp giảng dạy, học tập trực tuyến và quản lý học
              tập.
            </td>
            <td className="text-justify">
              Các ứng dụng công nghệ trong lĩnh vực y tế như chẩn đoán y tế
              thông minh, giám sát sức khỏe từ xa, dịch vụ chăm sóc sức khỏe cá
              nhân, dược phẩm đổi mới, v.v.
            </td>
          </tr>
          <tr>
            <td className="text-center">3</td>
            <td className="text-justify">Di chuyển thông minh</td>
            <td className="text-justify">
              Gồm các giải pháp giao thông thông minh và quản lý di chuyển.
            </td>
          </tr>
          <tr>
            <td className="text-center">4</td>
            <td className="text-justify">
              FinTech và Quản lý tài chính cá nhân
            </td>
            <td className="text-justify">
              Khởi nghiệp liên quan đến ứng dụng công nghệ trong quản lý tài
              chính, dịch vụ tài chính, thanh toán điện tử, v.v.
            </td>
          </tr>
          <tr>
            <td className="text-center">5</td>
            <td className="text-justify">
              Khởi nghiệp liên quan đến ứng dụng công nghệ trong quản lý tài
              chính, dịch vụ tài chính, thanh toán điện tử, v.v.
            </td>
            <td className="text-justify">
              Xây dựng nền tảng cho các doanh nghiệp nhỏ và sinh viên có thể bán
              sản phẩm và dịch vụ của mình trong cộng đồng từ trung ương đến địa
              phương.
            </td>
          </tr>
          <tr>
            <td className="text-center">6</td>
            <td className="text-justify">Nông nghiệp và Thực phẩm sạch</td>
            <td className="text-justify">
              Tập trung vào nâng cao năng suất nông nghiệp, quản lý tài nguyên
              nông nghiệp, và cung cấp thực phẩm sạch, an toàn.
            </td>
          </tr>
          <tr>
            <td className="text-center">7</td>
            <td className="text-justify">Du lịch</td>
            <td className="text-justify">
              Xây dựng các ứng dụng, dịch vụ liên quan đến du lịch thông minh,
              hướng dẫn du lịch ảo, quản lý lịch trình du lịch, v.v.
            </td>
          </tr>
          <tr>
            <td className="text-center">8</td>
            <td className="text-justify">
              Công nghệ xanh và Tiết kiệm năng lượng
            </td>
            <td className="text-justify">
              Các dự án tập trung vào giải quyết vấn đề môi trường, tái chế, sử
              dụng tài nguyên tái tạo, và bảo vệ đa dạng sinh học.
            </td>
          </tr>
          <tr>
            <td className="text-center">9</td>
            <td className="text-justify">Môi trường và Phát triển Bền vững</td>
            <td className="text-justify">
              Tập trung vào việc sử dụng công nghệ để giảm tiêu thụ năng lượng,
              tối ưu hóa nguồn năng lượng tái tạo, và xây dựng cơ sở hạ tầng
              xanh.
            </td>
          </tr>
          <tr>
            <td className="text-center">10</td>
            <td className="text-justify">
              Công nghệ cho Xã hội và Phát triển cộng đồng
            </td>
            <td className="text-justify">
              Các dự án tạo ra trải nghiệm văn hóa và nghệ thuật mới bằng cách
              sử dụng công nghệ, thúc đẩy sự sáng tạo trong lĩnh vực này.
            </td>
          </tr>
          <tr>
            <td className="text-center">11</td>
            <td className="text-justify">Văn hóa, Nghệ thuật số</td>
            <td className="text-justify">
              Khởi nghiệp với mục tiêu giải quyết các vấn đề xã hội, hỗ trợ cộng
              đồng địa phương và tạo ra giá trị xã hội.
            </td>
          </tr>
          <tr>
            <td className="text-center">12</td>
            <td className="text-justify">Game và Giải trí số</td>
            <td className="text-justify"></td>
          </tr>
          <tr>
            <td className="text-center">13</td>
            <td className="text-justify">Trí tuệ nhân tạo và tự động hóa</td>
            <td className="text-justify">
              Các ứng dụng trí tuệ nhân tạo, học máy, robot tự động trong các
              lĩnh vực như dự báo, quản lý, sản xuất, dịch vụ khách hàng, v.v.
            </td>
          </tr>
          <tr>
            <td className="text-center">14</td>
            <td className="text-justify">
              Khoa học dữ liệu và phân tích thông tin
            </td>
            <td className="text-justify">
              Các ứng dụng sử dụng dữ liệu để trích xuất thông tin hữu ích, dự
              đoán xu hướng, phân tích thị trường, quản lý dự án, v.v.
            </td>
          </tr>
          <tr>
            <td className="text-center">15</td>
            <td className="text-justify">
              Các ứng dụng sử dụng công nghệ mới (Blockchain, AR, VR, Web 3,
              IoT…)
            </td>
            <td className="text-justify"></td>
          </tr>
          <tr>
            <td className="text-center">16</td>
            <td className="text-justify">
              Các ứng dụng sử dụng công nghệ mới (Blockchain, AR, VR, Web 3,
              IoT…){' '}
            </td>
            <td className="text-justify"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Branch;

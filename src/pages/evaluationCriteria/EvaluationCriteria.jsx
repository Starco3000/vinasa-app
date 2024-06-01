import React from 'react';
import './EvaluationCriteria.css';
import SubBanner from '../../components/SubBanner';

const EvaluationCriteria = () => {
  return (
    <div className="w-full">
      <SubBanner title="Tiêu chí đánh giá" />
      <div className="evaluation-criteria font-open-sans ">
        <h1 className="title">Các tiêu chí để đánh giá dự án</h1>
        <table className="content-table font-open-sans ">
          <thead>
            <tr>
              <th>STT </th>
              <th>Tiêu chí </th>
              <th>Trọng số (%) </th>
              <th>Điểm chính </th>
              <th>Tiêu chí chi tiết </th>
              <th>Trọng số (%) </th>
              <th>Điểm phụ </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td rowspan="2">1</td>
              <td rowspan="2">Tính độc lập sáng tạo</td>
              <td rowspan="2">15</td>
              <td className="box-text" rowspan="2">
                0
              </td>
              <td>Độc đáo về tính năng, mô hình kinh doanh, công nghệ</td>
              <td>60</td>
              <td>0</td>
            </tr>
            <tr>
              <td>định hình phù hợp với xu hướng</td>
              <td>40</td>
              <td>0</td>
            </tr>

            <tr>
              <td rowspan="2">2</td>
              <td rowspan="2">
                Tính thực tiễn của dự án/ Khả năng thương mại hóa
              </td>
              <td rowspan="2">20</td>
              <td rowspan="2">0</td>
              <td>Tính thực tiễn của dự án</td>
              <td>50</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Khả năng thương mại hóa của dự án</td>
              <td>50</td>
              <td>0</td>
            </tr>

            <tr>
              <td rowspan="2">3</td>
              <td rowspan="2">Tiềm năng, quy mô thị trường</td>
              <td rowspan="2">15</td>
              <td rowspan="2">0</td>
              <td>Tiềm năng thị trường</td>
              <td>60</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Quy mô thị trường</td>
              <td>40</td>
              <td>0</td>
            </tr>

            <tr>
              <td rowspan="2">4</td>
              <td rowspan="2">Khả năng phát triển, mở rộng, nhân rộng</td>
              <td rowspan="2">15</td>
              <td rowspan="2">0</td>
              <td>Khả năng đáp ứng nhu cầu người sử dụng</td>
              <td>60</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Khả năng tương thích và phát triển tùy biến</td>
              <td>40</td>
              <td>0</td>
            </tr>

            <tr>
              <td>5</td>
              <td>Công nghệ, quy chuẩn áp dụng</td>
              <td>10</td>
              <td>0</td>
              <td>Công nghệ, quy chuẩn áp dụng</td>
              <td>100</td>
              <td>0</td>
            </tr>

            <tr>
              <td>6</td>
              <td>Năng lực của nhóm phát triển</td>
              <td>15</td>
              <td>0</td>
              <td>Năng lực của nhóm phát triển</td>
              <td>100</td>
              <td>0</td>
            </tr>

            <tr>
              <td rowspan="3">7</td>
              <td rowspan="3">Chuẩn bị hồ sơ và thuyết trình</td>
              <td rowspan="3">10</td>
              <td rowspan="3">0</td>
              <td>Chuẩn bị hồ sơ hoàn chỉnh</td>
              <td>30</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Trình bày rõ ràng, thông tin chính xác</td>
              <td>40</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Trả lời tốt các câu hỏi</td>
              <td>40</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default EvaluationCriteria;

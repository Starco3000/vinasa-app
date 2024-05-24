import React from 'react';
import './Nominations.css';

function Nominations() {
    return (
        <div className="nominations">
            <h1 className="nominations-title">Danh sách giải thưởng đề cử 2023</h1>
            <table className="awards-table">
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên giải</th>
                        <th>Tên trường</th>
                        <th>Tên dự án</th>
                        <th>Lĩnh vực đăng ký</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Giải nhất</td>
                        <td>Đại học Duy Tân</td>
                        <td>Sử dụng vỏ trấu và nilong để chế tạo ra vật liệu xây dựng ( gạch lát đường) bảo vệ môi trường</td>
                        <td>Công nghệ cho Xã hội và Phát triển cộng đồng</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Giải nhất</td>
                        <td>Trường Đào tạo Mỹ thuật Đa phương tiện FPT Arena Multimedia</td>
                        <td>Ứng dụng công nghệ 3D Animation để tăng khả năng tiếp cận lịch sử của học sinh trong thời kỳ đổi mới</td>
                        <td>Giáo dục, học tập và đào tạo 4.0</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Giải nhất</td>
                        <td>Đại học Lạc Hồng</td>
                        <td>Thiết kế và chế tạo Pin nhiên liệu cho xe điện</td>
                        <td>Môi trường và phát triển bền vững</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Giải nhất</td>
                        <td>Đại học Bách Khoa Hà Nội</td>
                        <td>Ứng dụng vòng tròn xanh - ứng dụng khuyến khích học tập sáng tạo và mua bán các sản phẩm tái chế. (Tên hiển trị trên web: App Green Circle - ứng dụng khuyến khích học tập sáng tạo và mua bán các sản phẩm tái chế)</td>
                        <td>Công nghệ xanh và tiết kiệm năng lượng</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Giải nhất</td>
                        <td>Trường Đại học Công nghệ Thông tin và Truyền thông Việt - Hàn</td>
                        <td>Mentasoothe - Giải pháp chăm sóc sức khỏe tâm thần cùng trợ lý ảo sử dụng trí tuệ nhân tạo</td>
                        <td>Trí tuệ nhân tạo và tự động hóa</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Giải nhì</td>
                        <td>Phổ Thông Cao Đẳng FPT Polytechnic - Huế</td>
                        <td>Áo mưa cổ phục - Đai sứ du lịch Huế</td>
                        <td>Du lịch</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Giải nhì</td>
                        <td>Trường Đại học Tôn Đức Thắng</td>
                        <td>DoctorSkin - Ứng dụng hỗ trợ chẩn đoán bệnh da liễu phổ biến cho người Việt</td>
                        <td>Y tế và chăm sóc sức khỏe</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Giải nhì</td>
                        <td>Đại học Công nghệ thông tin và truyền thông Việt – Hàn</td>
                        <td>Phát triển bộ công cụ DaNangNLP để tiền xử lý và trích xuất thông tin trong xử lý ngôn ngữ Tiếng Việt</td>
                        <td>Khoa học dữ liệu và phân tích thông tin</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Giải nhì</td>
                        <td>Trường Cao đẳng Kinh tế Thành phố Hồ Chí Minh</td>
                        <td>Tín chỉ Carbon</td>
                        <td>Môi trường và phát triển bền vững</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>Giải nhì</td>
                        <td>Trường Đại học Bách khoa - Đại học Đà Nẵng</td>
                        <td>Giải pháp lưu trữ tài sản nới công cộng</td>
                        <td>Trí tuệ nhân tạo và tự động hóa</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>Giải ba</td>
                        <td>Trường Đại Học Lạc Hồng</td>
                        <td>Hệ sinh thái ITFSD</td>
                        <td>Thương mại điện tử và Logistics</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Giải ba</td>
                        <td>Trường Đại học Bách Khoa - Đại học Quốc gia Hồ Chí Minh</td>
                        <td>Máy đo huyết áp, oxi máu thông minh - ứng dụng trí tuệ nhân tạo và IoT giúp hỗ trợ theo dõi và chẩn đoán một số bệnh lý tim mạch</td>
                        <td>Y tế và chăm sóc sức khỏe</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Giải ba</td>
                        <td>Trường Đại học Bách khoa - Đại học Quốc gia TP. Hồ Chí Minh</td>
                        <td>Dancemilling - Bộ công cụ phát triển Robot</td>
                        <td>Trí tuệ nhân tạo và tự động hóa</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Giải ba</td>
                        <td>Trường Đại học Công nghệ Thông tin và Truyền thông Việt Hàn - Đại học Đà Nẵng</td>
                        <td>SoutOut - Sàn thương mại bán hàng sắp hết hạn</td>
                        <td>Thương mại điện tử và Logistics</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Giải ba</td>
                        <td>Trường Đại học Tôn Đức Thắng</td>
                        <td>Trợ lý du lịch - Tripsy</td>
                        <td>Du lịch</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Giải tiềm năng </td>
                        <td>Khoa Kỹ thuật và Công nghệ - Đại học Huế</td>
                        <td>Khu vườn trên ống</td>
                        <td>Nông nghiệp và Thực phẩm sạch</td>
                    </tr>
                    <tr>
                        <td>17</td>
                        <td>Giải tiềm năng</td>
                        <td>Trường Đại học Bách khoa - Đại học Quốc gia TP. Hồ Chí Minh</td>
                        <td>Ứng dụng hỗ trợ sử dụng kháng sinh an toàn</td>
                        <td>Y tế và chăm sóc sức khỏe</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>Giải tiềm năng</td>
                        <td>Khoa Kỹ thuật và Công nghệ - Đại học Huế</td>
                        <td>Ứng dụng xử lý ảnh và mã QR code phục vụ phân loại sản phẩm trên mô hình MPS 2000</td>
                        <td>Trí tuệ nhân tạo và tự động hóa</td>
                    </tr>
                    <tr>
                        <td>19</td>
                        <td>Giải tiềm năng</td>
                        <td>Đại học Bách khoa - ĐHQG TPHCM</td>
                        <td>Ứng dụng hỗ trợ sử dụng kháng sinh an toàn</td>
                        <td>Khoa học dữ liệu và phân tích thông tin</td>
                    </tr>                    
                    <tr>
                        <td>20</td>
                        <td>Giải tiềm năng</td>
                        <td>Trường Đại Học Phú Xuân</td>
                        <td>Tái tạo bèo thành viên nén</td>
                        <td>Công nghệ xanh và Tiết kiệm năng lượng</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Nominations;
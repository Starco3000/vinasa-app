import award1 from '../assets/imgs/award1.jpg';
import award2 from '../assets/imgs/award2.jpg';
import award3 from '../assets/imgs/award3.jpg';
import award4 from '../assets/imgs/award4.jpg';
import HoangLeMinh from '../assets/imgs/hoangleminh.png';
import WilsonLieu from '../assets/imgs/wilsonlieu.png';
import AnNgocThao from '../assets/imgs/anngocthao.png';
import DoanVietHung from '../assets/imgs/doanviethung.png';
import LuuDanhAnhVu from '../assets/imgs/luudanhanhvu.png';
import TranThiThuyYen from '../assets/imgs/tranthithuyyen.png';
import NguyenSonHoangLe from '../assets/imgs/nguyensonhoangle.png';
import DuongMinhThong from '../assets/imgs/duongminhthong.png';
import MaiHoangPhi from '../assets/imgs/maihoangphi.png';
import LeMyNga from '../assets/imgs/lemynga.png';
import NguyenGiaNhu from '../assets/imgs/nguyengianhu.png';
import NguyenDuongAnh from '../assets/imgs/nguyenduonganh.png';
import NguyenThiThuGiang from '../assets/imgs/nguyenthithugiang.png';
import NguyenChiToan from '../assets/imgs/nguyenchitoan.png';
import NguyenDinhThang from '../assets/imgs/nguyendinhthang.png';
import TranXuanMoi from '../assets/imgs/tranxuanmoi.png';
import PhiAnhTuan from '../assets/imgs/phianhtuan.png';
import LeQuangMinh from '../assets/imgs/lequangminh.png';

// Mock data for Homepage
export const slides = [
  {
    id: 1,
    images: award1,
    alt: 'award1',
  },
  {
    id: 2,
    images: award2,
    alt: 'award2',
  },
  {
    id: 3,
    images: award3,
    alt: 'award3',
  },
  {
    id: 4,
    images: award4,
    alt: 'award4',
  },
];

// Mock data for Judges page
export const judges = [
  {
    id: 1,
    name: 'TS. Hoàng Lê Minh',
    desc: 'Ủy viên Ban chấp hành Vinasa',
    img: HoangLeMinh,
    alt: 'Hoàng Lê Minh',
  },
  {
    id: 2,
    name: 'Ông Wilson Liêu',
    desc: 'CEO, NextJobs',
    img: WilsonLieu,
    alt: 'Wilson Liêu',
  },
  {
    id: 3,
    name: 'Ông An Ngọc Thao',
    desc: 'Phó Tổng Thư ký VINASA',
    img: AnNgocThao,
    alt: 'An Ngọc Thao',
  },
  {
    id: 4,
    name: 'Ông Đoàn Việt Hùng',
    desc: 'Giám đốc Marketing, Alibaba Cloud Việt Nam',
    img: DoanVietHung,
    alt: 'Đoàn Việt Hùng',
  },
  {
    id: 5,
    name: 'Ông Lưu Danh Anh Vũ',
    desc: 'Giám đốc Phát triển kinh doanh và đối tác HCL Software tại Việt Nam',
    img: LuuDanhAnhVu,
    alt: 'Lưu Danh Anh Vũ',
  },
  {
    id: 6,
    name: 'Bà Trần Thị Thùy Yên',
    desc: 'Phó Giám đốc Sở Khoa học và Công nghệ',
    img: TranThiThuyYen,
    alt: 'Trần Thị Thùy Yên',
  },
  {
    id: 7,
    name: 'Ông Nguyễn Sơn Hoàng Lê',
    desc: 'Nguyên Chuyên viên phân tích, Ascend Ventures Việt Nam',
    img: NguyenSonHoangLe,
    alt: 'Nguyễn Sơn Hoàng Lê',
  },
  {
    id: 8,
    name: 'Ông Dương Minh Thông',
    desc: 'CEO, Công ty CP Truyền thông và Giáo dục Lyon',
    img: DuongMinhThong,
    alt: 'Dương Minh Thông',
  },
  {
    id: 9,
    name: 'Ông Mai Hoàng Phi',
    desc: 'Quản lý hợp tác, Công ty What3words tại Việt Nam',
    img: MaiHoangPhi,
    alt: 'Mai Hoàng Phi',
  },
  {
    id: 10,
    name: 'Bà Lê Mỹ Nga',
    desc: 'Nhà sáng lập, Chủ tịch Quỹ WeAngels Capital',
    img: LeMyNga,
    alt: 'Lê Mỹ Nga',
  },
  {
    id: 11,
    name: 'Ông Nguyễn Gia Như',
    desc: 'Hiệu trưởng, Trường Khoa học máy tính, Đại học Duy Tân',
    img: NguyenGiaNhu,
    alt: 'Nguyễn Giang Như',
  },
  {
    id: 12,
    name: 'Ông Nguyễn Dương Anh',
    desc: 'Phó Giám đốc Sở Thông tin và Truyền thông',
    img: NguyenDuongAnh,
    alt: 'Nguyễn Dương Anh',
  },
  {
    id: 13,
    name: 'Bà Nguyễn Thị Thu Giang',
    desc: 'Phó Chủ tịch, Tổng thư ký VINASA',
    img: NguyenThiThuGiang,
    alt: 'Nguyễn Thị Thu Giang',
  },
  {
    id: 14,
    name: 'Ông Nguyễn Chí Toàn',
    desc: 'Đại diện chương trình SEPT, Đại học Leipzig',
    img: NguyenChiToan,
    alt: 'Nguyễn Chi Toàn',
  },
  {
    id: 15,
    name: 'Ông Nguyễn Đình Thắng',
    desc: 'Thành viên Hội đồng Sáng lập VINASA',
    img: NguyenDinhThang,
    alt: 'Nguyễn Đinh Thắng',
  },
  {
    id: 16,
    name: 'Ông Trần Xuân Mới',
    desc: 'Founder & CEO, Công ty ATM',
    img: TranXuanMoi,
    alt: 'Trần Xuân Mới',
  },
  {
    id: 17,
    name: 'Ông Phí Anh Tuấn',
    desc: 'Ủy viên Ban chấp hành VINASA',
    img: PhiAnhTuan,
    alt: 'Phí Anh Tuấn',
  },
  {
    id: 18,
    name: 'Ông Lê Quang Minh',
    desc: 'Phó Viện Trưởng, Viện CNTT, Đại học Quốc gia Hà Nội',
    img: LeQuangMinh,
    alt: 'Lê Quang Minh',
  },
];

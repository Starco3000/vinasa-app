import React from 'react';
import './Introduction.css';

function Introduction() {
    return (
        <div className="introduction text-left font-exo2 flex-col w-90 flex items-center justify-center my-30 mx-15 md:max-lg:flex">
            <div className='top-section bg-custom-white flex w-90 h-669 max-w-full pl-5% '>
                <div className='left-section flex-1 '>
                    <h1 className='text-black font-exo2 text-custom font-bold not-italic tracking-custom leading-4 pt-28 '>GIỚI THIỆU</h1>
                    <h2 className='text-black font-exo2 text-5xl font-thin not-italic tracking-custom1 leading-10 mt-4'>CHUNG</h2>
                </div>
                <div className='right-section flex-1 pt-170 pl-50 mr-88'>
                    <p className='p1 text-black text-justify font-exo2 text-base tracking-wide leading-7'>Hội đồng bình chọn do VINASA thành lập, gồm các chuyên gia về những lĩnh vực chuyên môn, đại diện các cơ quan quản lý, cơ quan báo chí… Hội đồng bình chọn có nhiệm vụ nghiên cứu, đánh giá từng hồ sơ, dựa trên kết quả thuyết trình của doanh nghiệp để lựa chọn các giải pháp, dịch vụ đạt Giải thưởng Sao Khuê. Để đảm bảo tính khách quan, chính xác, Hội đồng bình chọn tổ chức Vòng thuyết trình dành cho các doanh nghiệp trình bày trực tiếp với Hội đồng đánh giá.</p>
                    <p className='p2 text-black text-justify font-exo2 text-base tracking-wide leading-7 '>Tại vòng thuyết trình, Hội đồng đánh giá chấm điểm thuyết trình của doanh nghiệp theo bảng tiêu chí, đánh giá, chấm điểm của chương trình.
                    <br/>Tại Hội nghị Chung tuyển, trưởng nhóm đánh giá của từng Hội đồng báo cáo kết quả thuyết trình của doanh nghiệp về các giải pháp, dịch vụ ứng cử, Hội đồng quyết định theo nguyên tắc đa số.</p>
                </div>
            </div>
            <div className='bottom-section text-white w-90 h-1650 bg-custom-gradient1 max-w-full pl-5% items-center justify-center'>
                <div className="cap">
                    <h1 className='pt-28 text-white font-exo2 text-custom not-italic font-bold leading-4 tracking-custom'>HỘI ĐỒNG </h1>
                    <h2 className='pt-10 text-white font-exo2 text-4xl not-italic font-light leading-4 tracking-wide'>GIÁM KHẢO</h2>
                </div>
                <div className='image-row pt-20'>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img src='./images/Rectangle 5.png' alt='image1'/>
                            <div className='image-caption text-left '>
                                <p className='bold'>Ông Phí Anh Tuấn </p>
                                <p className='light'>Ủy viên Ban chấp hành VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1'src='./images/anngocthao.jpg' alt='image2'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông An Ngọc Thao </p>
                                <p className='light'>Phó Tổng thư ký VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1'src='./images/doanviethung1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Đoàn Việt Hùng </p>
                                <p className='light'>Giám đốc Marketing, Alibaba Cloud Việt Nam </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1'src='./images/lequangminh-1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Lê Quang Minh </p>
                                <p className='light'>Phó Viện Trưởng, Viện CNTT, Đại học Quốc gia Hà Nội </p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div style={{paddingTop:'25rem'}}className='image-row2'>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/hoangleminh1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>TS. Hoàng Lê Minh </p>
                                <p className='light'>Ủy viên Ban chấp hành VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/giang1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Bà Nguyễn Thị Thu Giang </p>
                                <p className='light'>Phó Chủ tịch, Tổng thư ký VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/nguyenduonganh.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Nguyễn Dương Anh </p>
                                <p className='light'>Phó Giám đốc Sở Thông tin và Truyền thông </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/nguyenchitoan.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Nguyễn Chí Toàn </p>
                                <p className='light'>Đại diện chương trình SEPT, Đại học Leipzig </p>
                            </div>
                        </div> 
                    </div>
                </div>
                <div style={{paddingTop:'25rem'}}className='image-row1'>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/nguyendinhthang1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Nguyễn Đình Thắng</p>
                                <p className='light'>Thành viên Hội đồng Sáng lập VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/tranxuanmoi.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Trần Xuân Mới</p>
                                <p className='light'>Founder & CEO, Công ty ATM </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='./images/wilson-lieu.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Wilson Liêu </p>
                                <p className='light'>Ủy viên Ban chấp hành VINASA </p>
                            </div>
                        </div> 
                    </div>
                    <div className='image flex-1 relative max-w-full'>
                        <div className='image-bolder absolute bg-custom-cyan w-250 h-340'>
                            <img className='w-220 block object-cover flex-1' src='/images/luudanhanhvu-1.jpg' alt='image1'/>
                            <div className='image-caption text-left'>
                                <p className='bold'>Ông Lưu Danh Anh Vũ </p>
                                <p className='light'>Giám đốc Phát triển kinh doanh và đối tác HCL Software tại Việt Nam </p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default Introduction;
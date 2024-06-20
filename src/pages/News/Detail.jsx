import React, { useEffect, useState } from "react";
import HotNew from "./HotNew";
import SubBanner from "../../components/SubBanner";
import { useLocation } from "react-router-dom";
import { fakePosts } from "./News";

const fakeHotNews = {
  post: [
    {
      postId: 1,
      postContent: `<div class="post_img static "><a href="https://vietfuture.world/wp-content/uploads/2024/03/aqw.jpg" class="img_frame"><img src="https://vietfuture.world/wp-content/uploads/2024/03/aqw.jpg" alt="" class=""></a></div>
<p class="font-bold font-style: italic">Trong khuôn khổ Tuần Chuyển đổi số – Huế 2023, tối 14/12, tại Nhà hát Sông Hương diễn ra Lễ công bố và trao giải thưởng Sáng tạo tương lai – VietFuture 2023. Đến dự có Phó Chủ tịch Thường trực UBND tỉnh Nguyễn Thanh Bình.</p> 
VietFuture 2023 là giải thưởng do Hiệp hội Phần mềm và Dịch vụ CNTT Việt Nam (VINASA) tổ chức lần đầu tiên dưới sự bảo trợ của Bộ Khoa học và Công nghệ và đăng cai của UBND tỉnh Thừa Thiên Huế. Chương trình thu hút 74 dự án từ 27 trường cao đẳng, đại học trên cả nước dự thi. 
<p>Phát biểu tại lễ trao giải, Chủ tịch VINASA Nguyễn Văn Khoa chia sẻ, Giải thưởng Sáng tạo tương lai được tổ chức thường niên từ năm 2023, với mong muốn thúc đẩy hợp tác giữa các doanh nghiệp và nhà trường trong khởi nghiệp đổi mới sáng tạo tại các trường đại học, cao đẳng trên cả nước, kết nối nghiên cứu và phát triển, thương mại hóa các đề tài nghiên cứu và tuyển dụng, kết nối hợp tác giữa các trường đại học trong nước và quốc tế; giúp các doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp, đồng thời tuyển dụng được các nhóm nhân tài.</p>
<p>Năm 2023, Giải thưởng VietFuture đã bình chọn được 19 đề cử xuất sắc và BTC đã trao 5 giải Nhất, 5 giải Nhì, 5 giải Ba và 4 giải tiềm năng.</p>
<p>Trước đó, Giải thưởng được tổ chức qua 3 vòng: Sơ tuyển tại các trường; Thuyết trình (trực tiếp, trực tuyến) và Chung tuyển toàn quốc với các hoạt động cụ thể: thuyết trình, triển lãm, demo dự án trực tiếp, kết nối hợp tác, tuyển dụng…</p>
<p>Tham gia Giải thưởng VietFuture 2023 sinh viên có các cơ hội được hỗ trợ kết nối giới thiệu sản phẩm/giải pháp tới các doanh nghiệp quan tâm, được đầu tư dự án, việc làm tại các doanh nghiệp, được giới thiệu với các chuyên gia, quỹ đầu tư, nhà đầu tư để tiếp tục hoàn thiện dự án triển khai thực tế.</p>
<p class="font-bold font-style: italic">Theo Baothuathienhue.vn</p>`,
      thumbnailImg: "https://example.com/image1.jpg",
      title: "Main Post Title",
      createdDate: "2024-05-29",
    },
    {
      postId: 2,
      postContent: `<div class="post_img static "><a href="https://vietfuture.world/wp-content/uploads/2024/03/w-ong-nguyen-van-khoa-1-1-815.jpg" class="img_frame"><img src="http://localhost:3000/static/media/anh2.c77f8b57f3555d8dc29b.jpg" alt="" class=""></a></div><p class="content-detail-sapo sm-sapo-mb-0" style="text-align:justify"><em><strong>Trong 20 dự án khởi nghiệp đổi mới sáng tạo được trao giải thưởng Sáng tạo Tương lai – VietFuture 2023, có 5 dự án của sinh viên FPT Arena Multimedia và các trường đại học Duy Tân, Lạc Hồng, Bách khoa Hà Nội, CNTT-TT Việt – Hàn được trao giải Nhất.</strong></em><span id="more-7182"></span></p><p style="text-align:justify">Lễ công bố và trao giải thưởng Sáng tạo tương lai – VietFuture Award 2023 vừa được Hiệp hội Phần mềm và dịch vụ CNTT Việt Nam (VINASA) tổ chức tại Huế, trong khuôn khổ&nbsp;<a href="https://vietnamnet.vn/tuan-le-chuyen-doi-so-hue-2023-huong-den-thuc-day-lien-ket-vung-2226948.html" target="_blank" rel="noopener noreferrer">Tuần lễ chuyển đổi số – Huế 2023</a>.</p><p style="text-align:justify">Là sáng kiến của VINASA với mong muốn thúc đẩy hợp tác giữa các doanh nghiệp và nhà trường trong khởi nghiệp đổi mới sáng tạo, năm nay là năm đầu tiên VietFuture Award được tổ chức.</p><p style="text-align:justify">VietFuture được định vị là giải thưởng thường niên dành cho các dự án khởi nghiệp đổi mới sáng tạo trong lĩnh vực KHCN của sinh viên các trường đại học, cao đẳng trên cả nước và các dự án xuất sắc theo đặt hàng từ doanh nghiệp.</p><p style="text-align:justify">Chương trình hướng tới mục tiêu thúc đẩy hợp tác giữa doanh nghiệp và các trường đại học trong hoạt động khởi nghiệp đổi mới sáng tạo nói chung; giúp các doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp; đồng thời tuyển dụng được các nhóm nhân tài.</p><p style="text-align:justify">Ông Nguyễn Văn Khoa, Chủ tịch VINASA, Trưởng ban tổ chức giải thưởng nhấn mạnh: VietFuture Award 2023 không chỉ đem đến trải nghiệm hữu ích, kiến thức có giá trị cho sinh viên. Những dự án xuất sắc sẽ khởi đầu cho mối liên kết gần gũi hơn nữa giữa doanh nghiệp và nhà trường trong việc tìm kiếm, hỗ trợ đưa các sáng tạo hữu ích của các em sinh viên vào thực tiễn, vào thị trường.</p><p style="text-align:justify"><em>“Những tập đoàn công nghệ lớn sẽ luôn ủng hộ và dành nguồn lực cho các hoạt động thúc đẩy đổi mới sáng tạo từ sớm như VietFuture”</em>, ông Nguyễn Văn Khoa chia sẻ</p><p style="text-align:justify">Trong năm đầu được tổ chức, sau 3 tháng phát động, VietFuture Award 2023 nhận được 74 đề cử từ 27 trường đại học, cao đẳng trên cả nước.</p><p style="text-align:justify">Vòng thi đánh giá thuyết trình toàn quốc và chung tuyển đã diễn ra với sự tham gia của 32 đề cử thuyết trình trực tiếp tại Huế vào ngày 14/12 và 42 đề cử tham gia thuyết trình trực tuyến đã diễn ra trước đó vào ngày 9/12.</p><p style="text-align:justify">Theo đánh giá của Ban giám khảo, ý tưởng, sản phẩm, dự án sinh viên dự thi có sự đa dạng, đầu tư cao, trải dài tới 14 lĩnh vực. Nhiều sản phẩm dự thi có tính ứng dụng tốt trong việc giải quyết vấn đề về môi trường, nông nghiệp, giáo dục, y tế, du lịch, văn hoá nghệ thuật, di chuyển thông minh, thương mại điện tử, logistic… hướng đến xây dựng môi trường sống chất lượng cũng như góp phần xây dựng xã hội số, phục vụ cuộc sống con người tốt hơn.</p><p style="text-align:justify">Trong đó, có dự án đã đi sâu vào hỗ trợ cho việc phát triển kinh tế, văn hóa, xã hội của địa phương. Đáng chú ý, ban tổ chức đã nhận về số lượng lớn các dự án đăng ký thuộc các lĩnh vực tiêu biểu như trí tuệ nhân tạo và tự động hoá; công nghệ xanh và tiết kiệm năng lượng; công nghệ cho xã hội &amp; phát triển cộng đồng; giáo dục, học tập và đào tạo 4.0.</p><div style="width:778px" class="wp-caption aligncenter"><img class="size-full" src="https://static-images.vnncdn.net/files/publish/2023/12/17/w-vietfure-2023-00-1-816.jpg?width=768&amp;s=bZ4eos8nopkoK4crf2_SbQ" width="768" height="481"><p class="wp-caption-text">Dự án của nhóm sinh viên trường đại học CNTT và Truyền thông Việt – Hàn là 1 trong 5 dự án giành giải Nhất của VietFuture 2023.</p></div><p style="text-align:justify">Kết quả, Hội đồng giám khảo VietFuture 2023 đã chọn được 20 đề cử xuất sắc để trao các giải Nhất, Nhì, Ba và Tiềm năng. Đây là những dự án được đánh giá xuất sắc về ý tưởng, có khả năng ứng dụng hiệu quả trong tương lai.</p><p style="text-align:justify">Trong đó, 5 dự án của sinh viên được trao giải Nhất gồm: ‘Sử dụng vỏ trấu và nilon để chế tạo ra vật liệu xây dựng (gạch lát đường) bảo vệ môi trường’ của Đại học Duy Tân; ‘Ứng dụng công nghệ 3D Animation để tăng khả năng tiếp cận lịch sử của học sinh trong thời kỳ đổi mới’ của trường đào tạo mỹ thuật đa phương tiện FPT Arena Multimedia; ‘Thiết kế và chế tạo Pin nhiên liệu cho xe điện’ của Đại học Lạc Hồng; ‘Ứng dụng vòng tròn xanh – ứng dụng khuyến khích học tập sáng tạo và mua bán các sản phẩm tái chế’ của Đại học Bách khoa Hà Nội; và ‘Metasoothe – Giải pháp chăm sóc sức khỏe tâm thần cùng trợ lý ảo sử dụng trí tuệ nhân tạo’ của trường đại học CNTT và Truyền thông Việt – Hàn.</p><p style="text-align:justify">Theo Ban tổ chức, các dự án đạt giải thưởng VietFuture 2023 nhận được phần thưởng bằng tiền mặt và vật phẩm, nền tảng công nghệ. Trong đó, tổng giá trị giải thưởng bằng tiền mặt là 265 triệu đồng; học bổng từ CODEGYM có tổng trị giá 620 triệu đồng, quà tặng máy chủ đám mây và tài khoản học thuật dành cho sinh viên, giảng viên đến từ Alibaba Cloud có tổng trị giá 12 triệu USD.</p><p style="text-align:justify">Đại diện Ban tổ chức cũng chia sẻ thêm, giải thưởng VietFuture 2024 sẽ được phát động sớm, ngay từ tháng 1/2024 để các trường đại học, các doanh nghiệp tổ chức có thể tham gia đặt hàng, nhận làm cố vấn cho các dự án từ các nhóm sinh viên của các trường đại học trên cả nước.</p><p style="text-align:right"><strong>Theo Vietnamnet.vn</strong></p><div id="post_share_text" class="post_share_text"><span class="ti-share"></span></div><br class="clear"></div>`,
      thumbnailImg: "https://example.com/image1.jpg",
      title: "Main Post Title",
      createdDate: "2024-05-29",
    },
    {
      postId: 3,
      postContent: `<div class="post_img static "><a href="https://vietfuture.world/wp-content/uploads/2024/03/w-ong-nguyen-van-khoa-1-1-815.jpg" class="img_frame"><img src="https://vietfuture.world/wp-content/uploads/2024/03/anh-1.jpeg" alt="" class=""></a></div><p class="content-detail-sapo sm-sapo-mb-0" style="text-align:justify"><em><strong>Trong 20 dự án khởi nghiệp đổi mới sáng tạo được trao giải thưởng Sáng tạo Tương lai – VietFuture 2023, có 5 dự án của sinh viên FPT Arena Multimedia và các trường đại học Duy Tân, Lạc Hồng, Bách khoa Hà Nội, CNTT-TT Việt – Hàn được trao giải Nhất.</strong></em><span id="more-7182"></span></p><p style="text-align:justify">Lễ công bố và trao giải thưởng Sáng tạo tương lai – VietFuture Award 2023 vừa được Hiệp hội Phần mềm và dịch vụ CNTT Việt Nam (VINASA) tổ chức tại Huế, trong khuôn khổ&nbsp;<a href="https://vietnamnet.vn/tuan-le-chuyen-doi-so-hue-2023-huong-den-thuc-day-lien-ket-vung-2226948.html" target="_blank" rel="noopener noreferrer">Tuần lễ chuyển đổi số – Huế 2023</a>.</p><p style="text-align:justify">Là sáng kiến của VINASA với mong muốn thúc đẩy hợp tác giữa các doanh nghiệp và nhà trường trong khởi nghiệp đổi mới sáng tạo, năm nay là năm đầu tiên VietFuture Award được tổ chức.</p><p style="text-align:justify">VietFuture được định vị là giải thưởng thường niên dành cho các dự án khởi nghiệp đổi mới sáng tạo trong lĩnh vực KHCN của sinh viên các trường đại học, cao đẳng trên cả nước và các dự án xuất sắc theo đặt hàng từ doanh nghiệp.</p><p style="text-align:justify">Chương trình hướng tới mục tiêu thúc đẩy hợp tác giữa doanh nghiệp và các trường đại học trong hoạt động khởi nghiệp đổi mới sáng tạo nói chung; giúp các doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp; đồng thời tuyển dụng được các nhóm nhân tài.</p><p style="text-align:justify">Ông Nguyễn Văn Khoa, Chủ tịch VINASA, Trưởng ban tổ chức giải thưởng nhấn mạnh: VietFuture Award 2023 không chỉ đem đến trải nghiệm hữu ích, kiến thức có giá trị cho sinh viên. Những dự án xuất sắc sẽ khởi đầu cho mối liên kết gần gũi hơn nữa giữa doanh nghiệp và nhà trường trong việc tìm kiếm, hỗ trợ đưa các sáng tạo hữu ích của các em sinh viên vào thực tiễn, vào thị trường.</p><p style="text-align:justify"><em>“Những tập đoàn công nghệ lớn sẽ luôn ủng hộ và dành nguồn lực cho các hoạt động thúc đẩy đổi mới sáng tạo từ sớm như VietFuture”</em>, ông Nguyễn Văn Khoa chia sẻ</p><p style="text-align:justify">Trong năm đầu được tổ chức, sau 3 tháng phát động, VietFuture Award 2023 nhận được 74 đề cử từ 27 trường đại học, cao đẳng trên cả nước.</p><p style="text-align:justify">Vòng thi đánh giá thuyết trình toàn quốc và chung tuyển đã diễn ra với sự tham gia của 32 đề cử thuyết trình trực tiếp tại Huế vào ngày 14/12 và 42 đề cử tham gia thuyết trình trực tuyến đã diễn ra trước đó vào ngày 9/12.</p><p style="text-align:justify">Theo đánh giá của Ban giám khảo, ý tưởng, sản phẩm, dự án sinh viên dự thi có sự đa dạng, đầu tư cao, trải dài tới 14 lĩnh vực. Nhiều sản phẩm dự thi có tính ứng dụng tốt trong việc giải quyết vấn đề về môi trường, nông nghiệp, giáo dục, y tế, du lịch, văn hoá nghệ thuật, di chuyển thông minh, thương mại điện tử, logistic… hướng đến xây dựng môi trường sống chất lượng cũng như góp phần xây dựng xã hội số, phục vụ cuộc sống con người tốt hơn.</p><p style="text-align:justify">Trong đó, có dự án đã đi sâu vào hỗ trợ cho việc phát triển kinh tế, văn hóa, xã hội của địa phương. Đáng chú ý, ban tổ chức đã nhận về số lượng lớn các dự án đăng ký thuộc các lĩnh vực tiêu biểu như trí tuệ nhân tạo và tự động hoá; công nghệ xanh và tiết kiệm năng lượng; công nghệ cho xã hội &amp; phát triển cộng đồng; giáo dục, học tập và đào tạo 4.0.</p><div style="width:778px" class="wp-caption aligncenter"><img class="size-full" src="https://static-images.vnncdn.net/files/publish/2023/12/17/w-vietfure-2023-00-1-816.jpg?width=768&amp;s=bZ4eos8nopkoK4crf2_SbQ" width="768" height="481"><p class="wp-caption-text">Dự án của nhóm sinh viên trường đại học CNTT và Truyền thông Việt – Hàn là 1 trong 5 dự án giành giải Nhất của VietFuture 2023.</p></div><p style="text-align:justify">Kết quả, Hội đồng giám khảo VietFuture 2023 đã chọn được 20 đề cử xuất sắc để trao các giải Nhất, Nhì, Ba và Tiềm năng. Đây là những dự án được đánh giá xuất sắc về ý tưởng, có khả năng ứng dụng hiệu quả trong tương lai.</p><p style="text-align:justify">Trong đó, 5 dự án của sinh viên được trao giải Nhất gồm: ‘Sử dụng vỏ trấu và nilon để chế tạo ra vật liệu xây dựng (gạch lát đường) bảo vệ môi trường’ của Đại học Duy Tân; ‘Ứng dụng công nghệ 3D Animation để tăng khả năng tiếp cận lịch sử của học sinh trong thời kỳ đổi mới’ của trường đào tạo mỹ thuật đa phương tiện FPT Arena Multimedia; ‘Thiết kế và chế tạo Pin nhiên liệu cho xe điện’ của Đại học Lạc Hồng; ‘Ứng dụng vòng tròn xanh – ứng dụng khuyến khích học tập sáng tạo và mua bán các sản phẩm tái chế’ của Đại học Bách khoa Hà Nội; và ‘Metasoothe – Giải pháp chăm sóc sức khỏe tâm thần cùng trợ lý ảo sử dụng trí tuệ nhân tạo’ của trường đại học CNTT và Truyền thông Việt – Hàn.</p><p style="text-align:justify">Theo Ban tổ chức, các dự án đạt giải thưởng VietFuture 2023 nhận được phần thưởng bằng tiền mặt và vật phẩm, nền tảng công nghệ. Trong đó, tổng giá trị giải thưởng bằng tiền mặt là 265 triệu đồng; học bổng từ CODEGYM có tổng trị giá 620 triệu đồng, quà tặng máy chủ đám mây và tài khoản học thuật dành cho sinh viên, giảng viên đến từ Alibaba Cloud có tổng trị giá 12 triệu USD.</p><p style="text-align:justify">Đại diện Ban tổ chức cũng chia sẻ thêm, giải thưởng VietFuture 2024 sẽ được phát động sớm, ngay từ tháng 1/2024 để các trường đại học, các doanh nghiệp tổ chức có thể tham gia đặt hàng, nhận làm cố vấn cho các dự án từ các nhóm sinh viên của các trường đại học trên cả nước.</p><p style="text-align:right"><strong>Theo Vietnamnet.vn</strong></p><div id="post_share_text" class="post_share_text"><span class="ti-share"></span></div><br class="clear"></div>`,
      thumbnailImg: "https://example.com/image1.jpg",
      title: "Main Post Title",
      createdDate: "2024-05-29",
    },
    {
      postId: 4,
      postContent: `<div class="post_img static "><a href="https://vietfuture.world/wp-content/uploads/2024/03/w-ong-nguyen-van-khoa-1-1-815.jpg" class="img_frame"><img src="https://vietfuture.world/wp-content/uploads/2024/03/aqw.jpg" alt="" class=""></a></div><p class="content-detail-sapo sm-sapo-mb-0" style="text-align:justify"><em><strong>Trong 20 dự án khởi nghiệp đổi mới sáng tạo được trao giải thưởng Sáng tạo Tương lai – VietFuture 2023, có 5 dự án của sinh viên FPT Arena Multimedia và các trường đại học Duy Tân, Lạc Hồng, Bách khoa Hà Nội, CNTT-TT Việt – Hàn được trao giải Nhất.</strong></em><span id="more-7182"></span></p><p style="text-align:justify">Lễ công bố và trao giải thưởng Sáng tạo tương lai – VietFuture Award 2023 vừa được Hiệp hội Phần mềm và dịch vụ CNTT Việt Nam (VINASA) tổ chức tại Huế, trong khuôn khổ&nbsp;<a href="https://vietnamnet.vn/tuan-le-chuyen-doi-so-hue-2023-huong-den-thuc-day-lien-ket-vung-2226948.html" target="_blank" rel="noopener noreferrer">Tuần lễ chuyển đổi số – Huế 2023</a>.</p><p style="text-align:justify">Là sáng kiến của VINASA với mong muốn thúc đẩy hợp tác giữa các doanh nghiệp và nhà trường trong khởi nghiệp đổi mới sáng tạo, năm nay là năm đầu tiên VietFuture Award được tổ chức.</p><p style="text-align:justify">VietFuture được định vị là giải thưởng thường niên dành cho các dự án khởi nghiệp đổi mới sáng tạo trong lĩnh vực KHCN của sinh viên các trường đại học, cao đẳng trên cả nước và các dự án xuất sắc theo đặt hàng từ doanh nghiệp.</p><p style="text-align:justify">Chương trình hướng tới mục tiêu thúc đẩy hợp tác giữa doanh nghiệp và các trường đại học trong hoạt động khởi nghiệp đổi mới sáng tạo nói chung; giúp các doanh nghiệp tìm được các ý tưởng mới cho hệ sinh thái các sản phẩm, giải pháp của doanh nghiệp; đồng thời tuyển dụng được các nhóm nhân tài.</p><p style="text-align:justify">Ông Nguyễn Văn Khoa, Chủ tịch VINASA, Trưởng ban tổ chức giải thưởng nhấn mạnh: VietFuture Award 2023 không chỉ đem đến trải nghiệm hữu ích, kiến thức có giá trị cho sinh viên. Những dự án xuất sắc sẽ khởi đầu cho mối liên kết gần gũi hơn nữa giữa doanh nghiệp và nhà trường trong việc tìm kiếm, hỗ trợ đưa các sáng tạo hữu ích của các em sinh viên vào thực tiễn, vào thị trường.</p><p style="text-align:justify"><em>“Những tập đoàn công nghệ lớn sẽ luôn ủng hộ và dành nguồn lực cho các hoạt động thúc đẩy đổi mới sáng tạo từ sớm như VietFuture”</em>, ông Nguyễn Văn Khoa chia sẻ</p><p style="text-align:justify">Trong năm đầu được tổ chức, sau 3 tháng phát động, VietFuture Award 2023 nhận được 74 đề cử từ 27 trường đại học, cao đẳng trên cả nước.</p><p style="text-align:justify">Vòng thi đánh giá thuyết trình toàn quốc và chung tuyển đã diễn ra với sự tham gia của 32 đề cử thuyết trình trực tiếp tại Huế vào ngày 14/12 và 42 đề cử tham gia thuyết trình trực tuyến đã diễn ra trước đó vào ngày 9/12.</p><p style="text-align:justify">Theo đánh giá của Ban giám khảo, ý tưởng, sản phẩm, dự án sinh viên dự thi có sự đa dạng, đầu tư cao, trải dài tới 14 lĩnh vực. Nhiều sản phẩm dự thi có tính ứng dụng tốt trong việc giải quyết vấn đề về môi trường, nông nghiệp, giáo dục, y tế, du lịch, văn hoá nghệ thuật, di chuyển thông minh, thương mại điện tử, logistic… hướng đến xây dựng môi trường sống chất lượng cũng như góp phần xây dựng xã hội số, phục vụ cuộc sống con người tốt hơn.</p><p style="text-align:justify">Trong đó, có dự án đã đi sâu vào hỗ trợ cho việc phát triển kinh tế, văn hóa, xã hội của địa phương. Đáng chú ý, ban tổ chức đã nhận về số lượng lớn các dự án đăng ký thuộc các lĩnh vực tiêu biểu như trí tuệ nhân tạo và tự động hoá; công nghệ xanh và tiết kiệm năng lượng; công nghệ cho xã hội &amp; phát triển cộng đồng; giáo dục, học tập và đào tạo 4.0.</p><div style="width:778px" class="wp-caption aligncenter"><img class="size-full" src="https://static-images.vnncdn.net/files/publish/2023/12/17/w-vietfure-2023-00-1-816.jpg?width=768&amp;s=bZ4eos8nopkoK4crf2_SbQ" width="768" height="481"><p class="wp-caption-text">Dự án của nhóm sinh viên trường đại học CNTT và Truyền thông Việt – Hàn là 1 trong 5 dự án giành giải Nhất của VietFuture 2023.</p></div><p style="text-align:justify">Kết quả, Hội đồng giám khảo VietFuture 2023 đã chọn được 20 đề cử xuất sắc để trao các giải Nhất, Nhì, Ba và Tiềm năng. Đây là những dự án được đánh giá xuất sắc về ý tưởng, có khả năng ứng dụng hiệu quả trong tương lai.</p><p style="text-align:justify">Trong đó, 5 dự án của sinh viên được trao giải Nhất gồm: ‘Sử dụng vỏ trấu và nilon để chế tạo ra vật liệu xây dựng (gạch lát đường) bảo vệ môi trường’ của Đại học Duy Tân; ‘Ứng dụng công nghệ 3D Animation để tăng khả năng tiếp cận lịch sử của học sinh trong thời kỳ đổi mới’ của trường đào tạo mỹ thuật đa phương tiện FPT Arena Multimedia; ‘Thiết kế và chế tạo Pin nhiên liệu cho xe điện’ của Đại học Lạc Hồng; ‘Ứng dụng vòng tròn xanh – ứng dụng khuyến khích học tập sáng tạo và mua bán các sản phẩm tái chế’ của Đại học Bách khoa Hà Nội; và ‘Metasoothe – Giải pháp chăm sóc sức khỏe tâm thần cùng trợ lý ảo sử dụng trí tuệ nhân tạo’ của trường đại học CNTT và Truyền thông Việt – Hàn.</p><p style="text-align:justify">Theo Ban tổ chức, các dự án đạt giải thưởng VietFuture 2023 nhận được phần thưởng bằng tiền mặt và vật phẩm, nền tảng công nghệ. Trong đó, tổng giá trị giải thưởng bằng tiền mặt là 265 triệu đồng; học bổng từ CODEGYM có tổng trị giá 620 triệu đồng, quà tặng máy chủ đám mây và tài khoản học thuật dành cho sinh viên, giảng viên đến từ Alibaba Cloud có tổng trị giá 12 triệu USD.</p><p style="text-align:justify">Đại diện Ban tổ chức cũng chia sẻ thêm, giải thưởng VietFuture 2024 sẽ được phát động sớm, ngay từ tháng 1/2024 để các trường đại học, các doanh nghiệp tổ chức có thể tham gia đặt hàng, nhận làm cố vấn cho các dự án từ các nhóm sinh viên của các trường đại học trên cả nước.</p><p style="text-align:right"><strong>Theo Vietnamnet.vn</strong></p><div id="post_share_text" class="post_share_text"><span class="ti-share"></span></div><br class="clear"></div>`,
      thumbnailImg: "https://example.com/image1.jpg",
      title: "Main Post Title",
      createdDate: "2024-05-29",
    },
  ],
  relatedPosts: [
    {
      postId: 2,
      postContent: "This is the content of the first related post.",
      thumbnailImg:
        "https://vietfuture.world/wp-content/uploads/2024/03/aqw.jpg",
      title: "Trao giải thưởng sáng tạo tương lai - VietFuture 2023",
      createdDate: "2024-05-28",
    },
    {
      postId: 3,
      postContent: "This is the content of the second related post.",
      thumbnailImg:
        "https://vietfuture.world/wp-content/uploads/2024/03/anh-1.jpeg",
      title:
        "VietFuture Award: Rút ngắn quãng đường đưa dự án khởi nghiệp vào thị trường",
      createdDate: "2024-05-27",
    },
    {
      postId: 4,
      postContent: "This is the content of the third related post.",
      thumbnailImg:
        "https://vietfuture.world/wp-content/uploads/2024/03/aqw.jpg",
      title:
        "Trao Giải thưởng Sáng tạo tương lai 2023 cho 20 dự án khởi nghiệp đổi mới sáng tạo của sinh viên",
      createdDate: "2024-05-26",
    },
  ],
};

const Detail = (props) => {
  const location = useLocation();
  const [endpoint, setEndpoint] = useState();

  useEffect(() => {
    const locationURL = location.pathname.substring(5);
    setEndpoint(locationURL);
  }, [endpoint]);

  const renderImage = () => {
    if (endpoint == "trao-giai-thuong-sang-tao-online")
      return fakeHotNews.post[0].postContent;
    else if (endpoint == "20-du-an-khoi-nghiep")
      return fakeHotNews.post[1].postContent;
    else if (endpoint == "vietfuture-award")
      return fakeHotNews.post[2].postContent;
    else return fakeHotNews.post[3].postContent;
  };
  console.log("renderImage: ", renderImage);

  return (
    <div>
      <SubBanner title="New" renderImage={renderImage} />
      <div className="flex mt-10 px-[133px]">
        <div className="w-2/3 mr-7">
          <div
            // dangerouslySetInnerHTML={{ __html: fakeHotNews.post.postContent }}
            dangerouslySetInnerHTML={{ __html: renderImage() }}
          ></div>
        </div>
        <div className="w-1/3 h-2/3 bg-white p-[32px]">
          <p className="text-lg font-semibold uppercase mb-[32px]">
            Bài viết mới nhất
          </p>
          {fakeHotNews.relatedPosts.map((e) => {
            return <HotNew key={e.postId} props={e} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Detail;

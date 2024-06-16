
export const navItems = [
  {
    id: 1,
    title: 'Giới thiệu',
    submenu: true,
    sublinks: [
      {
        id: 1,
        title: 'Giới thiệu chung',
        path: './introductionevent',
      },
      {
        id: 2,
        title: 'Lĩnh vực dự thi',
        path: './fieldofcompetition',
      },
      {
        id: 3, 
        title: 'Tiêu chí đánh giá',
        path: './evaluationcriteria',
      },
      {
        id: 4,
        title: 'Cơ cấu giải thưởng',
        path: './prizestructure',
      },
    ],
  },
  {
    id: 2,
    title: 'Tham gia',
    submenu: true,
    sublinks: [
      {
        id: 1,
        title: 'Quyền lợi tham gia',
        path: './benefits',
      },
      {
        id: 2,
        title: 'Quy trình đăng ký',
        path: './registrationprocess',
      },
      {
        id: 3,
        title: 'Đăng ký tham gia',
        path: './registration',
      },
    ],
  },
  {
    id: 3,
    title: 'Giải thưởng',
    submenu: true,
    sublinks: [
      {
        id: 1,
        title: 'Danh sách đề cử 2023',
        path: './nominationlist',
      },
    ],
  },
  {
    id: 4,
    title: 'Tin tức',
    submenu: false,
    sublinks: [],
    path: './news',
  },
  {
    id: 5,
    title: 'FAQs',
    submenu: false,
    sublinks: [],
    path: './faq',
  },
  {
    id: 6,
    title: 'Liên hệ',
    submenu: false,
    sublinks: [],
    path: './contactus',
  },
];

import { EnvironmentOutlined, PhoneOutlined } from "@ant-design/icons";
import React from "react";

export default function Address() {
  return (
    <div className="container pb-16">
      <p className="text-3xl font-bold mb-10">Địa chỉ văn phòng</p>
      <div className="flex items-center space-x-10">
        <div className="bg-yellow-300  h-[300px] w-1/4 p-4">
          <h1 className="font-bold text-2xl mb-3">Hà Nội</h1>
          <div className="flex items-center space-x-5">
            <PhoneOutlined className="font-bold" />
            <span>(024) 3577 2336 - 3577 2668</span>
          </div>
          <div className="flex items-center space-x-5 mt-3">
            <EnvironmentOutlined />
            <span>
              Tầng 11, tòa nhà Cung Trí thức thành phố, 01 Tôn Thất Thuyết, Cầu
              Giấy, Hà Nội
            </span>
          </div>
        </div>
        <div className="border border-[#3333331f]  h-[300px] w-1/4 p-4">
          <h1 className="font-bold text-2xl mb-3">Hồ Chí Minh</h1>
          <div className="flex items-center space-x-5">
            <PhoneOutlined className="font-bold" />
            <span>(028) 3821 2001</span>
          </div>
          <div className="flex items-center space-x-5 mt-3">
            <EnvironmentOutlined />
            <span>
              Tầng 4, Tòa nhà QTSC, Số 97-100 Nguyễn Công Trứ, P. Nguyễn Thái
              Bình, Q. 1, TPHCM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

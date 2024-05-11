import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Address() {
  return (
    <div className="w pb-16">
      <p className="text-3xl font-bold mb-10">Địa chỉ văn phòng</p>
      <div className="flex items-center space-x-10 ">
        <div className="content-center bg-yellow-300 h-[300px] w-1/4 p-4   ">
          <h1 className="font-bold text-3xl mb-3 items-center">Hà Nội</h1>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faPhone} />
            <span>(024) 3577 2336 - 3577 2668</span>
          </div>
          <div className="flex items-center space-x-5 mt-3">
            <FontAwesomeIcon icon={faLocationDot} />

            <span>
              Tầng 11, tòa nhà Cung Trí thức thành phố, 01 Tôn Thất Thuyết, Cầu
              Giấy, Hà Nội
            </span>
          </div>
        </div>
        <div className="content-center bg-white border border-[#3333331f]  h-[300px] w-1/4 p-4">
          <h1 className="font-bold text-3xl mb-3">Hồ Chí Minh</h1>
          <div className="flex items-center space-x-5">
            <FontAwesomeIcon icon={faPhone} />
            <span>(028) 3821 2001</span>
          </div>
          <div className="flex items-center space-x-5 mt-3">
            <FontAwesomeIcon icon={faLocationDot} />
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

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return (
    <div className="font-sans font-extrabold py-20 container">
      <div className="flex items-center justify-between  ">
        <div className="w-1/2 ">
          <h1 className="font-bold text-4xl mb-5">Người liên hệ</h1>
          <h2 className="font-medium text-lg mb-3">Ms Phương Anh</h2>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPhone} />
            <span className="font-medium text-base">0937 551 871</span>
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="font-medium text-base">anhnnp@vinasa.org.vn</span>
          </div>

          <div className="mt-3">
            <h3 className="font-medium text-lg mb-3">Ms Nguyễn Thị Mạnh</h3>
            <div className="flex font-bold">
              <FontAwesomeIcon icon={faPhone} className="mr-4 my-1" />{' '}
              <span className="font-medium text-base">0937 688 958</span>
            </div>
            <div className="flex ">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />{' '}
              <span className="font-medium text-base">
                manhnt@vinasa.org.vn
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%] mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <h1 className="mb-4 text-4xl font-bold">Liên hệ chúng tôi</h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="name"
              >
                Tên
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter Your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="phone"
              >
                Số điện thoại
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="text"
                placeholder="Enter Your phone number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="email"
              >
                Địa chỉ email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter Your email address"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="issue"
              >
                Bạn cần hỗ trợ vấn đề gì?
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="issue"
                >
                  <option>Choose an option</option>
                  {/* Add options here */}
                </select>
              </div>
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm  mb-2"
                htmlFor="category"
              >
                Danh Mục Hỗ Trợ
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  id="category"
                >
                  <option>Choose a category</option>
                  {/* Add categories here */}
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between ">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full "
                type="submit"
              >
                Gửi
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

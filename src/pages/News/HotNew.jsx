import React from "react";
import { CalendarOutlined } from "@ant-design/icons";

const HotNew = ({ props }) => {
  const { thumbnailImg, title, createdDate } = props;
  return (
    <div className="my-4 border-b-2 border-dashed  border-[#ccc]">
      <div className="w-[350px] h-auto flex bg-white px-4 py-7">
        <div className="w-1/2">
          <img className="w-[134px] h-[105px]" src={thumbnailImg}></img>
        </div>
        <div className="w-1/2 font-normal text-sm leading-relaxed tracking-normal">
          <p>{title}</p>
          <div className="flex ">
            <CalendarOutlined />
            <p className="ml-2 font-medium">{createdDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotNew;

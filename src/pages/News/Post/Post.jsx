import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";
const Post = (props) => {
  return (
    <div className="post-item border-b-[1px] border-[#ccc] px-3 py-8 font-open-sans">
      <div>
        <p className="font-semibold text-lg">Tháng Ba 29, 2024</p>
        <Link to={`/new/${props.endpoint}`}>
          <h1 className="mt-2 font-bold text-[22px]">{props.title}</h1>
        </Link>
      </div>
      <div className="flex gap-7 mt-2">
        <div className="post-img w-1/2">
          <img
            className=" w-[260px] h-[173px] object-cover rounded-3xl"
            src={props.img}
            alt=""
          />
        </div>
        <p className="w-1/2 post-content text-justify">{props.content}</p>
      </div>
    </div>
  );
};

export default Post;

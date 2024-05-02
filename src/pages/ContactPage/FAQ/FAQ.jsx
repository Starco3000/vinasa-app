import React, { useState } from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Collapse, Select } from "antd";
// const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const FAQ = () => {
  const [expandIconPosition, setExpandIconPosition] = useState("start");
  const onPositionChange = (newExpandIconPosition) => {
    setExpandIconPosition(newExpandIconPosition);
  };
  const onChange = (key) => {
    console.log(key);
  };
  const genExtra = () => (
    <SettingOutlined
      onClick={(event) => {
        // If you don't want click extra trigger collapse, you can prevent this:
        event.stopPropagation();
      }}
    />
  );
  const items = [
    {
      key: "1",
      label: "Tôi muốn đăng ký sự kiện này thì phải làm sao?",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: "2",
      label:
        "Bạn đầu tiên phải tạo tài khoản và đăng nhập trước, như thế thì bạn đã được ban tổ chức ghi nhận.",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: "3",
      label: "Tôi muốn đăng ký sự kiện này thì phải làm sao?",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: "4",
      label: "Tôi muốn đăng ký sự kiện này thì phải làm sao?",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: "5",
      label: "Tôi muốn đăng ký sự kiện này thì phải làm sao?",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
    {
      key: "6",
      label: "Tôi muốn đăng ký sự kiện này thì phải làm sao?",
      children: <div>{text}</div>,
      extra: genExtra(),
    },
  ];
  return (
    <div className="container py-16">
      <h1 className="font-bold text-2xl mb-10">Các câu hỏi thường gặp</h1>
      <Collapse
        defaultActiveKey={["1"]}
        onChange={onChange}
        expandIconPosition={expandIconPosition}
        items={items}
      />
      <br />
      <Select
        value={expandIconPosition}
        style={{
          margin: "0 8px",
        }}
        onChange={onPositionChange}
      ></Select>
    </div>
  );
};
export default FAQ;

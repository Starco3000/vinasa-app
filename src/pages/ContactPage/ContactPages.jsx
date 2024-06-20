import React from "react";
import Contact from "./Contact/Contact";
import Address from "./Address/Address";
import Map from "./Map/Map";
import SubBanner from "../../components/SubBanner";
const ContactPages = () => {
  return (
    <div>
      <SubBanner title="Liên hệ" />
      <Contact />
      <Address />
      <Map />
    </div>
  );
};

export default ContactPages;

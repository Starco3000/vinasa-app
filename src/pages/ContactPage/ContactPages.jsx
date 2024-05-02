import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Contact from "./Contact/Contact";
import Address from "./Address/Address";
import Map from "./Map/Map";
import FAQ from "./FAQ/FAQ";
export default function ContactPages() {
  return (
    <div>
      <Contact />
      <Address />
      <Map />
    </div>
  );
}

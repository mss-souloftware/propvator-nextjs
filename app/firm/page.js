import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Firms/FirmHero";
import ContentData from "../components/Firms/ContentData/ContentData";

export default function firm() {
  return (
    <>
      <Header />
      <FirmHero />
      <ContentData />
      <Footer />
    </>
  );
}

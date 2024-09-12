import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Firms/FirmHero";
import FirmContent from "../components/Firms/FirmContent";

export default function firm() {
  return (
    <>
      <Header />
      <FirmHero />
      <FirmContent />
      <Footer />
    </>
  );
}

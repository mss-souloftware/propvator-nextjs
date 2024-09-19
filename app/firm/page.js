import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Firms/FirmHero";
import FirmContent from "../components/Firms/FirmContent";
import styles from "./FirmHero.module.css";
import Tabs from "../components/Firms/Tabs/Tabs";

export default function firm() {
  return (
    <>
      <Header />
      <div className={`${styles.heroSection}`}>
        <FirmHero />
        <Tabs />
        <FirmContent />
      </div>
      <Footer />
    </>
  );
}

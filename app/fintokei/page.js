import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Fintokei/FirmHero";
import FirmContent from "../components/Fintokei/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/Fintokei/Tabs/Tabs";
import AfterTable from "@/app/components/Fintokei/AfterTable/AfterTable";
import AfterYT from "@/app/components/Fintokei/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/Fintokei/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/Fintokei/FAQ/FAQ";

export const metadata = {
  title: "Fintokei - Prop Firm Information & Discount Code",
  description:
    "Fintokei prop firm is a Czech Republic-based prop firm founded in 2022, known for its flexibility. Exclusive Fintokei discount code is available with Propvator.",
};

export default function firm() {
  return (
    <>
      <Header />
      <div className={`${styles.heroSection}`}>
        <FirmHero />
        <Tabs />
      </div>
      <FirmContent />
      <AfterTable />
      <VideoWrapper />
      <AfterYT />
      <FAQFirm />
      <Footer />
    </>
  );
}

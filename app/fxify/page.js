import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Firms/FirmHero";
import FirmContent from "../components/Firms/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/Firms/Tabs/Tabs";
import AfterTable from "@/app/components/Firms/AfterTable/AfterTable";
import AfterYT from "@/app/components/Firms/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/Firms/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/Firms/FAQ/FAQ";

export const metadata = {
  title: "Fxify - Prop Firm Information & Discount Code",
  description:
    "Compare different prop firms and select with confidence Generated by create next app",
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

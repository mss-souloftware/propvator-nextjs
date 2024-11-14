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

// DataSet
import HeroData from "@/app/firm/fxify/hero.json";
import ComanyData from "@/app/firm/fxify/company.json";

export const metadata = {
  title: "Fxify - Prop Firm Information & Discount Code",
  description:
    "Fxify prop firm is UK-based and was founded in 2023, offers traders up to $400,000 in capital. Fxify discount code is available with Propvator.",
};

export default function firm() {
  return (
    <>
      <Header />
      <div className={`${styles.heroSection}`}>
        <FirmHero dataSet={HeroData} />
        <Tabs ComanyData={ComanyData} />
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

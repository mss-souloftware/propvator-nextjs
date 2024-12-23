import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/FundedTradingPlus/FirmHero";
import FirmContent from "../components/FundedTradingPlus/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/FundedTradingPlus/Tabs/Tabs";
import AfterTable from "@/app/components/FundedTradingPlus/AfterTable/AfterTable";
import AfterYT from "@/app/components/FundedTradingPlus/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/FundedTradingPlus/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/FundedTradingPlus/FAQ/FAQ";

// DataSet
import HeroData from "@/app/firm/fxify/hero.json"
import ComanyData from "@/app/firm/fxify/company.json"

export const metadata = {
  title: "Funded Trading Plus - Prop Firm Information & Discount Code",
  description:
    "Funded Trading Plus is a UK-based prop firm established in 2021. Use the discount code PROPVATOR for exclusive offers",
};

export default function firm() {
  return (
    <>
      <Header />
      <div className={`${styles.heroSection}`}>
        <FirmHero dataSet={HeroData}/>
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

import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/InstantFunding/FirmHero";
import FirmContent from "../components/InstantFunding/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/InstantFunding/Tabs/Tabs";
import AfterTable from "@/app/components/InstantFunding/AfterTable/AfterTable";
import AfterYT from "@/app/components/InstantFunding/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/InstantFunding/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/InstantFunding/FAQ/FAQ";

export const metadata = {
  title: "Instant Funding - Prop Firm Information & Discount Code",
  description:
    "Instant Funding prop firm is UK-based and was founded in 2022, offers traders up to $2.5M in capital. Instant Funding discount code is available with Propvator.",
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

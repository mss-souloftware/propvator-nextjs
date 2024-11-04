import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/Monevis/FirmHero";
import FirmContent from "../components/Monevis/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/Monevis/Tabs/Tabs";
import AfterTable from "@/app/components/Monevis/AfterTable/AfterTable";
import AfterYT from "@/app/components/Monevis/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/Monevis/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/Monevis/FAQ/FAQ";

export const metadata = {
  title: "Monevis - Prop Firm Information & Discount Code",
  description:
    "Monevis prop firm is based in Slovenia and was founded in 2024, offering profit splits of up to 90%. Monevis discount code is available with Propvator.",
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

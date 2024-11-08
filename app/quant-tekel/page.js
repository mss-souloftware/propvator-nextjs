import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FirmHero from "../components/QuantTekel/FirmHero";
import FirmContent from "../components/QuantTekel/FirmContent";
import styles from "@/app/firm/FirmHero.module.css";
import Tabs from "../components/QuantTekel/Tabs/Tabs";
import AfterTable from "@/app/components/QuantTekel/AfterTable/AfterTable";
import AfterYT from "@/app/components/QuantTekel/AfterYT/AfterYT";
import VideoWrapper from "@/app/components/QuantTekel/VideoWrapper/VideoWrapper";
import FAQFirm from "@/app/components/QuantTekel/FAQ/FAQ";

export const metadata = {
  title: "Quant Tekel - Prop Firm Information & Discount Code",
  description:
    "Quant Tekel is a South Africa-based prop firm established in October 2023. Use the discount code PROPVATOR for exclusive offers with Quant Tekel.",
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

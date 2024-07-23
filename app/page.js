"use client"
import { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Guide from "./components/Guide/Guide";
import AdvanceFilter from "./components/AdvanceFilter/AdvanceFilter";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Testimonials from "./components/Testimonials/Testimonials";
import FeatureTable from "./components/FeatureTable/FeatureTable";

export default function Home() {
  const [filter, setfilter] = useState({
    hasTempered: false,
    assetType: {
      forex: false,
      futuresStocks: false,
      crypto: false,
      indices: false,
      Commodities: false
    }
  });
  return (
    <NextUIProvider>
      <Header />
      <Hero filter={filter} setfilter={setfilter} />
      <AdvanceFilter />
      <FeatureTable filter={filter} setfilter={setfilter} />
      <Guide />
      <Testimonials />
      <Newsletter />
      <Footer />
    </NextUIProvider>
  );
}

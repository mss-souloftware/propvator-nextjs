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
    brands: {
      "alpha capital group": false,
      "aquafunded": false,
      "blue guardian": false,
      "breakout": false,
      "brightfunded": false,
      "crypto fund trader": false,
      "e8 markets": false,
      "finotive funding": false,
      "for traders": false,
      "ftmo": false,
      "funded elite": false,
      "funded trading plus": false,
      "fundednext": false,
      "funding frontier": false,
      "funding pips": false,
      "funding traders": false,
      "fxify": false,
      "glow node": false,
      "goat funded trader": false,
      "instant funding": false,
      "lark funding": false,
      "maven": false,
      "ment funding": false,
      "myfundedfx": false,
      "the trading pit": false,
    },
    sizeType: {
      "5k": false,
      "10k": false,
      "25k": false,
      "50k": false,
      "100k": false,
      "200k": false,
    },
    accountTypes: {
      "instant": false,
      "1 step": false,
      "2 steps": false,
      "3 steps": false
    },
    countries: {
      "usa": false,
      "pakistan": false,
      "iran": false,
      "nigeria": false,
      "turkiye": false,
      "dubai": false
    },
    platforms: {
      "mt4": false,
      "mt5": false,
      "ctrader": false,
      "dxtrade": false,
      "tradelocker": false,
      "match trader": false
    },
    broker: {
      "think markets": false,
      "purple trading": false,
      "virtual markets": false,
      "capital markets": false,
      "match trade": false,
      "finesse fx": false,
      "taurex": false,
      "fxpig": false,
      "fxflat": false,
      "gbe brokers": false,
      "cbt limited": false,
      "own broker": false
    },
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

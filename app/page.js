import { NextUIProvider } from "@nextui-org/react";

import RangeBox from "./components/AdvanceFilter/RangeBox";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Platforms from "./components/Platforms/Platforms";
import Features from "./components/Features/Features";
import Guide from "./components/Guide/Guide";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <Hero />

       
      <Platforms/>

      {/* <RangeBox /> */}
    <Features/>
    <Guide/>
    </NextUIProvider>
  );
}

import { NextUIProvider } from "@nextui-org/react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Platforms from "./components/Platforms/Platforms";
import Features from "./components/Features/Features";
import Guide from "./components/Guide/Guide";
import AdvanceFilter from "./components/AdvanceFilter/AdvanceFilter";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <Hero />
      <AdvanceFilter />
      <Platforms/>
    <Features/>
    <Guide/>
    </NextUIProvider>
  );
}

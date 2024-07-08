import { NextUIProvider } from "@nextui-org/react";

import RangeBox from "./components/AdvanceFilter/RangeBox";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <Hero />
      <RangeBox />
    </NextUIProvider>
  );
}

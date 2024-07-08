import { NextUIProvider } from "@nextui-org/react";

import RangeBox from "./components/AdvanceFilter/RangeBox";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Platforms from "./components/Platforms/Platforms";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <Hero />
<<<<<<< HEAD
      {/* <RangeBox /> */}
      <Platforms/>
=======
      <RangeBox />
>>>>>>> 809416ac77aadbd3ae805abd1d78b7662f97e10c
    </NextUIProvider>
  );
}

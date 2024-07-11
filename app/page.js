import { NextUIProvider } from "@nextui-org/react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Platforms from "./components/Platforms/Platforms";
import Features from "./components/Features/Features";
import Guide from "./components/Guide/Guide";
import AdvanceFilter from "./components/AdvanceFilter/AdvanceFilter";
import Footer from "./components/Footer/Footer";
import Newsletter from "./components/Newsletter/Newsletter";
import Testimonials from "./components/Testimonials/Testimonials";
import FeatureTable from "./components/FeatureTable/FeatureTable";

export default function Home() {
  return (
    <NextUIProvider>
      <Header />
      <Hero />
      <AdvanceFilter />
      <Platforms />
      <FeatureTable />
      <Features />
      <Guide />
      <Testimonials />
      <Newsletter />
      <Footer />
    </NextUIProvider>
  );
}

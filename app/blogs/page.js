import React from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import BlogsHero from "../components/Blogs/BlogsHero";
import BlogList from "../components/Blogs/BlogList/BlogList";

export const metadata = {
  title: "Blogs - Prop Firm Information & Discount Code",
  description: "Prop Firm News and Strategies Blog",
};

export default function firm() {
  return (
    <>
      <Header />
      <BlogsHero />
      <BlogList />
      <Footer />
    </>
  );
}

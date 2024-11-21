"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import filterStyle from "@/app/components/Blogs/FilterButtons.module.css";

export default function BlogsHero() {
  const [selectedStep, setSelectedStep] = useState("All"); // Single selection

  return (
    <section className="mt-40">
      <div className="container mx-auto px-3 md:px-0">
        <h1 className="text-white sm:text-5xl font-bold flex items-center">
          Prop Firm News and Strategies Blog
        </h1>

        <div className={`${filterStyle.filterButtons} mb-4`}>
          <button
            onClick={() => setSelectedStep("All")}
            className={`${filterStyle.filterStepButton} ${
              selectedStep === "All" ? "bg-[#3338D3]" : ""
            }`}
          >
            All
          </button>

          <button
            onClick={() => setSelectedStep("News")}
            className={`${filterStyle.filterStepButton} ${
              selectedStep === "News" ? "bg-[#3338D3]" : ""
            }`}
          >
            News
          </button>

          <button
            onClick={() => setSelectedStep("Strategy")}
            className={`${filterStyle.filterStepButton} ${
              selectedStep === "Strategy" ? "bg-[#3338D3]" : ""
            }`}
          >
            Strategy
          </button>

          <button
            onClick={() => setSelectedStep("Psychology")}
            className={`${filterStyle.filterStepButton} ${
              selectedStep === "Psychology" ? "bg-[#3338D3]" : ""
            }`}
          >
            Psychology
          </button>
        </div>
      </div>
    </section>
  );
}

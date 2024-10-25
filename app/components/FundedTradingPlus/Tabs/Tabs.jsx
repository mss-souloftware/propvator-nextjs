"use client";
import { useState } from "react";
import styles from "./Tabs.module.css";
import CompanyData from "@/app/components/FundedTradingPlus/CompanyData/CompanyData";
import Rules from "@/app/components/FundedTradingPlus/Rules/Rules";
import Conditions from "../Conditions/Conditions";
import Restrictions from "../Restrictions/Restrictions";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Overview", "Rules", "Conditions", "Restrictions"];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className={styles.tabButtons}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${
              activeTab === index ? styles.active : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {activeTab === 0 && (
          <div className="text-white text-center mt-5">
            <CompanyData />{" "}
          </div>
        )}
        {activeTab === 1 && (
          <div className="text-white text-center mt-5">
            <Rules />
          </div>
        )}
        {activeTab === 2 && (
          <div className="text-white text-center mt-5">
            <Conditions />
          </div>
        )}
        {activeTab === 3 && (
          <div className="text-white text-center mt-5">
            <Restrictions />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;

"use client";
import { useState } from "react";
import styles from "./Tabs.module.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Overview", "Commissions", "Leverage", "Trading Conditions"];

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
        {activeTab === 0 && <div className="text-white text-center mt-5">Content for Tab 1</div>}
        {activeTab === 1 && <div className="text-white text-center mt-5">Content for Tab 2</div>}
        {activeTab === 2 && <div className="text-white text-center mt-5">Content for Tab 3</div>}
        {activeTab === 3 && <div className="text-white text-center mt-5">Content for Tab 4</div>}
      </div>
    </div>
  );
};

export default Tabs;

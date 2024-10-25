"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "What broker does Fxify Use?",
      content:
        "FXIFY has partnered with FXPIG (www.fxpig.com), an FX and CFD brokerage established in 2010. This collaboration provides FXIFY prop traders with true market access, along with fast execution and minimal slippage.",
    },
    {
      title: "Where is Fxify located?",
      content:
        "FXIFY is located at New Broad Street House, 35 New Broad Street, London, United Kingdom, EC2M 1NH. The company was founded in April 2023 by David Bhidey",
    },
    {
      title: "How many accounts can I have with Fxify?",
      content:
        "Fxify traders can purchase one account of each size: $10,000, $15,000, $25,000, $50,000, $100,000, $200,000, and $400,000. They cannot trade two accounts of the same size simultaneously; they must pass one before buying another. The maximum allocation can reach $800,000 if passed separately.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto md:px-0 px-3">
      <div className={styles.innerSection}>
        <h2 className="text-white text-center text-2xl font-bold mb-6">
          FAQ's
        </h2>
        <div className="space-y-4 mb-10">
          {accordionData.map((item, index) => (
            <div key={index} className="rounded-lg">
              <button
                className={`${styles.accordionTab} flex justify-between w-full p-4 font-medium text-left`}
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                <span>{activeIndex === index ? "-" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className={styles.accordionTabContent}>
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQFirm;

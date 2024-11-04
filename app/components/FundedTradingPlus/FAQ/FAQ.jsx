"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "What are the profit splits at Funded Trading Plus?",
      content:
        "The initial profit split is 70% for instant funding, increasing to 80% for standard accounts. Consistent performance can raise the profit split to 90%.",
    },
    {
      title:
        "Are there any restrictions on holding positions over the weekend?",
      content:
        "No, there are no restrictions on weekend holding with Funded Trading Plus. Traders can keep their positions open over the weekend, however, there are swap fees.",
    },
    {
      title: "What trading platforms are supported by Funded Trading Plus?",
      content:
        "Funded Trading Plus supports multiple trading platforms, including MetaTrader 4 (MT4), MetaTrader 5 (MT5), and cTrader.",
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

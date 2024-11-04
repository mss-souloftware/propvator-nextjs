"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "What's the best Monevis discount code?",
      content:
        "The best discount code for Monevis is PROPVATOR, which you can use at checkout to receive the highest available discount.",
    },
    {
      title: "What's the profit split at Monevis?",
      content:
        "Monevis offers a starting profit split of 75% for funded accounts. Upon purchase, traders can opt for an 85% split, and there's potential to scale up to a maximum profit split of 90%.",
    },
    {
      title: "What platforms does Monevis have?",
      content:
        "Monevis provides access to MetaTrader 5 (MT5), which is known for its versatility and range of trading features.",
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

"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "Is Fintokei similar to FTMO?",
      content:
        "Fintokei and FTMO are similar in their country of origin, the Czech Republic, which is known as a hub for prop firms. They also share similarities in terms of professionalism and flexibility.",
    },
    {
      title: "Does Fintokei allow HFTs?",
      content:
        "Fintokei allows most types of Expert Advisors (EAs), but High-Frequency Trading (HFT) is prohibited.",
    },
    {
      title: "Does Fintokei allow news trading?",
      content:
        "Yes, Fintokei offers full flexibility for news trading, allowing you to trade as usual during major news events without any restrictions.",
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

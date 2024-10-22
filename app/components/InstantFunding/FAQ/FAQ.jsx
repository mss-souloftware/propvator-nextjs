"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "1. Is Instant Funding Prop Firm legitimate?",
      content: "Instant Funding has been active since June 2022 and has been stable, maintaining a good reputation on review websites. Traders are happy with their fair trading conditions, and the firm has a strong track record of issuing payouts. It also offers a diverse selection of account types and trading platforms.",
    },
    {
      title: "2. What's the best Instant Funding Prop Firm coupon code?",
      content: "The best coupon code for Instant Funding is 'PROPVATOR,' which can be applied at checkout for the highest discount available at the time of your purchase.",
    },
    {
      title: "3. Does Instant Funding have MT5?",
      content: "Instant Funding has three available platforms: MT5, cTrader, and DX Trade, giving you diverse options to select the platform that works for you.",
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

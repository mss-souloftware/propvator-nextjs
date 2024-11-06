"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "What is the best discount code for Quant Tekel?",
      content:
        "The best discount code for Quant Tekel is PROPVATOR, which you can use at checkout to receive the highest available discount at the time of your purchase.",
    },
    {
      title: "What happened to Ascendx Capital?",
      content:
        "Ascendx Capital underwent a rebranding and is now known as Quant Tekel. The firm transitioned to this new name while continuing to operate as both a prop trading firm and a broker.",
    },
    {
      title: "What is the profit split at Quant Tekel?",
      content:
        "At Quant Tekel, traders enjoy a profit split starting at 90% for their accounts, allowing them to maximize their earnings while trading.",
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

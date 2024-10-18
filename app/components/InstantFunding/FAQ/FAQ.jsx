"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const FAQFirm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // JSON data for the accordion
  const accordionData = [
    {
      title: "FAQ 1",
      content: "This is the content for the first FAQ.",
    },
    {
      title: "FAQ 2",
      content: "This is the content for the second FAQ.",
    },
    {
      title: "FAQ 3",
      content: "This is the content for the third FAQ.",
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

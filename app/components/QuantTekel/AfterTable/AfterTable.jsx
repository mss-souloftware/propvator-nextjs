import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h6 className="text-white text-center text-2xl mb-3">
          Quant Tekel Company Overview
        </h6>
        <p className="text-white text-center">
          Quant Tekel is a South Africa-based prop firm established in October
          2023 by Sanswell Tassman, offering traders capital access through multiple
          account types. With account sizes ranging from $10,000 to $200,000,
          traders have the opportunity to scale their accounts while enjoying
          competitive profit splits starting at 90%. Quant Tekel provides
          reliable access to the markets, allowing traders to utilize various
          strategies, including overnight and weekend holding.
        </p>
      </div>
    </div>
  );
}

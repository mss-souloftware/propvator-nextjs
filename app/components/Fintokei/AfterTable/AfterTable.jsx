import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h6 className="text-white text-center text-2xl mb-3">
          Fintokei Company Overview
        </h6>
        <p className="text-white text-center">
          Fintokei is a Czech Republic-based prop firm founded in late 2022 by
          David Varga, offering traders up to $4,000,000 in capital through a
          variety of challenges. With account types ranging from $10,000 to
          $400,000, traders can grow their accounts and enjoy profit splits
          starting at 80%. Backed by the broker Purple Trading, Fintokei
          provides reliable access to the markets and allows traders to keep
          positions open overnight and over the weekend. With a strong focus on
          reliability and fair conditions, Fintokei aims to support traders in
          achieving consistent profitability.
        </p>
      </div>
    </div>
  );
}

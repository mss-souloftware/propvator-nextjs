import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h6 className="text-white text-center text-2xl mb-3">
          Monevis Company Overview
        </h6>
        <p className="text-white text-center">
          Monevis is a Slovakia-based prop firm founded in March 2024 by Milos
          Mosovsky, offering traders up to $100,000 in capital after passing
          their trading challenge. With funding options from $5,000 to $100,000,
          traders can scale their accounts to $2,000,000 with profit splits up
          to 85%. Monevis stands out for having their own MT5 license, 7-day
          payouts, and specialising in two-step challenges.
        </p>
      </div>
    </div>
  );
}

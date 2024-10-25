import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h6 className="text-white text-center text-2xl mb-3">
          Funded Trading Plus Company Overview
        </h6>
        <p className="text-white text-center">
          Funded Trading Plus is a UK-based prop firm founded in November 2021
          by Simon Massey, offering traders up to $200,000 in capital after
          passing their trading challenge. With funding options from $5,000
          (instant funding model) to $200,000, traders can scale their accounts
          to $2,500,000 with profit splits up to 80%. Funded Trading Plus stands
          out for its minimal restrictions, a proven track record since 2021,
          and minimal delays. They have over 2,000 reviews on Trust Pilot with a
          rating of 4.7.
        </p>
      </div>
    </div>
  );
}

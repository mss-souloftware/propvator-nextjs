import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <h6 className="text-white text-center text-2xl mb-3">
          Instant Funding Company Overview
        </h6>
        <p className="text-white text-center">
          Instant Funding is a UK-based prop firm founded in 2022 by Lewis
          Mansbridge, offering traders up to $200,000 in capital after passing
          their trading challenge. With funding options starting from $10,000,
          traders can scale their accounts to $400,000 with profit splits
          starting at 80% for the two-step challenge. Instant Funding stands out
          for its instant accounts without the need to pass challenges, a
          helpful support team, and crypto payouts.
        </p>
      </div>
    </div>
  );
}

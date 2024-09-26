import React from "react";
import styles from "./AfterTable.module.css";

export default function AfterTable() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="p-0 md:p-6">
        <p className="text-white text-center">
          FXIFY is a UK-based prop firm founded in 2023 by Yaniv Butel, offering
          traders up to $400,000 in capital after passing a series of
          challenges. With funding options from $10,000 to $400,000, traders can
          scale their accounts to $4 million with profit splits up to 90%. FXIFY
          stands out for its flexibility, allowing traders to customize their
          experience by increasing profit splits, reducing commissions, and
          more. Partnered with a liquidity provider for direct market access,
          FXIFY empowers full-time traders with substantial capital and
          professional support.
        </p>
      </div>
    </div>
  );
}

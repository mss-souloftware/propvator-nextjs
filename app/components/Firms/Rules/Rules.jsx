import React from "react";
import styles from "./Rules.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Rules() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-2xl md:text-3xl">Rules</h2>
        <div className={`${tableStyle.tableLayoutBox}`}>
          <h3>Raw Spread Accounts</h3>
          <ul className={`${tableStyle.tableLayoutBoxs}`}>
            <li>
              <h4>Swaps</h4>
              <span>No</span>
            </li>
            <li>
              <h4>EAs Allowed</h4>
              <span>Yes</span>
            </li>
            <li>
              <h4>News Trading</h4>
              <span>Yes</span>
            </li>
            <li>
              <h4>Weekend Holding</h4>
              <span>Yes</span>
            </li>
            <li>
              <h4>Hedging</h4>
              <span>Yes</span>
            </li>
            <li>
              <h4>HFT</h4>
              <span>No</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

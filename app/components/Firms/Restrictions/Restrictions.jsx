import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Restrictions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-12 p-4 ">
        <h2 className="text-white text-3xl">Restrictions</h2>
        <div className={`${tableStyle.tableLayoutBox}`}>
          <h3>Trading Conditions</h3>
          <ul>
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
              <h4>MT5</h4>
              <span>Yes</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

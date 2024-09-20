import React from "react";
import styles from "./Rules.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Rules() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-12 p-4 ">
        <h2 className="text-white text-3xl">Rules</h2>
        <div className={`${tableStyle.tableLayoutBox}`}>
          <h3>Raw Spread Accounts</h3>
          <ul>
            <li>
              <h4>Forex</h4>
              <span>$6 per round lot</span>
            </li>
            <li>
              <h4>Index CFDs</h4>
              <span>$6 per round lot</span>
            </li>
            <li>
              <h4>Metals</h4>
              <span>$6 per round lot</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

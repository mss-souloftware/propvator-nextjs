import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Conditions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-12 border border-primary rounded p-4 ">
        <h2 className="text-white text-3xl">Conditions</h2>
        <div className={`${tableStyle.tableLayoutBox}`}>
          <h3>Raw Spread Accounts</h3>
          <ul>
            <li>
              <h4>Forex</h4>
              <span>1:30</span>
            </li>
            <li>
              <h4>Gold</h4>
              <span>1:30</span>
            </li>
            <li>
              <h4>Indices</h4>
              <span>1:10</span>
            </li>
            <li>
              <h4>Stocks</h4>
              <span>1:2</span>
            </li>
            <li>
              <h4>Crypto</h4>
              <span>1:2</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

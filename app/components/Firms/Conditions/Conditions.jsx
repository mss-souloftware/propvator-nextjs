import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Conditions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-12 p-4 ">
        <h2 className="text-white text-3xl">Conditions</h2>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className={`${tableStyle.tableLayoutBox}`}>
            <h3>Calculated per round lot</h3>
            <ul>
              <li>
                <h4>Forex</h4>
                <span>$6 ($0 Available)</span>
              </li>
              <li>
                <h4>Index CFDs</h4>
                <span>$6 ($0 Available)</span>
              </li>
              <li>
                <h4>Metals</h4>
                <span>$6 ($0 Available)</span>
              </li>
            </ul>
          </div>

          <div className={`${tableStyle.tableLayoutBox}`}>
            <h3>Leverage</h3>
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
    </div>
  );
}

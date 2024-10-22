import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";
import Link from "next/link";

export default function Conditions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-2xl md:text-3xl">Conditions</h2>
        <div className="flex sm:flex-row flex-col gap-5">
          <div className={`${tableStyle.tableLayoutBox2}`}>
          <div className={`${tableStyle.tableLayoutBox}`}>
            <h3>Commissions (2 Step Challenge)</h3>
            <ul>
              <li>
                <h4>Forex</h4>
                <span>$6</span>
              </li>
              <li>
                <h4>Gold</h4>
                <span>$6</span>
              </li>
              <li>
                <h4>Indices</h4>
                <span>$6</span>
              </li>
              <li>
                <h4>Commodities</h4>
                <span>$6</span>
              </li>
            </ul>

            
          </div>
          <Link
                href="/"
                className={`bg-[linear-gradient(90deg,rgba(125,227,250,1)16%,rgba(89,146,252,1)44%,rgba(51,59,255,1)74%)] text-white border border-primary rounded flex flex-col py-2 px-9 mt-5`}
              >
                <p className="flex items-center text-xl">
                Calculated per round lot
                 
                </p>
              </Link>
          </div>

          <div className={`${tableStyle.tableLayoutBox}`}>
            <h3>Leverage</h3>
            <ul>
              <li>
                <h4>Forex</h4>
                <span>1:100</span>
              </li>
              <li>
                <h4>Gold</h4>
                <span>1:100</span>
              </li>
              <li>
                <h4>Indices</h4>
                <span>1:50</span>
              </li>
              <li>
                <h4>Commodities</h4>
                <span>1:20</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

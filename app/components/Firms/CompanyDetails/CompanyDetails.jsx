import React from "react";
import styles from './CompanyDetails.module.css';

export default function CompanyDetails() {
  return (
    <>
      

      <div className="mt-12 border border-primary rounded p-4">
        <h2 className="text-white text-2xl mb-4">Trading Conditions</h2>

        <ul className={`${styles.listFeatures} text-white`}>
          <li className="flex items-center justify-between mt-2">
            <p>Swaps</p>
            <span>No</span>
          </li>

          <li className="flex items-center justify-between mt-2">
            <p>EAs Allowed</p>
            <span>Yes</span>
          </li>

          <li className="flex items-center justify-between mt-2">
            <p>News Trading</p>
            <span>Yes</span>
          </li>

          <li className="flex items-center justify-between mt-2">
            <p>Weekend Holding</p>
            <span>Yes</span>
          </li>

          <li className="flex items-center justify-between mt-2">
            <p>MT5</p>
            <span>Yes</span>
          </li>
        </ul>
      </div>
    </>
  );
}

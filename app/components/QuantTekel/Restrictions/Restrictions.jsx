import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Restrictions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-2xl md:text-3xl">
          Restricted Countries
        </h2>
        <p className="text-white mt-4">
          Iran, Iraq, North Korea, Russian, Pakistan.
        </p>
      </div>
    </div>
  );
}

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
          Afghanistan, Burundi, Central African Republic, Congo Republic, Cuba,
          Crimea, Democratic Republic of Congo, Eritrea, Guinea, Guinea-Bissau,
          Iran, Iraq, Liberia, Libya, Myanmar, North Korea, Papua New Guinea,
          North Korea, Russia, Somalia, South Sudan, Sudan, Syria, Vanuatu,
          Venezuela, Yemen and Zimbabwe.
        </p>
      </div>
    </div>
  );
}

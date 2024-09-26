import React from "react";
import styles from "../BoxLayout.module.css";
import tableStyle from "../TableLayout.module.css";

export default function Restrictions() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-3xl">Restricted Countries</h2>
        <p className="text-white mt-4">
          Afghanistan, Algeria, Burundi, Central African
          Republic, Congo Republic, Crimea, Cuba, Democratic Republic of Congo,
          Eritrea, Ghana, Guinea, Guinea-Bissau, Iran, Iraq, Ivory Coast, Kenya,
          Liberia, Libya, Myanmar, Nicaragua, North Korea, Papua New Guinea,
          Palestine, Russia, Somalia, South Sudan, Sudan, Syria, Vanuatu,
          Venezuela, Vietnam, Yemen, Zimbabwe
        </p>
      </div>
    </div>
  );
}

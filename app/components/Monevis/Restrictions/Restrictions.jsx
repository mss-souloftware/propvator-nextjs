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
          Afghanistan, Central African Republic, Congo (Brazzaville),
          (Kinshasa), Crimea, Donetsk, Cuba, Guinea-Bissau, Iran, Iraq, North
          Korea, Libya, Luhansk, Mali, Russian Federation, Somalia, South Sudan,
          Sudan, Syria, United States, Venezuela, Yemen.
        </p>
      </div>
    </div>
  );
}

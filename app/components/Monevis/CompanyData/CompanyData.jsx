import React from "react";
import styles from "./CompanyData.module.css";

export default function CompanyData() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-2xl md:text-3xl">Company Overview</h2>
        <div className="flex flex-col sm:flex-row justify-between mt-8">
          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Established
            </span>
            <h4 className="mb-1">Milos Mosovsky</h4>
            <h4>March 2024</h4>
            <h4>Slovakia</h4>

            <svg
              className="mx-auto rounded-lg"
              width="50px"
              height="50px"
              viewBox="0 0 10800 7200"
              fill="#ee1c25"
            >
              <title>Flag of Slovakia</title>
              <defs>
                <clipPath id="c">
                  <path
                    id="s"
                    d="m4678 1746c0 0 56 561 56 1683-8 1146-865 1726-1494 2031-629-305-1486-885-1494-2031 0-1122 56-1683 56-1683z"
                  />
                </clipPath>
              </defs>
              <g transform="scale(1200)">
                <path fill="#fff" d="m0 0h9v6H0z" />
                <path fill="#0b4ea2" d="m0 2h9v4H0z" />
                <path d="m0 4h9v2H0z" />
              </g>
              <use href="#s" />
              <path
                fill="#fff"
                d="m3113 4800V3397c-475 0-610 42-752 85a2323 2323 0 0 0 0-431c142 43 277 85 752 85v-390c-150 0-357 6-595 87a2323 2323 0 0 0 0-432c238 80 445 86 595 86 0-113-35-356-79-557a2323 2323 0 0 0 412 0c-44 201-79 444-79 557 150 0 357-6 595-86a2323 2323 0 0 0 0 432c-238-81-445-87-595-87v390c475 0 610-42 752-85a2323 2323 0 0 0 0 431c-142-43-277-85-752-85v1403z"
              />
              <path
                clipPath="url(#c)"
                fill="#0b4ea2"
                d="m2463 5903a507 867 0 1 1 319-1541 584 1084 0 0 1 916 0 507 867 0 1 1 319 1541z"
              />
              <use href="#s" fill="none" stroke="#fff" strokeWidth="108" />
            </svg>
          </div>

          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Platform
            </span>
            <ul>
              <li>
                <h4>MT5</h4>
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#006FEE"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>
              <li>
                <h4>MT4</h4>
                <span></span>
              </li>

              <li>
                <h4>cTrader</h4>
                <span></span>
              </li>

              <li>
                <h4>DX Trade</h4>
                <span></span>
              </li>
            </ul>
          </div>

          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Account Types
            </span>
            <ul>
              <li>
                <h4>Instant</h4>
                <span></span>
              </li>
              <li>
                <h4>1 Step</h4>
                <span></span>
              </li>

              <li>
                <h4>2 Step</h4>
                <span>
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 12.6111L8.92308 17.5L20 6.5"
                      stroke="#006FEE"
                      stroke-width="5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </li>

              <li>
                <h4>3 Step</h4>
                <span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

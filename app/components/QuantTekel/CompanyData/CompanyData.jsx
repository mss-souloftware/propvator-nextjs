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
            <h4 className="mb-1">Sanswell Tassman</h4>
            <h4>October 2023</h4>
            <h4>South Africa</h4>

            <svg
              className="mx-auto rounded-lg"
              width="50px"
              height="50px"
              viewBox="0 0 90 60"
            >
              <title>Flag of South Africa</title>
              <defs>
                <clipPath id="t">
                  <path d="m0 0 45 30L0 60z" />
                </clipPath>
                <clipPath id="f">
                  <path d="m0 0h90v60H0z" />
                </clipPath>
              </defs>
              <path fill="#e03c31" d="m0 0h90v30H45z" />
              <path fill="#001489" d="m0 60h90V30H45z" />
              <g clip-path="url(#f)" fill="none">
                <path
                  stroke="#fff"
                  stroke-width="20"
                  d="m90 30H45L0 0v60l45-30"
                />
                <path
                  fill="#000"
                  stroke="#ffb81c"
                  stroke-width="20"
                  clip-path="url(#t)"
                  d="m0 0 45 30L0 60"
                />
                <path
                  stroke="#007749"
                  stroke-width="12"
                  d="m0 0 45 30h45M0 60l45-30"
                />
              </g>
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
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

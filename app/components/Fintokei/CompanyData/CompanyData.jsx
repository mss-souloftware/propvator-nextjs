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
            <h4 className="mb-1">David Varga</h4>
            <h4>December 2022</h4>
            <h4>Czech Republic</h4>

            <svg
              className="mx-auto rounded-lg"
              width="50px"
              height="50px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 512 512"
            >
              <path
                style={{ fill: "#11467F" }}
                d="M13.7,97.251C5.326,104.286,0,114.829,0,126.621V385.38c0,11.791,5.326,22.335,13.7,29.369L256,256
	L13.7,97.251z"
              />
              <path
                style={{ fill: "#D7141B" }}
                d="M13.7,414.749c6.665,5.599,15.258,8.975,24.644,8.975h435.31c21.177,0,38.345-17.167,38.345-38.345
	V256H256L13.7,414.749z"
              />
              <path
                style={{ fill: "#FFFFFF" }}
                d="M473.655,88.276H38.345c-9.386,0-17.98,3.378-24.644,8.975L256,256h256V126.621
	C512,105.443,494.833,88.276,473.655,88.276z"
              />
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
                <h4>cTrader</h4>
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

import React from "react";
import styles from "./CompanyData.module.css";

export default function CompanyData(ComanyData) {
  let cpData = ComanyData.ComanyData.ComanyData[0];

  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-8 p-4 ">
        <h2 className="text-white text-2xl md:text-3xl">Company Overview</h2>
        <div className="flex flex-col sm:flex-row justify-between mt-8">
          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Established
            </span>
            <h4 className="mb-1">{cpData.ceo}</h4>
            <h4>{cpData.date}</h4>
            <h4>{cpData.country}</h4>

            <svg
              className="mx-auto rounded-lg"
              viewBox="0 0 60 30"
              width="50px"
              height="50px"
            >
              <clipPath id="s">
                <path d="M0,0 v30 h60 v-30 z" />
              </clipPath>
              <clipPath id="t">
                <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
              </clipPath>
              <g clip-path="url(#s)">
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  stroke="#fff"
                  stroke-width="6"
                />
                <path
                  d="M0,0 L60,30 M60,0 L0,30"
                  clip-path="url(#t)"
                  stroke="#C8102E"
                  stroke-width="4"
                />
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10" />
                <path
                  d="M30,0 v30 M0,15 h60"
                  stroke="#C8102E"
                  stroke-width="6"
                />
              </g>
            </svg>
          </div>

          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Platform
            </span>
            <ul>
              {cpData.dataTypes.platforms.map((platform, index) => (
                <li key={index}>
                  <h4>{platform.name}</h4>
                  <span>
                    {platform.value ? (
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
                    ) : (
                      ""
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Account Types
            </span>
            <ul>
              {cpData.dataTypes.accountTypes.map((accountType, index) => (
                <li key={index}>
                  <h4>{accountType.name}</h4>
                  <span>
                    {accountType.value ? (
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
                    ) : (
                      ""
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

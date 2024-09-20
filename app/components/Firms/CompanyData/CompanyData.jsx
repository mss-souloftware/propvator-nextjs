import React from "react";
import styles from "./CompanyData.module.css";

export default function CompanyData() {
  return (
    <div className={`${styles.wrapperSec} mx-auto`}>
      <div className="mt-12 border border-primary rounded p-4 ">
        <h2 className="text-white text-3xl">Company Overview</h2>
        <p className="text-white mt-4 text-left">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur
          quibusdam ipsum impedit perspiciatis similique. Accusantium,
          recusandae? Itaque voluptatibus fugiat fuga unde suscipit culpa ipsam
          illum amet iure porro necessitatibus doloribus dolor, ullam ducimus ab
          eos nihil assumenda laborum, eveniet eligendi quae voluptate
          voluptatem reiciendis! Odit explicabo blanditiis quibusdam
          reprehenderit ipsum!
        </p>
        <ul className="mt-4 text-left">
          <li className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </li>
          <li className="mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </li>
        </ul>
        <div className="flex justify-between mt-8">
          <div className={`${styles.boxCard}`}>
            <span className="text-sm text-gray-300 uppercase bold mb-4 inline-block">
              Established
            </span>
            <h4>April 2023</h4>
            <h4>United Kingdom</h4>

            <svg
              className="mx-auto"
              viewBox="0 0 60 30"
              width="70px"
              height="70px"
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
                <span></span>
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

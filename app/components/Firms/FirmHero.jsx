"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function FirmHero() {
  const [copiedDiscounts, setCopiedDiscounts] = useState({});

  const handleCopy = (discount, rowIndex) => {
    navigator.clipboard.writeText(discount);

    // Show tooltip for the specific row
    setCopiedDiscounts((prev) => ({
      ...prev,
      [rowIndex]: true,
    }));

    // Hide the tooltip for the specific row after a few seconds
    setTimeout(() => {
      setCopiedDiscounts((prev) => ({
        ...prev,
        [rowIndex]: false,
      }));
    }, 2000);
  };

  return (
    <section>
      <div className="container mx-auto px-3 md:px-0">
        <div className="border border-primary px-6 py-10 rounded ">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
            <div className="sm:w-1/2">
              <div className="flex justify-center md:justify-start">
                <Image
                  src="/Images/brands/FXIFY.svg"
                  width={80}
                  height={80}
                  alt="FXIFY"
                />

                <div className="textData ml-4 sm:ml-10">
                  <h1 className="text-white text-md sm:text-2xl font-bold flex items-center">
                    FXIFY{" "}
                    <svg
                      fill="#0092F6"
                      width="20px"
                      height="20px"
                      viewBox="0 0 512 512"
                      id="_x30_1"
                      version="1.1"
                      className="ml-2"
                    >
                      <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
                    </svg>
                  </h1>
                  <div className="flex">
                    <div className="flex gap-1 border border-primary p-2 mt-4 rounded items-center">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                          fill="#fff"
                        />
                      </svg>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M9.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L11.8933 15.0599L13.5113 13.8843L12.0242 9.30754L15.9175 6.47892L15.2994 4.57681L10.4871 4.57681L9.00001 0Z"
                          fill="#fff"
                        />
                      </svg>

                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M0.700554 4.57682L0.0825195 6.47893L3.97581 9.30756L2.48873 13.8843L4.10677 15.0599L8.00002 12.2313L8.00001 0H7.00001L5.51292 4.57681L0.700554 4.57682Z"
                          fill="#fff"
                        />
                      </svg>

                      <p className="text-white font-bold">4.3</p>
                    </div>
                  </div>
                  <p className="text-white text-sm mt-2">Based on Trustpilot</p>
                </div>
              </div>
            </div>

            <div className="sm:w-1/2 flex items-center sm:items-end flex-col text-center sm:text-left sm:mt-0 mt-6">
              <div className="relative inline-block">
                <p className="text-white bold uppercase text-right mb-2">
                  10% off all chanllenges
                </p>
                {copiedDiscounts[0] && (
                  <span className="singleTooltip bg-black text-center text-white px-2 py-1 rounded">
                    Copied!
                  </span>
                )}
                <button
                  onClick={() => handleCopy("PROPVATOR", 0)}
                  className="text-white singleCopy flex items-center px-1 relative mt-0"
                >
                  PROPVATOR
                  <svg
                    width="25px"
                    height="25px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="ml-1"
                  >
                    <path
                      d="M6 11C6 8.17157 6 6.75736 6.87868 5.87868C7.75736 5 9.17157 5 12 5H15C17.8284 5 19.2426 5 20.1213 5.87868C21 6.75736 21 8.17157 21 11V16C21 18.8284 21 20.2426 20.1213 21.1213C19.2426 22 17.8284 22 15 22H12C9.17157 22 7.75736 22 6.87868 21.1213C6 20.2426 6 18.8284 6 16V11Z"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 19C4.34315 19 3 17.6569 3 16V10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H15C16.6569 2 18 3.34315 18 5"
                      stroke="#fff"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
              <Link
                href="/"
                className={`bg-[linear-gradient(90deg,rgba(125,227,250,1)16%,rgba(89,146,252,1)44%,rgba(51,59,255,1)74%)] text-white border border-primary rounded flex flex-col items-center py-2 px-9 mt-5 w-[231px]`}
              >
                <p className="flex items-center text-xl">
                  Visit Fxify
                  <svg
                    className="ms-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M2 3H3.35798C3.85767 3 4.29368 3.343 4.42301 3.835L4.79827 5.272M4.79827 5.272C10.2563 5.11589 15.7091 5.73515 21 7.112C20.1927 9.566 19.2334 11.95 18.1351 14.25H7.14387M4.79827 5.272L7.14387 14.25M7.14387 14.25C6.36431 14.25 5.61667 14.5661 5.06543 15.1287C4.5142 15.6913 4.20452 16.4544 4.20452 17.25H19.6361M5.6742 20.25C5.6742 20.4489 5.59678 20.6397 5.45897 20.7803C5.32116 20.921 5.13425 21 4.93936 21C4.74446 21 4.55756 20.921 4.41975 20.7803C4.28194 20.6397 4.20452 20.4489 4.20452 20.25C4.20452 20.0511 4.28194 19.8603 4.41975 19.7197C4.55756 19.579 4.74446 19.5 4.93936 19.5C5.13425 19.5 5.32116 19.579 5.45897 19.7197C5.59678 19.8603 5.6742 20.0511 5.6742 20.25ZM18.1665 20.25C18.1665 20.4489 18.089 20.6397 17.9512 20.7803C17.8134 20.921 17.6265 21 17.4316 21C17.2367 21 17.0498 20.921 16.912 20.7803C16.7742 20.6397 16.6968 20.4489 16.6968 20.25C16.6968 20.0511 16.7742 19.8603 16.912 19.7197C17.0498 19.579 17.2367 19.5 17.4316 19.5C17.6265 19.5 17.8134 19.579 17.9512 19.7197C18.089 19.8603 18.1665 20.0511 18.1665 20.25Z"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

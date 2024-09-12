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
    <section className="mt-44">
      <div className="container mx-auto">
        <div className="border border-primary px-6 py-10 rounded bg-slate-900">
          <div className="flex justify-between items-center">
            <div className="w-1/2">
              <div className="flex">
                <Image
                  src="/Images/brands/instantFunding.svg"
                  width={80}
                  height={80}
                  alt="Instant Funding"
                />

                <div className="textData ml-10">
                  <h1 className="text-white text-2xl font-bold flex items-center">
                    Instant Funding{" "}
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

                      <p className="text-white font-bold">4.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-1/2 flex items-end flex-col text-left">
              <div className="relative inline-block">
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
                className="text-white border border-primary rounded flex flex-col py-2 px-9 mt-5"
              >
                <p className="flex items-center text-xl">
                  <svg
                    width="15px"
                    height="15px"
                    viewBox="0 0 18 18"
                    className="mr-2"
                  >
                    <path
                      fill="#fff"
                      d="M12.1.6a.944.944 0 0 0 .2 1.04l1.352 1.353L10.28 6.37a.956.956 0 0 0 1.35 1.35l3.382-3.38 1.352 1.352a.944.944 0 0 0 1.04.2.958.958 0 0 0 .596-.875V.96a.964.964 0 0 0-.96-.96h-4.057a.958.958 0 0 0-.883.6z"
                    />
                    <path
                      fill="#fff"
                      d="M14 11v5a2.006 2.006 0 0 1-2 2H2a2.006 2.006 0 0 1-2-2V6a2.006 2.006 0 0 1 2-2h5a1 1 0 0 1 0 2H2v10h10v-5a1 1 0 0 1 2 0z"
                    />
                  </svg>
                  propvator.com
                </p>
                <span className="text-sm mt-2">Visit this website</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

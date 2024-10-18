"use client";
import React from "react";
import { useState, useEffect } from "react";
import styles from "@/app/components/FeatureTable/FeatureTable.module.css";
import filterStyle from "./Filters.module.css";
import tableHeadData from "@/app/data/tableData.jsx";
import tableBodyData from "@/app/data/tableDataBody.json";
import numeral from "numeral";
import Image from "next/image";
import Link from "next/link";

export default function ContentData() {
  const [copiedDiscounts, setCopiedDiscounts] = useState({});
  const [selectedStep, setSelectedStep] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 4;

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

  function formatPrice(price) {
    return numeral(price).format("0.[0]a");
  }

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter the table data based on firm and selected step
  const filteredData = tableBodyData.filter((item) => {
    const matchesFirm = item.firm === "Fintokei";
    const matchesStep =
      selectedStep.length === 0 || // No filter selected
      selectedStep.includes(item.steps); // Check if the item's steps are in the selectedStep array
    return matchesFirm && matchesStep;
  });

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = filteredData.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  const totalPages = Math.ceil(filteredData.length / listingsPerPage);

  return (
    <div id="table" className="container mx-auto md:px-0 px-3">
      <section className="comparison--table--area">
        {/* Filter Buttons */}
        <h2 className="text-white text-center text-2xl font-bold mb-4">
          Select number of step
        </h2>
        <div className={`${filterStyle.filterButtons} mb-4`}>
          <button
            onClick={() =>
              setSelectedStep((prevStep) =>
                prevStep.includes("1 Step")
                  ? prevStep.filter((step) => step !== "1 Step")
                  : [...prevStep, "1 Step"]
              )
            }
            className={`${filterStyle.filterStepButton} ${
              selectedStep.includes("1 Step") ? "bg-[#3338D3]" : ""
            }`}
          >
            1 Step
          </button>

          <button
            onClick={() =>
              setSelectedStep((prevStep) =>
                prevStep.includes("2 Steps")
                  ? prevStep.filter((step) => step !== "2 Steps")
                  : [...prevStep, "2 Steps"]
              )
            }
            className={`${filterStyle.filterStepButton} ${
              selectedStep.includes("2 Steps") ? "bg-[#3338D3]" : ""
            }`}
          >
            2 Steps
          </button>

          <button
            onClick={() =>
              setSelectedStep((prevStep) =>
                prevStep.includes("3 Steps")
                  ? prevStep.filter((step) => step !== "3 Steps")
                  : [...prevStep, "3 Steps"]
              )
            }
            className={`${filterStyle.filterStepButton} ${
              selectedStep.includes("3 Steps") ? "bg-[#3338D3]" : ""
            }`}
          >
            3 Steps
          </button>

          <button
            onClick={() =>
              setSelectedStep((prevStep) =>
                prevStep.includes("Instant")
                  ? prevStep.filter((step) => step !== "Instant")
                  : [...prevStep, "Instant"]
              )
            }
            className={`${filterStyle.filterStepButton} ${
              selectedStep.includes("Instant") ? "bg-[#3338D3]" : ""
            }`}
          >
            Instant
          </button>
        </div>
        <div className="table--wrapper">
          <div className="table--inner">
            <div className="data--table">
              <table className="w-100" id="data-table">
                <thead>
                  <tr>
                    {tableHeadData.map((item, index) => (
                      <th key={index}>
                        <p>{item}</p>
                        <div className="column-minus">
                          <span></span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17"
                          height="16"
                          viewBox="0 0 17 16"
                          fill="none"
                        >
                          <path
                            d="M7.46659 4.47998L4.98657 2L2.50659 4.47998"
                            stroke="#2032FF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M4.98657 14V2"
                            stroke="#2032FF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M9.5332 11.52L12.0132 14L14.4932 11.52"
                            stroke="#2032FF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M12.0132 2V14"
                            stroke="#2032FF"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody id="table-body">
                  {currentListings.length > 0 ? (
                    currentListings
                      .filter((item) => item.firm === "Fintokei")
                      .map((item, index) => (
                        <tr data-brand={item.brand} key={index}>
                          <td>
                            <div className="company">
                              <Image
                                className="mx-auto object-contain"
                                width={20}
                                height={20}
                                src={item.logo}
                                alt={item.firm}
                              />
                              <p>
                                {item.firm}
                                {item.verified ? (
                                  <svg
                                    fill="#0092F6"
                                    width="15px"
                                    height="15px"
                                    viewBox="0 0 512 512"
                                    id="_x30_1"
                                    version="1.1"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
                                  </svg>
                                ) : (
                                  ""
                                )}
                              </p>
                            </div>
                          </td>
                          <td>
                            {item.salePrice ? (
                              <del>
                                {item.salePrice
                                  ? `$${formatPrice(item.salePrice)}`
                                  : ""}
                              </del>
                            ) : (
                              ""
                            )}
                            <p>
                              {item.price ? `$${formatPrice(item.price)}` : ""}
                            </p>
                            {item.calcPrice ? (
                              <span className="gradienBadge">
                                {item.calcPrice ? item.calcPrice : ""}
                              </span>
                            ) : (
                              ""
                            )}
                          </td>
                          <td className="relative">
                            {item.discount && (
                              <>
                                <button
                                  onClick={() =>
                                    handleCopy(item.discount, index)
                                  }
                                  className="copy-button flex items-center px-1"
                                >
                                  {item.discount}
                                  <svg
                                    width="15px"
                                    height="15px"
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
                                {copiedDiscounts[index] && (
                                  <span className="tooltip">Copied!</span>
                                )}
                              </>
                            )}
                          </td>

                          <td>
                            <p>{item.size ? `${item.size}k` : ""}</p>
                          </td>
                          <td>
                            <p>{item.steps}</p>
                          </td>
                          <td>
                            <p>{item.profitSplit}</p>
                          </td>
                          <td>
                            <p>{item.profitTarget}</p>
                          </td>
                          <td>
                            <p>{item.maxDrawDown}</p>
                          </td>
                          <td>
                            <p>{item.dailyDrawDown}</p>
                          </td>
                          <td>
                            <p>${item.commission}</p>
                          </td>
                          <td>
                            <p>{item.leverage}</p>
                          </td>
                          <td>
                            <p>{item.rating}</p>
                          </td>
                          <td>
                            {item.delcredits ? (
                              <del>
                                {item.delcredits
                                  ? `$${formatPrice(item.delcredits)}`
                                  : ""}
                              </del>
                            ) : (
                              ""
                            )}
                            <p>{item.credits ? `$${item.credits}` : ""}</p>
                          </td>
                          <td>
                            <Link
                              href={`${item.buy}`}
                              target="_blank"
                              className="cart"
                            >
                              <svg
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
                            </Link>
                          </td>
                        </tr>
                      ))
                  ) : (
                    <tr>
                      <td
                        colSpan={tableHeadData.length}
                        className="text-center py-5"
                      >
                        No data available
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="text-center py-5 bg-[#1A1A1A] relative z-10">
              <button
                type="button"
                className={`${styles.searchBtn} mx-auto mr-3 d-block`}
                onClick={handlePreviousPage}
                style={{ display: currentPage === 1 ? "none" : "inline-block" }}
              >
                Previous
              </button>
              <button
                type="button"
                className={`${styles.searchBtn} mx-auto d-block`}
                onClick={handleNextPage}
                style={{
                  display:
                    indexOfLastListing >= tableBodyData.length
                      ? "none"
                      : "inline-block",
                }}
              >
                Next
              </button>
            </div>
            <div className="pageCount relative">
              <ul>
                {[...Array(totalPages)].map((_, i) => (
                  <li
                    key={i}
                    className={currentPage === i + 1 ? "current" : ""}
                    onClick={() => handlePageClick(i + 1)}
                  >
                    {i + 1}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";
import styles from "./FeatureTable.module.css";
import numeral from "numeral";
import Image from "next/image";
import Link from "next/link";
import tableHeadData from "@/app/data/tableData.jsx";
import tableBodyData from "@/app/data/tableDataBody.json";
import rangeSlider from "@/app/data/range";
export default function FeatureTable({ filter, data, setData }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [copiedDiscount, setCopiedDiscount] = useState(null);

  const handleCopy = (discount) => {
    navigator.clipboard.writeText(discount);
    setCopiedDiscount(discount);
    setShowTooltip(true);

    // Hide the tooltip after a few seconds
    setTimeout(() => {
      setShowTooltip(false);
      setCopiedDiscount(null); // Reset the copied discount after hiding the tooltip
    }, 2000);
  };

  const numeral = require("numeral");

  const formattedPrice = numeral(10000).format("0.[0]a"); // "10k"
  console.log(formattedPrice);

  function formatPrice(price) {
    return numeral(price).format("0.[0]a");
  }

  const [currentPage, setCurrentPage] = useState(1);
  const listingsPerPage = 20;

  const hasTrueValue = (filter) => {
    const defaultRanges = {
      price: [42, 5000],
      commission: [0, 7],
      leverage: [5, 125],
      credits: [1, 76],
    };

    return Object.values(filter).some((category) => {
      if (typeof category === "object" && !Array.isArray(category)) {
        return Object.entries(category).some(([key, value]) => {
          if (typeof value === "boolean") {
            return value === true;
          } else if (Array.isArray(value)) {
            // Check if the array values are different from their specific default ranges
            if (defaultRanges[key]) {
              return !(
                value[0] === defaultRanges[key][0] &&
                value[1] === defaultRanges[key][1]
              );
            }
          }
          return false;
        });
      }
      return false;
    });
  };

  useEffect(() => {
    console.log({ new: filter });
    const filterData = () => {
      if (!hasTrueValue(filter)) {
        setData(tableBodyData);
      } else {
        // let filteredData = tableBodyData.filter(item => {
        //     for (const key in filter.assetType) {
        //         if (filter.assetType[key] && item.filterType.assetType[key] !== filter.assetType[key]) {
        //             return false;
        //         }
        //     }
        //     return true;
        // });

        let filteredData = tableBodyData.filter((item) => {
          let matchFound = false;
          for (const key in filter.assetType) {
            if (filter.assetType[key]) {
              if (item.filterType.assetType[key] === filter.assetType[key]) {
                matchFound = true;
                break;
              }
            }
          }

          return (
            matchFound ||
            Object.values(filter.assetType).every((value) => !value)
          );
        });

        // Apply brand filter
        filteredData = filteredData.filter((item) => {
          const isAnySizeSelected = Object.values(filter.brands).some(
            (value) => value
          );
          if (!isAnySizeSelected) return true;
          return filter.brands[item.firm.toLowerCase()];
        });

        // console.log("filteredData", filteredData)

        // Apply sizeType filter
        filteredData = filteredData.filter((item) => {
          const isAnySizeSelected = Object.values(filter.sizeType).some(
            (value) => value
          );
          if (!isAnySizeSelected) return true;
          return filter.sizeType[item.size];
        });

        // Apply sizeType filter
        filteredData = filteredData.filter((item) => {
          const isAnySizeSelected = Object.values(filter.accountTypes).some(
            (value) => value
          );
          if (!isAnySizeSelected) return true;
          return filter.accountTypes[item.steps.toLowerCase()];
        });

        // Apply accountTypes filter
        // filteredData = filteredData.filter(item => {
        //     for (const key in filter.accountTypes) {
        //         if (filter.accountTypes[key] && item.filterType.accountTypes[key] !== filter.accountTypes[key]) {
        //             return false;
        //         }
        //     }
        //     return true;
        // });

        filteredData = filteredData.filter((item) => {
          let matchFound = false;

          for (const key in filter.countries) {
            if (filter.countries[key]) {
              if (item.filterType.countries[key] === filter.countries[key]) {
                matchFound = true;
                break;
              }
            }
          }

          return (
            matchFound ||
            Object.values(filter.countries).every((value) => !value)
          );
        });
        filteredData = filteredData.filter((item) => {
          let matchFound = false;

          for (const key in filter.platforms) {
            if (filter.platforms[key]) {
              if (item.filterType.platforms[key] === filter.platforms[key]) {
                matchFound = true;
                break;
              }
            }
          }

          return (
            matchFound ||
            Object.values(filter.platforms).every((value) => !value)
          );
        });
        filteredData = filteredData.filter((item) => {
          let matchFound = false;

          for (const key in filter.broker) {
            if (filter.broker[key]) {
              if (item.filterType.broker[key] === filter.broker[key]) {
                matchFound = true;
                break;
              }
            }
          }

          return (
            matchFound || Object.values(filter.broker).every((value) => !value)
          );
        });

        filteredData = filteredData.filter(
          (item) =>
            item.price >= filter.rangeSlider.price[0] &&
            item.price <= filter.rangeSlider.price[1]
        );
        filteredData = filteredData.filter(
          (item) =>
            item.commission >= filter.rangeSlider.commission[0] &&
            item.commission <= filter.rangeSlider.commission[1]
        );
        filteredData = filteredData.filter(
          (item) =>
            item.leverage >= filter.rangeSlider.leverage[0] &&
            item.leverage <= filter.rangeSlider.leverage[1]
        );
        filteredData = filteredData.filter(
          (item) =>
            item.credits >= filter.rangeSlider.credits[0] &&
            item.credits <= filter.rangeSlider.credits[1]
        );

        setData(filteredData);
      }
    };
    filterData();
  }, [filter]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentListings = data.slice(indexOfFirstListing, indexOfLastListing);

  const totalPages = Math.ceil(data.length / listingsPerPage);

  return (
    <div id="table" className="container mx-auto md:px-0 px-3">
      <section className="comparison--table--area">
        <div className="ml-auto text-white text-right my-5">
          Showing <span className="text-[#2A3BFF]">{data.length}</span> result
          {data.length !== 1 ? "s" : ""}
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
                    currentListings.map((item, index) => (
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
                        <td>
                          <p>{item.discount}</p>
                          {item.discount ? (
                            <>
                              <button
                                onClick={() => handleCopy(item.discount)}
                                className="copy-button"
                              >
                                <svg
                                  width="15px"
                                  height="15px"
                                  viewBox="0 0 24 24"
                                  fill="none"
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

                              {showTooltip &&
                                copiedDiscount === item.discount && (
                                  <span className="tooltip">Copied!</span>
                                )}
                            </>
                          ) : (
                            ""
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
                    indexOfLastListing >= data.length ? "none" : "inline-block",
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

import styles from './FeatureTable.module.css'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import tableHead from '@/app/data/tableData.jsx'


export default function FeatureTable() {
    return (
        <div className="container mx-auto md:px-0 px-3">
            <section className='comparison--table--area'>
                <div className="ml-auto text-white text-right my-5">
                    Showing <span className='text-[#2A3BFF]'>519</span> result
                </div>
                <div className="table--wrapper">
                    <div className="table--inner">
                        <div className="data--table">
                            <table className="w-100" id="data-table">
                                <thead>
                                    <tr>
                                        {tableHead.map((item, index) => {
                                            return (
                                                <th key={index}>
                                                    <p>{item}</p>
                                                    <div className="column-minus">
                                                        <span></span>
                                                    </div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                        <path d="M7.46659 4.47998L4.98657 2L2.50659 4.47998" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M4.98657 14V2" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M9.5332 11.52L12.0132 14L14.4932 11.52" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        <path d="M12.0132 2V14" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg>
                                                </th>
                                            );
                                        })}
                                    </tr>
                                </thead>
                                <tbody id="table-body">
                                    {/* {tableHead.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div className="company">
                                                        <Image className='mx-auto' width={30} height={30} src={item.logo} alt={item.companyTitle} />
                                                        <p>{item.companyTitle}</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <del>{item.regular}</del>
                                                    <p>{item.sale}</p>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M17 7.59302V13.407C17 14.359 16.5047 15.243 15.7039 15.7275L10.8002 18.643C9.99946 19.119 9.0088 19.119 8.19977 18.643L3.2961 15.7275C2.49533 15.2515 2 14.3675 2 13.407V7.59302C2 6.64102 2.49533 5.75699 3.2961 5.27249L8.19977 2.357C9.00054 1.881 9.9912 1.881 10.8002 2.357L15.7039 5.27249C16.5047 5.75699 17 6.63252 17 7.59302Z" fill="url(#paint0_linear_2051_8984)" />
                                                        <path d="M10 14V14.0833" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M10 6V10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <defs>
                                                            <linearGradient id="paint0_linear_2051_8984" x1="2" y1="2.67928" x2="19.1109" y2="16.6949" gradientUnits="userSpaceOnUse">
                                                                <stop offset="0.156958" stop-color="#7DE3FA" />
                                                                <stop offset="0.741638" stop-color="#333BFF" />
                                                            </linearGradient>
                                                        </defs>
                                                    </svg>

                                                </td>
                                                <td className="copy--data">
                                                    <p>{item.discount}</p>
                                                    <div className="copy--clip">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                            <path d="M10.6666 8.60001V11.4C10.6666 13.7333 9.73325 14.6667 7.39992 14.6667H4.59992C2.26659 14.6667 1.33325 13.7333 1.33325 11.4V8.60001C1.33325 6.26668 2.26659 5.33334 4.59992 5.33334H7.39992C9.73325 5.33334 10.6666 6.26668 10.6666 8.60001Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            <path d="M14.6666 4.60001V7.40001C14.6666 9.73334 13.7333 10.6667 11.3999 10.6667H10.6666V8.60001C10.6666 6.26668 9.73325 5.33334 7.39992 5.33334H5.33325V4.60001C5.33325 2.26668 6.26659 1.33334 8.59992 1.33334H11.3999C13.7333 1.33334 14.6666 2.26668 14.6666 4.60001Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>{item.accntSize}</p>
                                                    <p>{item.accntStep}</p>
                                                </td>
                                                <td>
                                                    <p>{item.profitSplit}</p>
                                                </td>
                                                <td>
                                                    <p>{item.profitTarget}</p>
                                                </td>
                                                <td>
                                                    <p>{item.dailyLose}</p>
                                                </td>
                                                <td>
                                                    <p>{item.drawDown}</p>
                                                </td>
                                                <td>
                                                    <p>{item.resetType}</p>
                                                </td>
                                                <td>
                                                    <p>{item.commission}</p>
                                                </td>
                                                <td>
                                                    <p>{item.tech}</p>
                                                </td>
                                                <td>
                                                    <p>{item.drawDownRatio}</p>
                                                </td>
                                                <td>
                                                    <p>{item.payout}</p>
                                                </td>
                                                <td>
                                                    <p>{item.rating}</p>
                                                </td>
                                                <td className="country">
                                                    <p>{item.establishDate}</p>
                                                    <Image className='mx-auto my-1' width={50} height={50} src={`${item.establishFlag}`} alt={item.establishCountry} />
                                                    <span>{item.establishCountry}</span>
                                                </td>
                                                <td>
                                                    <p>{item.points}</p>
                                                </td>
                                                <td>
                                                    <Link href={`${item.buy}`} className="cart">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path d="M2 3H3.35798C3.85767 3 4.29368 3.343 4.42301 3.835L4.79827 5.272M4.79827 5.272C10.2563 5.11589 15.7091 5.73515 21 7.112C20.1927 9.566 19.2334 11.95 18.1351 14.25H7.14387M4.79827 5.272L7.14387 14.25M7.14387 14.25C6.36431 14.25 5.61667 14.5661 5.06543 15.1287C4.5142 15.6913 4.20452 16.4544 4.20452 17.25H19.6361M5.6742 20.25C5.6742 20.4489 5.59678 20.6397 5.45897 20.7803C5.32116 20.921 5.13425 21 4.93936 21C4.74446 21 4.55756 20.921 4.41975 20.7803C4.28194 20.6397 4.20452 20.4489 4.20452 20.25C4.20452 20.0511 4.28194 19.8603 4.41975 19.7197C4.55756 19.579 4.74446 19.5 4.93936 19.5C5.13425 19.5 5.32116 19.579 5.45897 19.7197C5.59678 19.8603 5.6742 20.0511 5.6742 20.25ZM18.1665 20.25C18.1665 20.4489 18.089 20.6397 17.9512 20.7803C17.8134 20.921 17.6265 21 17.4316 21C17.2367 21 17.0498 20.921 16.912 20.7803C16.7742 20.6397 16.6968 20.4489 16.6968 20.25C16.6968 20.0511 16.7742 19.8603 16.912 19.7197C17.0498 19.579 17.2367 19.5 17.4316 19.5C17.6265 19.5 17.8134 19.579 17.9512 19.7197C18.089 19.8603 18.1665 20.0511 18.1665 20.25Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </Link>
                                                </td>
                                            </tr>
                                        );
                                    })} */}
                                </tbody>
                            </table>
                        </div>
                        <div className="text-center py-5 bg-[#1A1A1A] relative z-10">
                            <button type="button" className={`${styles.searchBtn} mx-auto d-block`}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

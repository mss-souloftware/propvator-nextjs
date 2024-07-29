"use client";
import { useState, useEffect } from 'react';
import styles from './FeatureTable.module.css';
import Image from 'next/image';
import Link from 'next/link';
import tableHeadData from '@/app/data/tableData.jsx';
import tableBodyData from '@/app/data/tableDataBody.json';

export default function FeatureTable({ filter }) {
    const [data, setData] = useState(tableBodyData);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const listingsPerPage = 20;

    useEffect(() => {
        const filterData = () => {
            if (filter.hasTempered) {
                let filteredData = tableBodyData.filter(item => {
                    for (const brand in filter.brands) {
                        if (filter.brands[brand] && item.firm.toLowerCase() === brand) {
                            return true;
                        }
                    }
                    return false;
                });

                setData(filteredData);
            } else {
                setData(tableBodyData);
            }
            setLoading(false);
        };

        setLoading(true);
        filterData();
    }, [filter]);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastListing = currentPage * listingsPerPage;
    const indexOfFirstListing = indexOfLastListing - listingsPerPage;
    const currentListings = data.slice(indexOfFirstListing, indexOfLastListing);

    const totalPages = Math.ceil(data.length / listingsPerPage);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div id='table' className="container mx-auto md:px-0 px-3">
            <section className='comparison--table--area'>
                <div className="ml-auto text-white text-right my-5">
                    Showing <span className='text-[#2A3BFF]'>{data.length}</span> result{data.length !== 1 ? 's' : ''}
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
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M7.46659 4.47998L4.98657 2L2.50659 4.47998" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M4.98657 14V2" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M9.5332 11.52L12.0132 14L14.4932 11.52" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                    <path d="M12.0132 2V14" stroke="#2032FF" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg>
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody id="table-body">
                                    {currentListings.length > 0 ? (
                                        currentListings.map((item, index) => (
                                            <tr data-brand={item.brand} key={index} >
                                                <td>
                                                    <div className="company">
                                                        <Image className='mx-auto' width={20} height={20} src={item.logo} alt={item.firm} />
                                                        <p>{item.firm}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td>
                                                    {item.salePrice ?
                                                        <del>{item.salePrice}</del>
                                                        : ''}
                                                    <p>{item.price}</p>
                                                </td>
                                                <td>
                                                    <p>{item.discount}</p>
                                                </td>
                                                <td>
                                                    <p>{item.size}</p>
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
                                                    <p>{item.commission}</p>
                                                </td>
                                                <td>
                                                    <p>{item.leverage}</p>
                                                </td>
                                                <td>
                                                    <p>{item.rating}</p>
                                                </td>
                                                <td>
                                                    <p>{item.credits}</p>
                                                </td>
                                                <td>
                                                    <Link href={`${item.buy}`} target='_blank' className="cart">
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={tableHeadData.length} className="text-center py-5">
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
                                style={{ display: currentPage === 1 ? 'none' : 'inline-block' }}
                            >
                                Previous
                            </button>
                            <button
                                type="button"
                                className={`${styles.searchBtn} mx-auto d-block`}
                                onClick={handleNextPage}
                                style={{ display: indexOfLastListing >= data.length ? 'none' : 'inline-block' }}
                            >
                                Next
                            </button>
                        </div>
                        <div className='pageCount relative'>
                            <ul>
                                {[...Array(totalPages)].map((_, i) => (
                                    <li
                                        key={i}
                                        className={currentPage === i + 1 ? 'current' : ''}
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

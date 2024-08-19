"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import styles from "./BrandSelector.module.css";

export default function BrandSelector({ brandName, logo, filterType, filter, setfilter, verified }) {
    const [bgColor, setBgColor] = useState('#211E36 ');
    const [imgFilter, setimgFilter] = useState('none');

    const handleClick = () => {
        const nextFilterState = {
            ...filter,
            [filterType]: {
                ...filter[filterType],
                [brandName.toLowerCase()]: !filter[filterType][brandName.toLowerCase()]
            }
        };
        setBgColor(nextFilterState[filterType][brandName.toLowerCase()] ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : '#211E36  ');
        setimgFilter(nextFilterState[filterType][brandName.toLowerCase()] ? 'grayscale(100%) brightness(1000%) contrast(1000%)' : 'none');
        setfilter(nextFilterState);
    };

    useEffect(() => {
    }, [filter]);
    return (
        <div className={styles.brnadSelector}
            onClick={handleClick}
            style={{
                background: bgColor,
            }}
        >
            <Image
                src={logo}
                width={50}
                height={50}
                alt='Brand'
                style={{ filter: imgFilter, cursor: 'pointer' }}
            />
            <span className='flex justify-center items-center mt-6'>
                {brandName}
                {verified ?
                    <div className="ml-1">
                        <svg fill="#0092F6" width="15px" height="15px" viewBox="0 0 512 512" id="_x30_1" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" /></svg>
                    </div>
                    : ''}
            </span>
        </div>
    );
}


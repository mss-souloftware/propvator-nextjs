"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import styles from "./BrandSelector.module.css";

export default function BrandSelector({ logo, brandName, filter, setfilter }) {
    const [isInverted, setIsInverted] = useState(filter.brands[brandName.toLowerCase()]);
    const [bgColor, setBgColor] = useState('#08271F');

    const handleClick = () => {
        setBgColor(filter.brands[brandName.toLowerCase()] === true ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : '#08271F');
        setfilter({
            ...filter,
            hasTempered: true,
            brands: {
                ...filter.brands,
                [brandName.toLowerCase()]: !filter.brands[brandName.toLowerCase()]
            }
        });
        setIsInverted(!filter.brands[brandName.toLowerCase()]);

        console.log({filter})
        setTimeout(() => console.log({filter}), 2000)
    };

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
                style={{ filter: isInverted ? 'grayscale(100%) brightness(1000%) contrast(1000%)' : 'none' }}
            />
            <span>
                {brandName}
            </span>
        </div>
    );
}


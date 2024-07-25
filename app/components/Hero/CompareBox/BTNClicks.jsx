"use client"
import React, { useState } from 'react';

export default function BTNClicks({ title, filterType, filter, setfilter }) {
    const [bgColor, setBgColor] = useState('transparent');

    const handleClick = () => {
        console.log({title})
        setBgColor(filter[filterType][title.toLowerCase()] === true ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : 'transparent');
        setfilter({
            ...filter,
            hasTempered: true,
            [filterType]: {
              ...filter[filterType],
              [title.toLowerCase()]: !filter[filterType][title.toLowerCase()]
            }
        });
        console.log({filter})
        setTimeout(() => console.log({filter}), 2000)
    };

    return (
        <div
            className='py-2 px-3 rounded-md border border-[#3338D3] text-white text-sm'
            style={{ background: bgColor, cursor: 'pointer' }}
            onClick={handleClick}
        >
            {title}
        </div>
    );
}
"use client"
import React, { useState } from 'react';

export default function BTNClicks(props) {
    const [bgColor, setBgColor] = useState('transparent');

    const handleClick = () => {
        setBgColor(bgColor === 'transparent' ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : 'transparent'); // Toggle between white and blue
    };

    return (
        <div
        className='py-2 px-3 rounded-md border border-[#3338D3] text-white text-sm'
            style={{ background: bgColor, cursor: 'pointer' }}
            onClick={handleClick}
        >
            {props.title}
        </div>
    );
}

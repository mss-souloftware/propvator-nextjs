"use client"
import React, { useState } from 'react';
import { Slider } from "@nextui-org/react";

export default function RangeBox() {
  const [value, setValue] = useState([100, 300]);

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value, 10);
    if (newMin <= value[1] && newMin >= 0) {
      setValue([newMin, value[1]]);
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
    if (newMax >= value[0] && newMax <= 1000) {
      setValue([value[0], newMax]);
    }
  };

  return (
    <div className='relative'>
      <p>Price range</p>
      <div className="numberPanel">
        <label htmlFor="minPrice">Min</label>
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          value={value[0]}
          onChange={handleMinChange}
          placeholder='34'
        />
      </div>
      <div className="flex flex-col gap-2 w-full h-[348px] max-w-md items-start justify-center">
        <Slider
          label="Select a budget"
          formatOptions={{ style: "currency", currency: "USD" }}
          step={10}
          orientation="vertical"
          maxValue={1000}
          minValue={0}
          value={value}
          onChange={setValue}
          className="max-w-md"
        />
        <p className="text-default-500 font-medium text-small">
          Selected budget: {Array.isArray(value) && value.map((b) => `$${b}`).join(" – ")}
        </p>
      </div>
      <div className="numberPanel">
        <label htmlFor="maxPrice">Max</label>
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          value={value[1]}
          onChange={handleMaxChange}
          placeholder='400'
        />
      </div>
    </div>
  );
}

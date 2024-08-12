import React, { useState } from 'react';
import Image from "next/image";
import styles from './Advance.module.css'
import RangWrapper from './RangWrapper'
import stylesbrand from "@/app/components/Filters/Brands/Brands.module.css";

export default function AdvanceFilter({ data, setData, filter, setfilter }) {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const toggleFilter = () => {
    setIsFilterVisible(!isFilterVisible);
  };

  return (
    <div className={styles.filterMain}>
      <div className="container mx-auto">
        <div className={`${stylesbrand.brandBox} flex flex-wrap justify-center md:justify-between items-center mb-10`}>
          <p className="text-white mb-2">Advanced Filtering:</p>
          <div
            style={{ background: isFilterVisible ? 'linear-gradient(135deg, rgba(125,227,250,1) 16%, rgba(51,59,255,1) 74%)' : 'transparent', cursor: 'pointer' }}
            className={`${stylesbrand.moreFilters} filterMainToggle`}
            onClick={toggleFilter}
          >
            <Image src="/Images/Global/Filters.svg" width={20} height={20} alt="Filters" />
            <span>
              More Options
            </span>
          </div>
        </div>
        {isFilterVisible && (
          <div className="w-full flex flex-wrap gap-7 md:gap-0 justify-between p-2 mb-4 filterMainRow">
            <RangWrapper filter={filter} setfilter={setfilter} dataTpye="price" data={data} setData={setData} title="Price" badge="Price" />
            <RangWrapper filter={filter} setfilter={setfilter} dataTpye="commission" data={data} setData={setData} title="Commission" badge="Commission" />
            <RangWrapper filter={filter} setfilter={setfilter} dataTpye="leverage" data={data} setData={setData} title="Payout Frequency" badge="Payout" />
            <RangWrapper filter={filter} setfilter={setfilter} dataTpye="credits" data={data} setData={setData} title="Loyalty Points" badge="Credit" />
          </div>
        )}
      </div>
    </div>
  )
}

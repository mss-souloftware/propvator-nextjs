import React from 'react'
import RangeBox from './RangeBox'
import styles from './RangWrapper.module.css'

export default function RangWrapper() {
    return (
        <div className={styles.RangWrapper}>
            <div className="pill">Price$</div>
            <h3>Price range</h3>
            <RangeBox />
        </div>
    )
}

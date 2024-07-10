
import RangeBox from './RangeBox'
import styles from './RangWrapper.module.css'

export default function RangWrapper() {
    return (
        <div className={`${styles.RangWrapper}`}>
            <div className={`${styles.Pill}`}>Price$</div>
            <h3 className="uppercase mb-5">Price range</h3>
            <RangeBox />
        </div>
    )
}

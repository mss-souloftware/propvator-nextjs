
import RangeBox from './RangeBox'
import styles from './RangWrapper.module.css'

export default function RangWrapper({ title, badge }) {
    return (
        <div className={`${styles.RangWrapper}`}>
            <div className={`${styles.Pill}`}>{badge}</div>
            <h3 className="uppercase mb-5">{title}</h3>
            <RangeBox />
        </div>
    )
}

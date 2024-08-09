
import RangeBox from './RangeBox'
import styles from './RangWrapper.module.css'

export default function RangWrapper({title, data, setData, dataTpye, filter, setfilter, badge}) {
    return (
        <div className={`${styles.RangWrapper}`}>
            <div className={`${styles.Pill}`}>{badge}</div>
            <h3 className="uppercase mb-5">{title}</h3>
            <RangeBox filter={filter} setfilter={setfilter} dataTpye={dataTpye} data={data} setData={setData} />
        </div>
    )
}

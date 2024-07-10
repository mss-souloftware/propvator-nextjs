import styles from './Advance.module.css'
import RangWrapper from './RangWrapper'

export default function AdvanceFilter() {
  return (
    <div className={styles.filterMain}>
      <div className="container mx-auto">
        <h2 className='text-white mb-5'>Advanced Filtering:</h2>
        <div className="w-full flex justify-between p-2 mb-4">
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
        </div>

        <div className="w-full flex justify-between p-2 mb-4">
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
        </div>

        <div className="w-full flex justify-between p-2 mb-4">
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
        </div>

        <div className="w-full flex justify-between p-2 mb-4">
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
          <RangWrapper />
        </div>
      </div>
    </div>
  )
}

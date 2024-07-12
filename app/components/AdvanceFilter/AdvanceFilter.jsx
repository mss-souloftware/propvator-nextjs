import styles from './Advance.module.css'
import RangWrapper from './RangWrapper'

export default function AdvanceFilter() {
  return (
    <div className={styles.filterMain}>
      <div className="container mx-auto">
        <h2 className='text-white mb-5'>Advanced Filtering:</h2>
        <div className="w-full flex flex-wrap gap-7 md:gap-0 justify-between p-2 mb-4">
          <RangWrapper title="Price" />
          <RangWrapper title="Commission" />
          <RangWrapper title="Payout Frequency" />
          <RangWrapper title="Loyalty Points" />
        </div>
      </div>
    </div>
  )
}

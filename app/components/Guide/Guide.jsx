import styles from './Guide.module.css'
import DetailBox from './DetailBox';

function Guide() {
  return (
    <div className="container mx-auto">
      <h3 className={styles.Guideheading}>
        The Ultimate Guide to Prop Trading Firms: <br /> Your One-Stop Hub for Success
      </h3>
      <div className="flex flex-wrap justify-between mt-14">
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
        <DetailBox />
      </div>
    </div>
  )
}

export default Guide
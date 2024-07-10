
import Image from 'next/image'
import styles from './DetailBox.module.css'

export default function DetailBox() {
    return (
        <div className={styles.DetailBox}>
            <div className={styles.BoxIcon}>
                <Image src='/Images/Global/comparison-icon.svg' width={70} height={70} alt='Exclusive Comparison' />
            </div>
            <h3>Exclusive Comparison</h3>
            <p>
                Compare the biggest prop firms in one place - no need to scour the internet for bits and pieces of information.Compare the biggest prop firms in one place - no need to scour the internet for bits and pieces of information.Compare the biggest prop firms in one place.
            </p>
        </div>
    )
}

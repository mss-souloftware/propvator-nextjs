import Image from 'next/image'
import styles from './Newsletter.module.css'

export default function NewsletterBox() {
    return (
        <div className={styles.newsletterWrapper}>
            <div className='w-10/12 mx-auto flex justify-center'>
                <input type="email" placeholder='Enter your email address' />
                <button className='flex items-center justify-center p-2 text-center'>Subscribe <Image className='ml-1' src='/Images/Global/send.svg' width={20} height={20} /> </button>
            </div>
        </div>
    )
}

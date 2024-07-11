import Image from 'next/image'
import styles from './Newsletter.module.css'
import Features from './Features'

export default function NewsletterBox() {
    return (
        <div className={styles.newsletterWrapper}>
            <div className='w-10/12 mx-auto flex justify-center'>
                <input type="email" placeholder='Enter your email address' />
                <button className='flex items-center justify-center p-2 text-center'>Subscribe <Image className='ml-1' src='/Images/Global/send.svg' width={20} height={20} /> </button>
            </div>
            <div className='w-9/12 mx-auto flex justify-between mt-10'>
                <Features title='latest pop news' img='/Images/icons/latest.svg' />
                <Features title='Launch details' img='/Images/icons/launch.svg' />
                <Features title='Giveaway Info' img='/Images/icons/giveaway.svg' />
                <Features title='The Best Offers' img='/Images/icons/latest.svg' />
            </div>
        </div>
    )
}

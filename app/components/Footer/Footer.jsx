import React from 'react'
import Logo from '../Header/Logo'
import Copyright from './Copyright'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer className='pt-10'>
            <div className="container mx-auto">
                <div className="text-center mx-auto text-white">
                    <Logo />
                    <h4 className={styles.gradientHDNG}>Disclaimer</h4>
                    <p>
                        The information provided is intended for general use and informational purposes only. Users are advised to proceed at their own risk and exercise due diligence before making any decisions based on the information provided. It is crucial to understand that our business offers information and does not endorse or recommend any specific proprietary trading firms. Users should independently evaluate and verify the suitability of any such entities before engaging with them. We do not assume responsibility for any consequences or losses arising from the use of the information provided. Thank you for your understanding and discretion.
                    </p>
                    <div className='bg-[#1C2069] h-[1px] my-8'></div>
                </div>
            </div>
            <Copyright />
        </footer>
    )
}

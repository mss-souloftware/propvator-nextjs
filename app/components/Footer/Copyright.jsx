import React from 'react'
import Link from 'next/link'

export default function Copyright() {
    return (
        <div className="border-t-2 border-[#424242] py-5 text-white">
            <div className="container mx-auto">
                <div className="coprightSec flex justify-between">
                    <p className='text-sm'>© 2024 Prop Firm Match. All rights reserved.</p>
                    <ul className='m-0 p-0 flex text-sm'>
                        <li className='mr-10'>
                            <Link href="#" className='underline'>Terms and Conditions</Link>
                        </li>
                        <li>
                            <Link href="#" className='underline'>Privacy Policy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

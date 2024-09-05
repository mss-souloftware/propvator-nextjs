import Image from 'next/image'
import React from 'react'

export default function FirmHero() {
    return (
        <section className='my-40'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className='w-1/2'>
                        <div className="flex">
                            <Image src="/Images/brands/instantFunding.svg" width={120} height={120} alt="Instant Funding" />
                            <div className="textData ml-10">
                                <h1 className='text-white text-3xl font-bold'>Instant Funding</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
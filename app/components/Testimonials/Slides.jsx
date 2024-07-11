"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Slides.module.css'
import Image from "next/image";

const slidesData = [
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
    {
        testi: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.""Lorem ipsum dolor sit amet, consectetur adipiscing"',
        client: '/Images/icons/client.png',
        CName: 'Savannah Nguyen',
        CDes: 'Customer',
    },
]

export default function Slides() {
    var settings = {
        dots: false,
        arrow: false,
        initialSlide: 3,
        infinite: true,
        adaptiveHeight: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true,
        centerMode: true,
        swipeToSlide: true,
    };
    return (
        <Slider {...settings}>
            {slidesData.map((item, index) => (
                <div key={index} className={styles.MainSlides}>
                    <div className={styles.slideInner}>
                        <p>
                            <Image src="/Images/icons/quot1.svg" width={35} height={35} alt="Qoutes" />
                            {item.testi}
                            <Image src="/Images/icons/quot2.svg" width={35} height={35} alt="Qoutes" />
                        </p>
                        <Image src="/Images/icons/client.png" width={50} height={50} alt={item.CName} />
                    </div>

                    <div className={styles.rating}>
                        <Image src="/Images/icons/rating.svg" width={120} height={25} alt="Ratings" />
                        <p className="CName text-white mt-4 font-bold">{item.CName}</p>
                        <p className="CDes text-white mt-1 text-sm">{item.CDes}</p>
                    </div>
                </div>
            ))}
        </Slider>
    );
}
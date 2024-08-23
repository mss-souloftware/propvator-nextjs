import { useState, useEffect } from 'react';
import styles from './Hero.module.css';
import stylesBtn from '@/app/components/Hero/CompareBox/CompareBox.module.css';
import CompareBox from './CompareBox/CompareBox';
import Brands from '../Filters/Brands/Brands';

export default function Hero({ filter, setfilter }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    useEffect(() => {
        if (isPopupOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isPopupOpen]);

    return (
        <section className={styles.heroSection}>
            <div className="container mx-auto">
                <h1 className={`${styles.titleBg} text-center text-white font-bold text-4xl md:text-6xl max-w-2xl mx-auto`}>
                    Compare different <span>prop firms</span> and select with confidence
                </h1>
                <div className="text-center mx-auto mt-4">
                    <button onClick={togglePopup} className={`${stylesBtn.searchBtn}`}>
                        How It Works
                    </button>
                </div>
                <CompareBox filter={filter} setfilter={setfilter} />
                <Brands filter={filter} setfilter={setfilter} />

                {isPopupOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-[#27197D] p-8 rounded-lg relative w-11/12 max-w-2xl">
                            <button onClick={togglePopup} className="absolute top-3 right-3 text-white hover:text-white">
                                ✖
                            </button>
                            <div className="h-[280px] md:h-[380px]">
                                <iframe
                                    className="w-full h-full rounded-lg"
                                    src="https://www.youtube.com/embed/PVkRtiX24ug?si=K9M0_9y-rCxNpO0A"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

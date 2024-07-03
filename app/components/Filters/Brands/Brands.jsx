import Image from "next/image";
import styles from "./Brands.module.css";
import BrandSelector from "./BrandSelector";

export default function Brands() {
    return (
        <>
            <div className={`${styles.brandBox} flex justify-between items-center`}>
                <p className="text-white">Select for  multiple firms:</p>
                <div className={styles.moreFilters}>
                    <Image src="/Images/Global/Filters.svg" width={20} height={20} alt="Filters" />
                    <span>
                        More Options
                    </span>
                </div>
            </div>

            <div className="flex gap-3 justify-between mt-10">
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand3.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand4.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand5.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand6.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand7.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand8.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand9.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
            </div>

            <div className="flex gap-3 justify-between mt-4">
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand3.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand4.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand5.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand6.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand7.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand8.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand9.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
            </div>

            <div className="flex gap-3 justify-between mt-4">
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand3.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand4.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand5.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand6.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand7.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand8.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand9.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand1.svg" />
                <BrandSelector brandName="Blue Guardian" logo="/Images/brands/brand2.svg" />
            </div>
        </>
    )
}

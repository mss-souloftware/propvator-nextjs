import Link from "next/link";

export default function Menus() {
    return (
        <div className="grid grid-cols-7 text-white mb-10 w-5/6 mx-auto">
            <div className="col-span-1">
                <h5 className="font-bold mb-4">Tools</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Compare Firms</Link>
                    </li>
                    <li>
                        <Link href="#">All Firms</Link>
                    </li>
                    <li>
                        <Link href="#">Multi-Comparer</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Offers</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Exclusive Offers</Link>
                    </li>
                    <li>
                        <Link href="#">Extra Account Promo</Link>
                    </li>
                    <li>
                        <Link href="#">All Current Offers</Link>
                    </li>
                    <li>
                        <Link href="#">Best Sellers</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Assets</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Forex</Link>
                    </li>
                    <li>
                        <Link href="#">Stocks</Link>
                    </li>
                    <li>
                        <Link href="#">Futures</Link>
                    </li>
                    <li>
                        <Link href="#">Crypto</Link>
                    </li>
                    <li>
                        <Link href="#">Darwinex</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Resources</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Favorite Firms</Link>
                    </li>
                    <li>
                        <Link href="#">Unlisted Firms</Link>
                    </li>
                    <li>
                        <Link href="#">Funded Trader Reviews</Link>
                    </li>
                    <li>
                        <Link href="#">Blog</Link>
                    </li>
                    <li>
                        <Link href="#">Prop Firm Lists</Link>
                    </li>
                    <li>
                        <Link href="#">Demo Accounts</Link>
                    </li>
                    <li>
                        <Link href="#">How it Works</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Programs</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Loyalty Program</Link>
                    </li>
                    <li>
                        <Link href="#">Affiliate Program</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Contact</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Contact</Link>
                    </li>
                    <li>
                        <Link href="#">Suggestions</Link>
                    </li>
                    <li>
                        <Link href="#">Status</Link>
                    </li>
                </ul>
            </div>

            <div className="col-span-1">
                <h5 className="font-bold mb-4">Social</h5>
                <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
                    <li>
                        <Link href="#">Twitter</Link>
                    </li>
                    <li>
                        <Link href="#">Instagram</Link>
                    </li>
                    <li>
                        <Link href="#">YouTube</Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

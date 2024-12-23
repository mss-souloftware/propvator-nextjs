import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="absolute right-3 md:right-0 top-full mt-4 md:mt-2 w-56 bg-[#22108F] border border-[#5C96CF] shadow-md rounded-md">
      <ul className="py-2">
        {/* <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/fxify/">
            Fxify
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li> */}
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/instant-funding/">
            Instant Funding
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/monevis/">
            Monevis
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/fintokei/">
            Fintokei
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/funded-trading-plus/">
            Funded Trading Plus
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link className="flex items-center" href="/quant-tekel/">
            Quant Tekel
            <svg
              fill="#0092F6"
              width="15px"
              height="15px"
              viewBox="0 0 512 512"
              id="_x30_1"
              version="1.1"
              className="ml-2"
            >
              <path d="M434.068,46.758L314.607,9.034C295.648,3.047,275.883,0,256,0s-39.648,3.047-58.607,9.034L77.932,46.758  C52.97,54.641,36,77.796,36,103.973v207.39c0,38.129,18.12,73.989,48.816,96.607l117.032,86.234  C217.537,505.764,236.513,512,256,512s38.463-6.236,54.152-17.796l117.032-86.234C457.88,385.352,476,349.492,476,311.363v-207.39  C476,77.796,459.03,54.641,434.068,46.758z M347.924,227.716l-98.995,98.995c-11.716,11.716-30.711,11.716-42.426,0l-42.427-42.426  c-11.716-11.716-11.716-30.711,0-42.426l0,0c11.716-11.716,30.711-11.716,42.426,0l21.213,21.213l77.782-77.782  c11.716-11.716,30.711-11.716,42.426,0h0C359.64,197.005,359.64,216,347.924,227.716z" />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
}

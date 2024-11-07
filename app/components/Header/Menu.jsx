import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="absolute top-full mt-2 w-48 bg-[#22108F] border border-[#5C96CF] shadow-md rounded-md">
      <ul className="py-2">
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/fxify/">Fxify</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/instant-funding/">Instant Funding</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/monevis/">Monevis</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/fintokei/">Fintokei</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="#">Blueberry Funded</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/funded-trading-plus/">Funded Trading Plus</Link>
        </li>
        <li className="px-4 py-2 hover:bg-[#3B82F6] text-white cursor-pointer">
          <Link href="/quant-tekel/">Quant Tekel</Link>
        </li>
      </ul>
    </div>
  );
}

import Link from "next/link";

export default function Copyright() {
  return (
    <div className="border-t-2 border-[#424242] py-5 md:px-0 px-3 text-white">
      <div className="container mx-auto">
        <div className="coprightSec flex flex-wrap justify-center sm:justify-between">
          <p className="text-sm sm:w-6/12 w-full">
            © 2024 Propvator. All rights reserved.
          </p>
          <ul className="m-0 p-0 flex text-sm sm:w-6/12 w-full sm:mt-0 mt-2 justify-center md:justify-end">
            <li className="mr-10">
              <Link href="/terms-and-conditions/" className="underline">
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy/" className="underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <p className="py-5">
          This website is provided for general use and informational purposes
          only. Nothing provided on our website shall constitute financial
          advice, suggestion or recommendation. Users should independently
          evaluate and verify the suitability of any such listed entities before
          engaging with them. For more information, visit our Terms & Conditions
          page.
        </p>
      </div>
    </div>
  );
}

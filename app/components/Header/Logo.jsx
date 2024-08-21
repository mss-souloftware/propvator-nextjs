import Link from "next/link";
import Image from "next/image";

export default function Logo({ demo }) {
    return (
        <Link href='/' className="p-2 d-inline-block relative">
            {/* {demo ?
                <span className="absolute bg-warning text-white px-2 rounded -right-14 text-sm">DEMO</span>
                : ''} */}
            <Image className="mx-auto" src="/Images/Global/logo.svg" width={280} height={85} alt="Propvator" />
        </Link>
    )
}

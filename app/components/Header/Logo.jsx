import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href='/' className="p-2">
            <Image src="/Images/Global/logo.png" width={280} height={85} alt="Propvator" />
        </Link>
    )
}

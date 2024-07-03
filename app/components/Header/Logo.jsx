import Link from "next/link";
import Image from "next/image";

export default function Logo() {
    return (
        <Link href='/'>
            <Image src="/Images/Global/logo.svg" width={280} height={85} alt="Propvator" />
        </Link>
    )
}

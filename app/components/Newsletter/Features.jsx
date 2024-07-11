import Image from "next/image";

export default function Features(porps) {
    return (
        <div className="flex items-center">
            <Image className="mr-4" src={porps.img} width={40} height={40} alt={porps.title} />
            <p className="capitalize text-white font-bold">{porps.title}</p>
        </div>
    )
}

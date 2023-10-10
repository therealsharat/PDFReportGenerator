import Image from "next/image";
import RealLogo from "../../../../public/RealAssist.jpeg"
import Link from "next/link";

export default function ReportHeader(){
    return(
        <>
            <div className="flex justify-between p-5 mx-8">
                <Link href={"/"} className="flex">
                    <Image src={RealLogo} alt="RealAssist-Logo" className="h-10 w-10" priority/>
                    <p className="ml-4 mt-0.5 font-semibold text-2xl">RealAssist.AI</p>
                </Link>
                <p className="font-extrabold mt-1 text-xl">
                    123 Main Street, Dover, NH 03820-4667
                </p>
            </div>
            <div className="bg-gradient-to-r from-blue-700 to-cyan-300 h-1 mx-8"/>
        </>
    )
}
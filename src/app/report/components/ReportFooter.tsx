export default function ReportFooter(){
    return(
        <>
            <div className="bg-gradient-to-r from-blue-700 to-cyan-300 h-1 mx-8"/>
            <div className="flex justify-between p-5 mx-8 mb-4">
                <p className="font-extrabold text-blue-600 mt-1 text-xl">
                    Report generated on {new Date().getUTCMonth()}/{new Date().getUTCDate()}/{new Date().getUTCFullYear()} ({new Date().getUTCHours()}:{new Date().getUTCMinutes()}) UTC
                </p>
                <p className="font-extrabold mt-1 text-xl">
                    RealAssist Property Report | Page 1 of 1
                </p>
            </div>
        </>
    )
}
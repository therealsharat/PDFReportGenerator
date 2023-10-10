import Graph from "@/app/report/components/Graph";
async function getReportData(){
    const res = await fetch("https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv");
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json();
}

export default async function GraphTemplate(){

    const reportData =  await getReportData();
    const yearlyBurglaryReport = reportData.data.map((item: {data_year: number, Burglary:number}) => ({year: item.data_year, burglary:item.Burglary}));

    return(
        <>
            <Graph data={yearlyBurglaryReport}/>
        </>
    )
}
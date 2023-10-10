"use client";
import {Button} from "@/components/ui/button";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {useRef} from "react";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ReportHeader from "@/app/report/components/ReportHeader";
import ReportFooter from "@/app/report/components/ReportFooter";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    maintainAspectRatio: false,
};

export default function Graph({data}: {data: any}){
    const pdfRef = React.useRef<HTMLDivElement>(null);
    const headerRef = React.useRef<HTMLDivElement>(null);
    const footerRef = React.useRef<HTMLDivElement>(null);
    const graphRef = React.useRef<HTMLDivElement>(null);

    const downloadPDF = () => {

        const input = graphRef.current;
        if (input) {
            html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF("p", "mm", "a4", true);
                const width = pdf.internal.pageSize.getWidth();
                const height = pdf.internal.pageSize.getHeight();
                const imgWidth = canvas.width;
                const imgHeight = canvas.height;
                const ratio = imgWidth / imgHeight >= width / height ? width / imgWidth : height / imgHeight;
                const imgX = (width - imgWidth * ratio) / 2;
                const imgY = 0
                pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
                pdf.save("report.pdf");
            });
        }
    };

    const labels = data.map((item: {year: number}) => item.year);

    const graph_data = {
        labels,
        datasets: [
            {
                label: 'Burglary',
                data: data.map((item: {burglary: number}) => item.burglary),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };

    return(
        <main id={"graph"} ref={graphRef}>
            <div ref={headerRef}>
                <ReportHeader />
            </div>

            <div ref={pdfRef} className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="py-4 flex">
                    <h1 className="font-semibold text-xl">Crime</h1>
                    <div className="flex-1 rounded-2xl ml-4 mt-3 relative bg-gradient-to-r from-blue-700 to-cyan-300 h-1"/>
                </div>

                <div className="rounded-3xl bg-gray-200 dark:bg-neutral-800 overflow-auto mb-10">
                    <div className="bg-blue-600/10 px-10">
                        <h2 className="py-2 font-semibold text-lg text-blue-600">
                            Burglary
                        </h2>
                    </div>
                    <div className="flex justify-around">
                        <p className="font-semibold text-xl -mr-5 self-center -rotate-90">
                            Arrests
                        </p>
                        <div className="flex-1 bg-gray-100 dark:bg-neutral-950 p-4 m-6 max-w-full rounded-3xl">
                            <Line options={options} data={graph_data} className="aspect-auto h-96"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-around">
                <Button onClick={downloadPDF} className="justify-self-center mb-10">
                    Download Graph
                </Button>
            </div>

            <div ref={footerRef}>
                <ReportFooter/>
            </div>

        </main>
    )
}
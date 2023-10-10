'use client';
import {PrintIcon} from "@/components/icons/PrintIcon";
import {Button} from "@/components/ui/button";

export function DownloadButton(){
    return(
        <Button className="rounded-xl" size="lg" onClick={
            () => {
                // window.open("/report", "_blank")
                let wspFrame = document.getElementById('Graph');
            }
        }>
            <PrintIcon className="h-6 w-6 fill-current mr-2"/>
            Print
        </Button>
    )
}
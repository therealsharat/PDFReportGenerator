import {ThemeToggle} from "@/components/theme-toggle";
import {Button} from "@/components/ui/button";
import {PrintIcon} from "@/components/icons/PrintIcon";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
        <div className="flex justify-around">
            <h1 className="font-semibold text-3xl"> PDF Report Generator</h1>
            <div className="ml-10">
                <ThemeToggle />
            </div>
        </div>

        <div className="mt-52 flex justify-around">
            <Button asChild className="rounded-xl" size="lg">
                <Link href={"/report"}>
                    <PrintIcon className="h-6 w-6 fill-current mr-2"/>
                    Print
                </Link>
            </Button>
        </div>
    </main>
  )
}

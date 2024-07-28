// Imports
import Link from "next/link";
import Image from "next/image";
import { Divider } from "@nextui-org/react";
import pfp from "../images/pfp.png"

// Side Panel Navigation for the user Dashboard
const Navbar = () => {
    return ( 
        <main className="bg-darkBackground border-r border-black shadow-2xl pt-16 h-screen w-52 sticky flex flex-col gap-10">
            <div className="flex flex-col items-center gap-3">
                <Image src={pfp} alt="profile picture" className="w-20 h-auto rounded-full"/>
                <div className="flex flex-col gap-1 items-center text-text">
                    <h5 className="">Design Out Loud</h5>
                    <p className="text-xs">Aman Chandak | CEO</p>
                </div>
                <Divider className="mt-5 w-7/12 bg-gray-500" />
            </div>
            <div className="flex flex-col overflow-auto gap-10 items-center text-lg">
                <Link href="/dashboard/calendar" className="bg-transparent text-text text-md">Calendar</Link>
                <Link href="/dashboard/clients" className="bg-transparent text-text">Clients</Link>
                <Link href="/dashboard/cashflow" className="bg-transparent text-text">Cash Flow</Link>
            </div>
        </main>
     );
}
 
export default Navbar;
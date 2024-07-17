"use client"

// Imports
import Link from "next/link";

// Side Panel Navigation for the user Dashboard
const Navbar = () => {
    return ( 
        <main className="bg-background shadow-md rounded-xl pt-5 h-screen w-40 sticky flex flex-col overflow-auto gap-5 items-center text-lg">
            <Link href="/dashboard/calendar" className="bg-transparent text-text">Calendar</Link>
            <Link href="/dashboard/clients" className="bg-transparent text-text">Clients</Link>
            <Link href="/dashboard/invoices" className="bg-transparent text-text">Invoices</Link>
            <Link href="/dashboard/cashflow" className="bg-transparent text-text">Cash Flow</Link>
        </main>
     );
}
 
export default Navbar;
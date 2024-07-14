"use client"

// Imports
import Link from "next/link";

// Side Panel Navigation for the user Dashboard
const Navbar = () => {
    return ( 
        <main className="bg-header shadow-2xl pt-5 h-screen w-40 sticky flex flex-col overflow-auto gap-5 items-center text-lg">
            <Link href="/dashboard/calendar" className="bg-transparent text-background">Calendar</Link>
            <Link href="/dashboard/clients" className="bg-transparent text-background">Clients</Link>
            <Link href="/dashboard/invoices" className="bg-transparent text-background">Invoices</Link>
            <Link href="/dashboard/cashflow" className="bg-transparent text-background">Cash Flow</Link>
        </main>
     );
}
 
export default Navbar;
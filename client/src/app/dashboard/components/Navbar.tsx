// Imports
import Link from "next/link";

// Side Panel Navigation for the user Dashboard
const Navbar = () => {
    return ( 
        <main className="bg-background shadow-lg pt-5 h-screen w-52 sticky flex flex-col overflow-auto gap-5 items-center text-lg">
            <Link href="/dashboard/calendar" className="bg-transparent text-text">Calendar</Link>
            <Link href="/dashboard/clients" className="bg-transparent text-text">Clients</Link>
            <Link href="/dashboard/cashflow" className="bg-transparent text-text">Cash Flow</Link>
        </main>
     );
}
 
export default Navbar;
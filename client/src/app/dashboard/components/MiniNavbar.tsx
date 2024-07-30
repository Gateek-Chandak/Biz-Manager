import Link from "next/link";
import Image from "next/image";

import CashImage from "../images/icons8-money-50.png"
import CustomersIcon from "../images/customersIcon.png"
import CalendarIcon from "../images/calendarIcon.png"

const MiniNavbar = () => {

    return ( 
        <div className="bg-darkBackground border-r border-black shadow-2xl pt-52 h-screen w-20 sticky flex-col gap-10 hidden lg:hidden md:flex px-2">
            <div className="flex flex-col overflow-auto gap-14 items-center text-lg">
                    <Link href="/dashboard/calendar" className="bg-transparent text-text text-md">
                        <Image src={CalendarIcon} alt="Calendar" className="bg-text w-12 h-12 rounded-full p-2"/>
                    </Link>
                    <Link href="/dashboard/clients" className="bg-transparent text-text">
                        <Image src={CustomersIcon} alt="Customers" className="bg-text w-12 h-12 rounded-full p-2"/>
                    </Link>
                    <Link href="/dashboard/cashflow" className="bg-transparent text-text">
                        <Image src={CashImage} alt="Calendar" className="bg-text w-12 h-12 rounded-full p-2" />
                    </Link>
            </div>
        </div>
     );
}
 
export default MiniNavbar;
"use client"

import Header from "../components/Header";
import ClientPageNavbar from "./ClientPageNavbar";
import ClientTable from "./ClientTable"

import { useState } from "react";

type FilterStatus = "Active" | "Prospects" | "Completed" | "All";

const CurrentCustomersPage = () => {

    const [status, setStatus] = useState<FilterStatus>("All")

    return ( 
        <div className="w-full h-screen flex flex-col gap-2 bg-background">
            <Header title="Clients"/>
            <ClientPageNavbar status={status} setStatus={setStatus}/> 
            <div className="w-full h-full px-6 pt-2 pb-4">
                <ClientTable status={status}/>
            </div>
        </div>
     );
}
 
export default CurrentCustomersPage;
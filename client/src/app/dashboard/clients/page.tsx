"use client"

import Header from "../components/Header";
import ClientPageNavbar from "./ClientPageNavbar";

const CurrentCustomersPage = () => {

    return ( 
        <div className="w-full">
            <Header title="Clients"/>
            <ClientPageNavbar /> 
        </div>
     );
}
 
export default CurrentCustomersPage;
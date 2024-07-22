"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input} from "@nextui-org/react";
import { useState } from "react";

type Status = "Active" | "Prospects" | "Completed" | "Not Completed";
type colourStatus = "success" | "warning" | "danger" | "primary" 

const ClientPageNavbar = () => {

    const [colour, setColour]= useState<colourStatus>("warning")
    const [status, setStatus] = useState<Status>("Active")

    const handleClickAction = (key: React.Key) => {
        // Type assertion to ensure key is of type Status
        const selectedStatus = key as Status;

        switch(selectedStatus) {
            case 'Active':
                setColour("warning")
                break
            case 'Completed':
                setColour("success")
                break
            case "Not Completed":
                setColour("danger")
                break
            case "Prospects":
                setColour("primary")
                break
            default:
                setColour("warning")
                break
        }

        setStatus(selectedStatus);
      };

    return ( 
        <div className="border-b border-b-gray-300 h-16 p-2 my-2 mx-4 flex flex-start gap-7"> 
                <Dropdown className="bg-text rounded-lg">
                    <DropdownTrigger className="">
                        <Button variant="solid" className={`min-w-32 bg-${colour} text-background`}>{status} </Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" variant="light" 
                                  className="bg-text text-white px-5" 
                                  onAction={handleClickAction} 
                                  classNames={{
                                        list: "gap-0",
                                  }}>
                        <DropdownItem key="Active" className="bg-text rounded-none text-warning">
                            <h6 className="bg-text hover:text-white" >Active</h6>
                        </DropdownItem>
                        <DropdownItem key="Prospects" className="bg-text rounded-none text-primary " showDivider={false}>
                            <h6 className="bg-text hover:text-white">Prospects</h6>
                        </DropdownItem>
                        <DropdownItem key="Completed" color="success" className="bg-text rounded-none text-success" showDivider={false}>
                            <h6 className="bg-text hover:text-white">Completed</h6>
                        </DropdownItem>
                        <DropdownItem key="Not Completed" className="bg-text rounded-none text-danger" showDivider={false}>
                            <h6 className="bg-text hover:text-white">Not Completed</h6>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Input type="search" placeholder="Search For A Client" variant="bordered" className="w-72 h-5 hover:border-red-50"/>
                <Button variant="solid" className={`min-w-20 text-text bg-gray-400`}>+ Add Client</Button>
            </div>
     );
}
 
export default ClientPageNavbar;
"use client"

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Input, Divider} from "@nextui-org/react";
import { useState } from "react";
import {UserIcon} from "../components/userIcon"

type Status = "Active" | "Prospects" | "Completed" | "All";
type colourStatus = "bg-success" | "bg-warning" | "bg-danger" | "bg-primary"  | "bg-purple-400"
type FilterStatus = "Active" | "Prospects" | "Completed" | "All"

const ClientPageNavbar = ( { status, setStatus }: {status: FilterStatus, setStatus: React.Dispatch<React.SetStateAction<FilterStatus>> } ) => {

    const [colour, setColour]= useState<colourStatus>("bg-purple-400")

    const handleClickAction = (key: React.Key) => {
        // Type assertion to ensure key is of type Status
        const selectedStatus = key as Status;

        switch(selectedStatus) {
            case 'All':
                setColour("bg-purple-400")
                break
            case 'Active':
                setColour("bg-warning")
                break
            case 'Completed':
                setColour("bg-success")
                break
            case "Prospects":
                setColour("bg-primary")
                break
            default:
                setColour("bg-purple-400")
                break
        }

        setStatus(selectedStatus)
      };

    return ( 
        <div className="border-b border-b-gray-400 h-16 px-1 pb-4 mt-3 mx-4 flex flex-start gap-6"> 
                <Dropdown className="bg-text rounded-lg border border-background" aria-label="Client Status Filter">
                    <DropdownTrigger className="">
                        <Button variant="solid" className={`min-w-32 gap ${colour} text-background`}>{status}</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Static Actions" variant="light" 
                                  className="bg-text text-white px-4 border rounded-lg" 
                                  onAction={handleClickAction} 
                                  classNames={{
                                        list: "gap-0 bg-text",
                                  }}>
                        <DropdownItem key="All" className="bg-text rounded-none text-background">
                            <h6 className="bg-text px-1 pt-5" >All</h6>
                            <p className="text-gray-500 px-1 text-xs">view all clients</p>
                        </DropdownItem>
                        <DropdownItem key="Active" className="rounded-none text-warning">
                            <Divider className="bg-gray-600" />
                            <h6 className="bg-text px-1 pt-5 hover:text-warning-700" >Active</h6>
                            <p className="text-gray-500 px-1 text-xs">view all active clients</p>
                        </DropdownItem>
                        <DropdownItem key="Prospects" className="bg-text rounded-none text-primary ">
                            <Divider className="bg-gray-600" />
                            <h6 className="bg-text px-1 pt-5 hover:text-primary-700">Prospects</h6>
                            <p className="text-gray-500 px-1 text-xs">view all prospective clients</p>
                        </DropdownItem>
                        <DropdownItem key="Completed" color="success" className="bg-text rounded-none text-success pb-6">
                            <Divider className="bg-gray-600" />
                            <h6 className="bg-text hover:text-success-700 px-1 pt-5">Completed</h6>
                            <p className="text-gray-500 px-1 text-xs">view all completed clients</p>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Input  placeholder="Search for a client"
                        isClearable
                        radius="lg"
                        className="h-5 w-5/12"
                        classNames={{
                        label: "text-black",
                        input: [
                            "bg-transparent",
                        ],
                        innerWrapper: "bg-transparent",
                        inputWrapper: [
                            "shadow-sm",
                            "backdrop-blur-xl",
                            "backdrop-saturate-200",
                            "hover:bg-default-200/70",
                            "dark:group-data-[focus=true]:bg-default-100/70",
                            "!cursor-text",
                        ],
                        }}/>
                <Button variant="ghost" className={`min-w-10 text-sm text-text hover:text-background bg-transparent`}>Filter</Button>
                <Button variant="shadow" 
                        className={`min-w-10 text-sm text-background bg-white ml-auto rounded-full shadow-md`}
                        startContent={<UserIcon/>}>Add New +</Button>
            </div>
     );
}
 
export default ClientPageNavbar;
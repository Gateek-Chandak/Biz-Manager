"use client"

import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell,
    Dropdown,  
    DropdownTrigger,  
    DropdownMenu,  
    DropdownSection,  
    DropdownItem,
    Button,
  } from "@nextui-org/react";

import { useClientContext } from "../contexts/clientContext";
import { useEffect, useState } from "react";
import Image from "next/image";
import DotsIcon from '../images/dots.png'

type Status = "Active" | "Prospect" | "Completed" | "None"
type FilterStatus = "Active" | "Prospects" | "Completed" | "All"
type ClientStatus = "view" | "edit" | "delete"

interface Client {
  id: string,
  name: string,
  email: string,
  phone: string,
  location: string | null,
  notes: string | null,
  status: "Active" | "Prospect" | "Completed" | "None",
  createdAt: number
}

const ClientTable = ( { status }: {status: FilterStatus} ) => {

    const { clients, addClient, removeClient, updateClient } = useClientContext()
    const [filteredClients, setFilteredClients] = useState<Client[]>(clients)

    useEffect(() => {
        if (status !== "All") {
            setFilteredClients(clients.filter((client) => (status === client.status || (status === "Prospects" && client.status === "Prospect"))))
        } else {
            setFilteredClients(clients)
        }
        console.log(filteredClients)
    }, [status, clients])

    const getStatusClass = (status: Status) => {
        switch (status) {
          case 'Active':
            return 'status-active';
          case 'Prospect':
            return 'status-prospect';
          case 'Completed':
            return 'status-completed';
          case 'None':
            return 'status-none';
          default:
            return '';
        }
      };

    const handleAction = (key: React.Key, id: string) => {
      const action = key as ClientStatus

      if(action == 'delete') {
        removeClient(id)
      }
    }

    return ( 
        <Table className="w-full h-full" 
               classNames={{ wrapper: "h-full bg-gray-300", th: "bg-gray-400 px-4 text-black", td: "text-sm"}}
               isStriped
               aria-label="Client Table">
            <TableHeader>
                <TableColumn align="center">NAME</TableColumn>
                <TableColumn align="center">EMAIL</TableColumn>
                <TableColumn align="center">PHONE</TableColumn>
                <TableColumn align="center">STATUS</TableColumn>
                <TableColumn align="center">LOCATION</TableColumn>
                <TableColumn align="center">CREATED AT</TableColumn>
                <TableColumn align="center">ACTIONS</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"No clients to display."} items={filteredClients}>
                {(item) => ( 
                    <TableRow key={item.id}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>
                            <div className="flex flex-row gap-2 items-center">
                                <div className={`w-1.5 h-1.5 ${getStatusClass(item.status)} rounded-full`}></div>
                                {item.status}
                            </div>
                        </TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>{item.createdAt}</TableCell>
                        <TableCell className="flex justify-center">
                          <Dropdown>
                            <DropdownTrigger>
                              <Button 
                                variant="flat" 
                                className="bg-transparent w-5"
                                disableAnimation={true}
                              >
                                <Image src={DotsIcon} alt="actions icon" 
                                 className="h-5 w-auto rounded-full hover:bg-gray-200"/>
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions" onAction={(key) => handleAction(key, item.id)}>
                              <DropdownItem key="view">View Client</DropdownItem>
                              <DropdownItem key="edit">Edit Client</DropdownItem>
                              <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete Client
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          </TableCell>
                    </TableRow>
                )}
            </TableBody>
        </Table>
     );
}
 
export default ClientTable;
"use client"

import { useState, useContext, createContext, ReactNode, use } from "react";

interface Client {
    id: string,
    name: string,
    email: string,
    phone: string,
    location: string,
    notes: string,
    status: "Active" | "Prospect" | "Completed" | "None",
    createdAt: string
}

interface ClientContextType{
    clients: Client[],
    addClient: (client: Client) => void,
    removeClient: (id: string) => void,
    updateClient: (id: string, updateClient: Partial<Client>) => void
}

const ClientContext = createContext<ClientContextType | undefined>(undefined)

const ClientContextProvider = ({children}: {children: ReactNode}) => {

    const [clients, setClients] = useState<Client[]>([{id: "1", name: "Gateek Chandak", email: "gateek09@gmail.com", phone: "647-642-0609", location: "Mississauga, ON", notes: "", status: "Completed", createdAt: "5"}, {id: "2", name: "Gateek Chandak", email: "gateek09@gmail.com", phone: "647-642-0609", location: "Mississauga, ON", notes: "", status: "None", createdAt: "5"}, {id: "3", name: "Gateek Chandak", email: "gateek09@gmail.com", phone: "647-642-0609", location: "Mississauga, ON", notes: "", status: "Prospect", createdAt: "5"}, {id: "4", name: "Gateek Chandak", email: "gateek09@gmail.com", phone: "647-642-0609", location: "Mississauga, ON", notes: "", status: "Active", createdAt: "5"}])

    const addClient = (newClient: Client) => {
        setClients([...clients, newClient])
    }

    const removeClient = (id: string) => {
        setClients(clients.filter((client) => client.id !== id))
    }

    const updateClient = (id: string, updatedClient: Partial<Client>) => {
        setClients(clients.map(client => (client.id === id ? { ...client, ...updatedClient } : client)))
    }   

    return ( 
        <ClientContext.Provider value={{clients, addClient, removeClient, updateClient}}>
            {children}
        </ClientContext.Provider>
     );
}

export default ClientContextProvider

export const useClientContext = () => {
    const context = useContext(ClientContext)
    if (context == undefined) {
        throw new Error ("useClientContext must be used within a clientsContextProvider")
    }

    return context
}
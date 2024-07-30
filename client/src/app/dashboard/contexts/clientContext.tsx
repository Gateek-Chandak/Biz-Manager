"use client"

import { useState, useContext, createContext, ReactNode, use } from "react";

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

interface ClientContextType{
    clients: Client[],
    addClient: (client: Client) => void,
    removeClient: (id: string) => void,
    updateClient: (id: string, updateClient: Partial<Client>) => void
}

const ClientContext = createContext<ClientContextType | undefined>(undefined)

const ClientContextProvider = ({children}: {children: ReactNode}) => {

    const [clients, setClients] = useState<Client[]>([])

    const addClient = (newClient: Client) => {
        setClients([...clients, newClient])
    }

    const removeClient = (id: string) => {
        setClients((prevClients) => prevClients.filter((client) => client.id !== id));
    }

    const updateClient = (id: string, updatedClient: Partial<Client>) => {
        setClients((prevClients) => prevClients.map(client => (client.id === id ? { ...client, ...updatedClient } : client)))
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
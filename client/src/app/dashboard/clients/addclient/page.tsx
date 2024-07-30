"use client"

import {v4 as uuidv4} from "uuid"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Header from "../../components/Header"
import { Button, Input, Textarea, RadioGroup, Radio } from "@nextui-org/react"
import { useClientContext } from "../../contexts/clientContext"
import React, { useState, useEffect } from "react"

interface Client {
    id: string,
    name: string,
    email: string,
    phone: string,
    location: string | null,
    notes: string,
    status: "Active" | "Prospect" | "Completed" | "None",
    createdAt: number
}

type ClientStatus = "Active" | "Prospect" | "Completed" | "None"

const AddClientPage = () => {

    const router = useRouter()

    const { clients, addClient } = useClientContext()

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [phone, setPhone] = useState<string>("")
    const [location, setLocation] = useState<string>("")
    const [status, setStatus] = useState<ClientStatus>("Active")
    const [notes, setNotes] = useState<string>("")

    useEffect(() => {
        console.log(name, email, phone, location, status, notes)
    }, [name, email, phone, location, status, notes])


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        
        const date = new Date

        const client: Client = {name, email, phone, location, status, notes, createdAt: 5, id: uuidv4()}

        addClient(client)

        console.log(name, email, phone, location, status, notes)
        router.push("/dashboard/clients")
    }

    return ( 
        <div className="w-full h-screen overflow-scroll bg-background">
            <Header title="New Client"/>
            <Button variant="shadow" 
                        className={`min-w-10 text-background bg-white rounded-full shadow-sm text-md m-4`}
                        as={Link}
                        href="../clients">
                        &lt;
            </Button>
            <form className="m-5 mx-20 grid grid-cols-2 gap-7 gap-y-7" onSubmit={handleSubmit}>
                <Input type="text" label="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} isRequired={true} className="col-span-2 md:col-span-1"/>
                <Input type="email" label="Email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required={true} isRequired={true} className="col-span-2 md:col-span-1"/>
                <Input type="phone" label="Phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required={true} isRequired={true} className="col-span-2 md:col-span-1"/>
                <Input type="location" label="Location" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="col-span-2 md:col-span-1"/>
                <RadioGroup label="Client Status" 
                            classNames={{wrapper: "grid lg:grid-cols-4 grid-cols-1", base: "gap-4", label: "text-gray-200"}} 
                            className="col-span-2" orientation="horizontal" 
                            isRequired={true}
                            value={status}
                            onChange={(e) => setStatus(e.target.value as ClientStatus)}>
                    <Radio value="Active" color="warning" className="text-warning"><h1 className="text-warning">Active</h1></Radio>
                    <Radio value="Prospect" color="primary" className="text-primary"><h1 className="text-primary">Prospect</h1></Radio>
                    <Radio value="Completed" color="success" className="text-success"><h1 className="text-success">Completed</h1></Radio>
                    <Radio value="None" color="default" className="text-default-50"><h1 className="text-gray-200">None</h1></Radio>
                </RadioGroup>
                <Textarea
                    variant="flat"
                    label="Notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Enter Client Notes"
                    className="col-span-2 "
                    minRows={10}
                    maxRows={10}
                    />
                <div className="flex flex-row col-span-2 justify-center gap-5">
                    <Button color="success" variant="shadow" size="lg" type="submit">
                        Add Client
                    </Button>  
                    <Button color="danger" variant="shadow" size="lg" type="reset" as={Link} href="../clients">
                        Cancel
                    </Button> 
                </div> 
            </form>
        </div>
     );
}
 
export default AddClientPage;

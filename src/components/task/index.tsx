"use client"
import { Checkbox } from "@/components/ui/checkbox";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useState } from "react";
import Image from "next/image";
import editIcon from "../../assets/icon/edit.png";
import deleteIcon from "../../assets/icon/delete.png";
import clockIcon from "../../assets/icon/clock.png";
  
export function Task({ id, title, description, time, checked }) {

    const task = { id, title, description, time, checked }
    const [status, setStatus] = useState("Agendado")
    
    const [updatedTask, setUpdatedTask] = useState(task)

    const handleChangeStatus = () => {
        const {checked, ...newTask} = task
        setUpdatedTask({
                    ...newTask,
                    checked: !updatedTask.checked,
                })    
    }

    return (
        <AccordionItem value={id} className={updatedTask.checked ? `border-primary-purple100` : `border-secondary-orange400`}>
            <div className="flex items-center justify-between w-72">
                <Checkbox
                    className="mr-4"
                    checked={updatedTask.checked}
                    onClick={handleChangeStatus} />
                <AccordionTrigger>
                    <div>
                        <p>{title}</p>
                        <div className="flex flex-row items-center justify-start w-36">
                            <Image
                            src={clockIcon}
                            alt="relógio"
                            width={12}
                            height={12}
                            className="mr-2"
                            />
                            <p className="text-neutras-gray300 font-normal text-sm mr-6">
                                {time}
                            </p>
                            <p className={updatedTask.checked ? `text-primary-purple100 font-normal text-sm` : `text-neutras-gray300 font-normal text-sm`}>
                                {updatedTask.checked ? "Concluído" : "Agendado"}
                            </p>
                        </div>
                    </div>
                </AccordionTrigger>
                <div className="flex flex-row">
                    <Image
                        src={editIcon}
                        alt="editar"
                        className="mr-2 cursor-pointer"
                    />
                    <Image
                        src={deleteIcon} 
                        alt="deletar"
                        className="cursor-pointer"
                            />
                </div>
            </div>
                <AccordionContent>
                    {description}
                </AccordionContent>
        </AccordionItem>  
        
    )
}

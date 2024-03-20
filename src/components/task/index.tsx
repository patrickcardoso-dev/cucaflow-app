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
  
export function Task({ taskId, taskTitle, taskDescription, taskTime }) {

    const [tasks, setTask] = useState([])
    const [status, setStatus] = useState("Agendado")
    const [checked, setChecked] = useState(false)

    const handleChangeStatus = () => {
        setChecked(!checked)
        if (checked) {
            setStatus("Concluído")
        } else {
            setStatus("Agendado")
        }
    }
    
    return (           
                <AccordionItem value={taskId}>
                    <div className="flex items-center justify-between w-72">
                        <Checkbox className="mr-4" onClick={handleChangeStatus} />
                        <AccordionTrigger>
                            <div>
                                <p>{taskTitle}</p>
                                <div className="flex flex-row items-center justify-start w-36">
                                    <Image
                                    src={clockIcon}
                                    alt="relógio"
                                    width={12}
                                    height={12}
                                    className="mr-2"
                                    />
                                    <p className="text-neutras-gray300 font-normal text-sm mr-6">
                                        {taskTime}
                                    </p>
                                    <p className="text-neutras-gray300 font-normal text-sm">
                                        {status}
                                    </p>
                                </div>
                            </div>
                        </AccordionTrigger>
                        <div className="flex flex-row">
                            <Image src={editIcon} alt="editar" />
                            <Image src={deleteIcon} alt="deletar" />
                         </div>
                    </div>
                        <AccordionContent>
                            {taskDescription}
                        </AccordionContent>
                </AccordionItem>    
    )
  }
  

// props: {taskTitle, taskDescription, taskTime}
// export default function Task() {
//     return (
//         <div>
            
//         </div>
//     )
// }
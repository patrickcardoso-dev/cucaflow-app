"use client"

import { Task } from "@/components/task";
import { Accordion } from "@/components/ui/accordion";
import { useState } from "react";

export default function Teste() {

    const initialTasks = [
        {
            id: "1",
            title: "Título da tarefa 1",
            description: "Aqui o usuário irá escrever uma descrição detalhada sobre a sua tarefa 1",
            time: "9:00"
        },
        {
            id: "2",
            title: "Título da tarefa 2",
            description: "Aqui o usuário irá escrever uma descrição detalhada sobre a sua tarefa 2",
            time: "11:00"
        },

    ]

    const [tasks, setTasks] = useState(initialTasks)
    // const copyTasks = tasks
    // copyTasks.push(newTask)
    // setTasks(copyTasks)

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <Accordion type="single" collapsible className="w-[320px]">
                {
                    tasks.map((task) => (
                        <Task
                        taskId={task.id}
                        taskTitle={task.title}
                        taskDescription={task.description}
                        taskTime={task.time}        
                    />
                    ))
                }

            </Accordion>
        </div>
    )
}
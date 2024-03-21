"use client"

import { Task } from "@/components/task";
import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";

export default function Teste() {

    const initialTasks = [
        {
            id: "1",
            title: "Título da tarefa 1 dsada dasda asdasd aasdasda adasdasd asdas",
            description: "Aqui o usuário irá escrever uma descrição detalhada sobre a sua tarefa 1",
            hour: "9:00",
            checked: false,
        },
        {
            id: "2",
            title: "Título da tarefa 2",
            description: "",
            hour: "",
            checked: false,
        },
        {
            id: "3",
            title: "Título da tarefa 3",
            description: "Aqui o usuário irá escrever uma descrição detalhada sobre a sua tarefa 3",
            hour: "11:00",
            checked: true,
        },

    ]

    const [tasks, setTasks] = useState(initialTasks)

    return (
        <div className="flex flex-col items-center justify-center h-screen gap-4">
            <div className="flex flex-col items-center justify-center h-screen gap-4">
            <Accordion type="single" collapsible className="w-80">
                    {tasks.map((task) => (
                        <Task
                            id={task.id}
                            title={task.title}
                            description={task.description}
                            hour={task.hour}
                            checked={task.checked}
                        />
                    ))}
            </Accordion>
        </div>
           
        </div>
    )
}
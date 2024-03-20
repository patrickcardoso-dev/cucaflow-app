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

interface TaskProps {
  id: string;
  title: string;
  description?: string;
  hour?: string;
  status: boolean;
}

export function Task({ id, title, description, hour, status }: TaskProps) {

    const [isVisible, setIsVisible] = useState(true);
    const [updatedTask, setUpdatedTask] = useState<TaskProps>(
        {
            id,
            title,
            description,
            hour,
            status
        }
    );
    
    const [openEdit, setOpenEdit] = useState(false);

    const handleChangeStatus = () => {
        setUpdatedTask((prevTask) => {
            const newTask = {
                ...prevTask,
                status: !prevTask.status,
            }
            console.log(newTask)
            //implementar lógica de atualizar a task no back ...
            return newTask
        });   
    };

  const handleDeleteTask = (id: string) => {
    console.log(id);
    //implementar lógica de deletar task no back ...
    setIsVisible(false);
  };

  const handleEditTask = (editTask: TaskProps) => {
    setOpenEdit(true);
    console.log(editTask);
  };

  return (
    <>
      {isVisible && (
        <>
          {/* {openEdit && (<Componente de edição de task />)} */}
          <AccordionItem value={id} className={updatedTask.status ? `border-primary-purple100` : `border-secondary-orange400`}>
            <div className="flex items-center justify-between w-72">
              <Checkbox
                className="mr-4"
                checked={updatedTask.status}
                onClick={handleChangeStatus}
              />
              <AccordionTrigger>
                <div>
                  <p>{title}</p>
                  <div className="flex flex-row items-center justify-start w-36">
                    {hour ? (
                      <>
                        <Image
                          src={clockIcon}
                          alt="relógio"
                          width={12}
                          height={12}
                          className="mr-2"
                        />
                        <p className="text-neutras-gray300 font-normal text-sm mr-6">
                          {hour}
                        </p>
                        <p className={updatedTask.status ? `text-primary-purple100 font-normal text-sm` : `text-neutras-gray300 font-normal text-sm`}>
                        {updatedTask.status ? "Concluído" : "Agendado"}
                      </p>
                      </>
                    ) : (
                      <p className={updatedTask.status ? `text-primary-purple100 font-normal text-sm` : `text-neutras-gray300 font-normal text-sm`}>
                        {updatedTask.status ? "Concluído" : "Pendente"}
                      </p>
                    )}

                  </div>
                </div>
              </AccordionTrigger>
              <div className="flex flex-row">
                <Image
                  src={editIcon}
                  alt="editar"
                  className="mr-2 cursor-pointer"
                  onClick={() => handleEditTask(updatedTask)}
                />
                <Image
                  src={deleteIcon}
                  alt="deletar"
                  className="cursor-pointer"
                  onClick={() => handleDeleteTask(id)}
                />
              </div>
            </div>
            {description && (
              <AccordionContent>
                {description}
              </AccordionContent>
            )}
          </AccordionItem>
        </>
      )}
    </>
  );
}

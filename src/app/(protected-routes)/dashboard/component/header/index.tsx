import React from 'react'
import { manrope } from "@/app/fonts";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserDataProps } from '../../page';
import  MenuIcon  from '@/assets/icon/menu.svg';
import Image from "next/image";




export function Header({userData}: {userData: UserDataProps}) {
  const textStyle = `${manrope.className} font-bold text-right`;
  return (
  <header className='flex w-full mt-4 items-center'>
    <button className='cursor-pointer'>
      <Image src={MenuIcon} alt='Menu icone' width={32} height={32} />
    </button>
    <section className='ml-auto mr-2'>
      <h1 className={`${textStyle} `}>Olá {userData.username} </h1>
      <p className='text-sm'>Aqui estão suas tarefas</p>
    </section>
    <Avatar className='bg-neutras-disable'>
      <AvatarImage src={userData.avatar} />
      <AvatarFallback>{userData.username[0]}</AvatarFallback>
    </Avatar>
  </header>
  )
}



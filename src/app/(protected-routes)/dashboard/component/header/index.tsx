import React, { useState } from 'react'
import { manrope } from "@/app/fonts";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserDataProps } from '../../page';
import  MenuIcon  from '@/assets/icon/menu.svg';
import Image from "next/image";
import { NavMenu } from '../navMenu';




export function Header({userData}: {userData: UserDataProps}) {
  const [showMenu, setShowMenu] = useState<boolean>(false)
  const textStyle = `${manrope.className} font-bold text-right`;
  const initials = userData.username.slice(0,4)
  return (
  <header className='flex w-auto mt-4 items-center justify-center'>
    <div className='mr-20'>
    <button onClick={() => setShowMenu(true)
      }>
        <Image src={MenuIcon} alt='Menu icone' width={32} height={32} />
    </button>
    </div>
    <section className='ml-auto mr-2'>
      <h1 className={`${textStyle} `}>Olá {userData.username} </h1>
      <p className='text-sm'>Aqui estão suas tarefas</p>
    </section>
    <Avatar className='bg-neutras-disable'>
      <AvatarImage src={userData.avatar} />
      <AvatarFallback>{initials}</AvatarFallback>
    </Avatar>
    {showMenu && <NavMenu/>}
    
  </header>
  )
  
}



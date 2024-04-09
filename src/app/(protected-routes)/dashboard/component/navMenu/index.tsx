import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { deleteCookies } from "@/util/coockies";

import  MenuIcon  from '@/assets/icon/menu.svg';
import logoDesktop from "@/assets/logo/logo-cucaflow-desktop.png";
import ChevronLeft from '@/assets/icon/chevron-left';
import HomeSvg from '@/assets/icon/home';
import Nota from '@/assets/icon/nota';
import Alarme from '@/assets/icon/alarme';
import Usuario from '@/assets/icon/usuario';
import LogoutIcon from '@/assets/icon/logout'

export function NavMenu( {setShowMenu}: {setShowMenu: React.Dispatch<React.SetStateAction<boolean>>}) {
 
  const styleLink = 'flex items-center py-5 px-8 w-full  gap-4 hover:bg-secondary-orange100/60'
  async function getOut() {
    await signOut();
    deleteCookies()
  }
  return (
    <div className='absolute top-0 h-full flex items-center cursor-pointer w-full bg-neutras-bgWhite/20 shadow-shadowMenu backdrop-blur-xl'>
      <div className='h-full w-[255px] bg-neutras-bgWhite rounded-e-2xl drop-shadow-dropMenu  pt-3'>
        <section className='flex items-center justify-between px-7'>
        <Image
            src={logoDesktop}
            alt="logo de um jacaré"
            width={123}
            height={76}
          />
          <button onClick={() => setShowMenu(false)}>
          <ChevronLeft />
          </button>
        
        
      </section>
      <div className='w-44 h-[1px] bg-neutras-disable mx-auto my-5' />
        <nav className='flex gap-8 flex-col text-xl'>
          <Link  href='/dashboard' className='flex items-center py-5 px-8 w-full gap-4 hover:bg-secondary-orange100/60'>
            <HomeSvg/>
            Home
          </Link>
          <Link href='/dashboard' className={styleLink}>
            <Nota/>
            Anotações
          </Link>
          <Link href='/dashboard' className={styleLink}>
            <Alarme/>
            Pomodoro
          </Link>
          <Link href='/profile' className={styleLink}>
            <Usuario/>
            Perfil
          </Link>
          <button onClick={getOut} className={styleLink}>
            <LogoutIcon/>
              Sair
          </button>
        </nav>
      </div>
    </div>
    
  )
}



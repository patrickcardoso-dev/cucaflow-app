import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { signOut } from "next-auth/react";

import { deleteCookies } from "@/util/coockies";

import  MenuIcon  from '@/assets/icon/menu.svg';
import logoDesktop from "@/assets/logo/logo-cucaflow-desktop.png";
import ChevronLeft from '@/assets/icon/chevron-left';

export function NavMenu() {
 
  
  async function getOut() {
    await signOut();
    deleteCookies()
  }
  return (
    <div className='absolute top-0 h-full flex items-center cursor-pointer w-full bg-neutras-bgWhite/20 shadow-shadowMenu backdrop-blur-xl'>
      <div className='h-full w-[255px] bg-neutras-bgWhite rounded-e-2xl drop-shadow-dropMenu px-6 pt-3'>
        <section className='flex items-center justify-between'>
        <Image
            src={logoDesktop}
            alt="logo de um jacaré"
            width={123}
            height={76}
          />
        <ChevronLeft/>
      </section>
        <nav className='flex  flex-col '>
          <Link href='/profile'>Perfil</Link>
          <Link href='/profile'>Perfil</Link>
        </nav>
      </div>
    </div>
    
  )
}



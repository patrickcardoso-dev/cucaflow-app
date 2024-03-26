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

export function NavMenu() {
 
  const styleLink = 'flex items-center gap-4'
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
        <ChevronLeft/>
        
      </section>
      <div className='w-44 h-[1px] bg-neutras-disable mx-auto my-5' />
        <nav className='flex  flex-col px-14 gap-8 text-xl'>
          <Link href='/dashboard' className={styleLink}>
            <HomeSvg/>
            Home
          </Link>
          <Link href='/dashboard' className={styleLink}>
            <HomeSvg/>
            Home
          </Link>
        </nav>
      </div>
    </div>
    
  )
}



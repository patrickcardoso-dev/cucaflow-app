"use client"

import { auth } from "@/auth";
import { sign } from "crypto";
import { signIn, useSession } from "next-auth/react";
import { redirect } from 'next/navigation'
import { ReactNode } from "react";

interface PrivateLayoutProps {
  children: ReactNode
}

export default function PrivateLayout({children}: PrivateLayoutProps) {
  
  const session = useSession()
  
  if (!session) {
   return redirect('/')
  } 
  return <>
  {children}
  </>
}
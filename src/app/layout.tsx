'use client'
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const rubik = Rubik({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Cucaflow",
  description: "Seu assistente pessoal de produtividade",
}; */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <SessionProvider>
      <body className={rubik.className}>
        
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
        {children}
        
        </body>
        </SessionProvider>
    </html>
  );
}

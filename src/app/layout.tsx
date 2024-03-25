'use client'
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const manrope = Manrope({ subsets: ["latin"] });

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
      <body className={manrope.className}>
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

import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { SessionProvider } from "next-auth/react";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cucaflow",
  description: "Seu assistente pessoal de produtividade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      
      <body className={rubik.className}>
        <SessionProvider>
        {children}
        </SessionProvider>
        </body>
    </html>
  );
}

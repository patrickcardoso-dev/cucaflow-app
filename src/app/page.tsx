'use client'
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form className="flex flex-col gap-3" >
        <div>
          <Label htmlFor='email'>E-mail</Label>
          <Input id="email" type="email" placeholder="Ex: email@gmail.com"/>
        </div>
        <div>
          <Label htmlFor='password'>Senha</Label>
          <Input id="password" placeholder="Insira sua senha" type="password"/>
        </div>
      </form>
    </main>
  );
}

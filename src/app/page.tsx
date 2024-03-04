'use client'
import SvgComponent from "@/components/icon/eyeOpen";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1>Código</h1>
{/*       <form className="flex flex-col gap-3" >
        <div>
          <Label htmlFor='email'>E-mail</Label>
          <Input id="email" type="email" placeholder="Ex: email@gmail.com"/>
        </div>
        <div>
          <Label htmlFor='password'>Senha</Label>
          <PasswordInput id="password" placeholder="Digite sua senha"/>
        </div>
        <Button type="submit" variant='orange'>Orange</Button>
        <Button variant='orangeSecond'>Orange Second</Button>
        <Button variant='purple'>Purple</Button>
        <Button variant='purpleSecond'>Purple Second</Button>
      </form> */}
    </main>
  );
}

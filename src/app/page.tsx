import Image from "next/image";
import logo from "../assets/logo-cuca.png";
import orange from "../assets/elipse-orange.png";
import purple from "../assets/elipse-purple.png";
import { manrope } from "./fonts";
import { Label } from "@/components/ui/label";
import { PasswordInput } from "@/components/password-input";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { ProfileForm } from "@/components/modal/editUser";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 p-6 relative laptop:flex-row">
<Image
        src={orange}
        alt="elípse laranja"
        width={290}
        className="absolute top-0 right-0 -z-10 w-56"
      />
      <div className="flex flex-col items-center justify-center ">
        <Image src={logo} alt="logo de um jacaré" />
        <p
          className={`${manrope.className} text-base text-[#211D28] font-medium text-center w-[235px] mt-2`}
        >
          Entre e comece a transformar suas metas em realidade.
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <form className="flex flex-col ">
          <Label
            className={`text-[#201F25] text-sm ${manrope.className} desktop:text-base mt-5`}
          >
            E-mail
          </Label>
          {/* <Input className="bg-neutras-neutra" /> */}

          <Label
            className={`text-[#201F25] text-sm ${manrope.className} desktop:text-base mt-5 `}
          >
            Senha
          </Label>
          {/* <PasswordInput className="bg-neutras-neutra" /> */}
          <p
            className={`cursor-pointer text-right text-xs mt-2 ${manrope.className}`}
          >
            Esqueceu sua senha?
          </p>

          <Button className="mt-10">Entrar</Button>
        </form>
        <hr className="w-[180px] my-6 mx-auto" />
        <p
          className={`text-center font-bold mt-1 text-sm text-[#49484D] ${manrope.className}`}
        >
          Não possui conta?{" "}
          <strong className="cursor-pointer text-primary-purple100 font-bold">
            Cadastre-se
          </strong>
        </p>
      </div> 

      <Image
        src={purple}
        alt="elipse roxa"
        width={290}
        className="absolute bottom-0 left-0 -z-10 w-48"
      /> 
      {/* <ProfileForm/> */}
    </main>
  );
}

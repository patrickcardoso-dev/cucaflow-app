import Image from "next/image";
import cucaflowLogo from "../../assets/logo_cucaflow-03.png";
import ellipse3 from "../../assets/ellipse3.png";
import ellipse2 from "../../assets/ellipse2.png";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function SignUp() {
    
    return (
        <main className="bg-[#FAFAFA] w-screen h-screen p-[24px]">
            <Image
                    src={ellipse3}
                    alt="Ellipe 3"
                    className="absolute top-0 left-0"
                />
            <div className="flex justify-center items-center">
                <Image
                    src={cucaflowLogo}
                    alt="Cucaflow logo"
                />
                
            </div>
            <div className="flex flex-col justify-center items-center">
                <h1 className="font-extrabold text-[32px] text-primary-purple100">Bem-vindo(a)</h1>
                <p className="w-[248px] text-center text-[16px] text-neutras-bgBlack font-normal opacity-70 m-2 leading-[20px]">Insira as informações abaixo para efetuar o cadastro</p>
            </div>

            <form className="flex flex-col justify-center items-center gap-5">
                <div className="flex flex-col w-[320px]">
                    <Label htmlFor="name">
                        Nome de usuário
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Ex. cucaflow"
                        className="w-[312px] mb-4"
                    />
                    <Label htmlFor="email">
                        E-mail
                    </Label>
                    <Input
                        id="name"
                        type="email"
                        placeholder="Ex. cucaflow@gmail.com"
                        className="w-[312px] mb-4"
                    />
                
                    <Label htmlFor="password">
                        Senha
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Insira sua senha"
                        className="w-[312px] mb-4"
                    />
                     <Label htmlFor="password">
                        Confirmar senha
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Insira sua senha"
                        className="w-[312px] mb-4"
                    />
                </div>

                <div className="flex items-center mb-4">
                    <input
                        type="checkbox" className=" form-checkbox w-[22px] h-[22px] border-4 border-blue- mr-2" />
                    <p className="text-[#AF61F2] text-xs">Eu aceito os Termos e Política de privacidade</p>
                </div>
                <div>
                    <Button className="bg-primary-purple100 w-[312px] ">
                        <p className="text-bold text-sm">Cadastrar</p>
                    </Button>
                </div>
            </form>

            <hr className="text-secondary-orange300 w-56 m-auto mt-6 mb-4"/>
            
                <div className="flex justify-center items-center">
                    <p className="text-[#49484D] font-bold text-center text-sm">Já possui conta?</p>
                    <strong>
                        <a href="#" className="text-[#EE5D21] text-bold text-center text-sm underline ml-1">Faça o Login</a>
                    </strong>
                    
                </div>
                <Image
                        src={ellipse2}
                        alt="Ellipe 2"
                        className="absolute top-screen right-0"
                    />
       </main>
    )
}
import Image from "next/image";
import { manrope } from "./fonts";
import cucaflowLogo from "../../assets/logo_cucaflow-03.png";
import ellipse3 from "../../assets/ellipse3.png";
import ellipse2 from "../../assets/ellipse2.png";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export default function SignUp() {
    
    return (
        <main className={`flex flex-col ${manrope.className} bg-neutras-bgWhite h-screen pt-6 pb-6 tablet:justify-center`}>
            <Image
                    src={ellipse3}
                    alt="Ellipe 3"
                    className="absolute top-0 left-0"
                />
            <div>
                <div className="flex justify-center items-center">
                    <Image
                        src={cucaflowLogo}
                        alt="Cucaflow logo"
                    />
                
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-extrabold text-3xl text-primary-purple100">Bem-vindo(a)</h1>
                    <p className="w-[248px] text-center text-sm text-neutras-bgBlack font-normal opacity-70 m-2 leading-5">Insira as informações abaixo para efetuar o cadastro</p>
                </div>
            </div>

            <div className="flex flex-col items-center">
                <form className="flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col gap-4">
                        <div>
                            <Label htmlFor="name">
                                Nome de usuário
                            </Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="Ex. cucaflow"
                            />
                        </div>
                        <div>
                            <Label htmlFor="email">
                                E-mail
                            </Label>
                            <Input
                                id="name"
                                type="email"
                                placeholder="Ex. cucaflow@gmail.com"
                            />
                        </div>
                
                        <div>
                            <Label htmlFor="password">
                                Senha
                            </Label>
                            <PasswordInput
                                id="password"
                                placeholder="Insira sua senha"
                            />
                        </div>
                        <div>
                            <Label htmlFor="password-confirm">
                                Confirmar senha
                            </Label>
                            <PasswordInput
                                id="password-confirm"
                                placeholder="Insira sua senha"
                            />
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Checkbox />
                        <p className="text-primary-purple400 text-xs pl-2">Eu aceito os Termos e Política de privacidade</p>
                    </div>
                
                    <Button variant="purple" size="default" className="w-[320px] rounded-md">
                        <p className="text-bold text-sm">Cadastrar</p>
                    </Button>
                </form>
                <hr className="text-secondary-orange300 w-56 m-auto mt-6 mb-4"/>
                
                    <div className="flex justify-center items-center pb-12 w-screen">
                        <p className={`text-neutras-gray300 font-bold text-center text-sm ${manrope.className}`}>Já possui conta?</p>
                        <strong>
                        <Link href="/" className="text-secondary-orange400 text-bold text-center text-sm underline ml-1">Faça o Login</Link>
                        </strong>
                        <Image
                            src={ellipse2}
                            alt="Ellipe 2"
                            className="absolute tablet:bottom-0 desktop:overflow-y-hidden top-screen right-0 "
                        />
                </div>
            </div>
            
       </main>
    )
}
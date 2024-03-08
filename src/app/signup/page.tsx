import Image from "next/image";
import { manrope } from "./fonts";
import cucaflowLogo from "../../assets/logo_cucaflow.png";
import ellipseTop from "../../assets/ellipse-top.png";
import ellipseBottom from "../../assets/ellipse-bottom.png";
import ellipseTopDesktop from "../../assets/ellipse-top-desktop.png";
import ellipseBottomDesktop from "../../assets/ellipse-bottom-desktop.png";
import largeLogo from "../../assets/big-logo-cuca.png";
import Link from "next/link";
import { SignUpForm } from "@/components/form/signup";

export default function SignUp() {
    
    return (
        <main className={`${manrope.className} tablet:flex tablet:items-center tablet:justify-center bg-neutra-bgWhite w-screen h-screen p-8`}>
            <div>
                <Image
                        src={ellipseTop}
                        alt="Ellipse Top"
                        className="block laptop:hidden absolute top-0 left-0"
                />
                <Image
                        src={ellipseTopDesktop}
                        alt="Ellipse Top"
                        className="hidden laptop:block absolute laptop:w-52 desktop:w-72 top-0 left-0"
                />
                <div className="flex justify-center items-center">
                    <Image
                        src={cucaflowLogo}
                        alt="Cucaflow logo"
                        className="block laptop:hidden "
                    />
                </div>
                <div className="flex flex-col laptop:flex-row laptop:justify-between laptop:items-start laptop:w-[1100px] laptop:p-24">
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src={largeLogo}
                            alt="Cucaflow logo"
                            className="hidden laptop:block laptop:w-[400px] laptop:mt-12"
                        />
                        <h1 className="font-extrabold text-3xl text-primary-purple100 mt-4">Bem-vindo(a)</h1>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="text-center text-sm laptop:text-xl laptop:text-primary-purple100 text-neutras-bgBlack font-normal opacity-70 m-2 leading-5 w-64 laptop:w-80">Insira suas informações abaixo para efetuar o cadastro</p>
                
                        <SignUpForm />
                        <hr className="text-secondary-orange300 w-56 m-auto mt-6 mb-4"/>
                
                        <div className="flex justify-center items-center">
                            <p className={`text-[#49484D] font-bold text-center text-sm ${manrope.className}`}>Já possui conta?</p>
                            <strong>
                                <Link href="/" className="text-secondary-orange400 text-bold text-center text-sm underline ml-1">Faça o Login</Link>
                            </strong>
                            <Image
                                src={ellipseBottom}
                                alt="Ellipe Bottom"
                                className="block laptop:hidden absolute bottom-screen tablet:bottom-0 right-0"
                            />
                            <Image
                                src={ellipseBottomDesktop}
                                alt="Ellipe Bottom"
                                className="hidden laptop:block absolute laptop:w-52 desktop:w-72 bottom-screen bottom-0 right-0"
                            />
                        </div>
                    </div>
                </div>
            </div>
       </main>
    )
}
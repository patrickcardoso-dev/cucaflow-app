import Image from "next/image";
import cucaflowLogo from "../../assets/logo/logo_cucaflow.png";
import ellipseTop from "../../assets/shape/mobile/ellipse-top.png";
import ellipseBottom from "../../assets/shape/mobile/ellipse-bottom.png";
import ellipseTopDesktop from "../../assets/shape/desktop/ellipse-top-desktop.png";
import ellipseBottomDesktop from "../../assets/shape/desktop/ellipse-bottom-desktop.png";
import desktopLogo from "../../assets/logo/logo-cucaflow-desktop.png";
import Link from "next/link";
import { SignUpForm } from "@/components/form/signUp/signup";
import DeleteAccount from "@/components/modal/deleteAccount";
import { Task } from "@/components/task";

export default function SignUp() {
  return (
    <main
      className={`tablet:flex tablet:items-center tablet:justify-center bg-neutra-bgWhite h-screen p-8`}
    >
      <DeleteAccount open={false} />
      <div>
        <Image
          src={ellipseTop}
          alt="Elipse roxa"
          className="block laptop:hidden absolute top-0 left-0"
        />
        <Image
          src={ellipseTopDesktop}
          alt="Elipse roxa"
          className="hidden laptop:block absolute laptop:w-72 top-0 left-0"
        />
        <div className="flex justify-center items-center">
          <Image
            src={cucaflowLogo}
            alt="Logo Cucaflow"
            className="block laptop:hidden "
          />
        </div>
        <div className="flex flex-col laptop:flex-row laptop:justify-around laptop:items-start laptop:w-[1000px] desktop:w-[1200px]">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={desktopLogo}
              alt="Logo Cucaflow"
              width={400}
              className="hidden laptop:block laptop:mt-12"
            />
            <h1 className="font-extrabold text-3xl text-primary-purple100 mt-4">
              Bem-vindo(a)
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="text-center text-sm laptop:text-xl laptop:text-primary-purple100 text-neutras-bgBlack font-normal opacity-70 m-2 leading-5 w-64 laptop:w-80">
              Insira suas informações abaixo para efetuar o cadastro
            </p>

            <SignUpForm />
            <hr className="text-secondary-orange300 w-56 m-auto mt-6 mb-4" />

            <div className="flex justify-center items-center mb-10">
              <p className="text-neutras-gray300 font-bold text-center text-sm">
                Já possui conta?
              </p>
              <strong>
                <Link
                  href="/"
                  className="text-secondary-orange400 text-bold text-center text-sm underline ml-1"
                >
                  Faça o Login
                </Link>
              </strong>
              <Image
                src={ellipseBottom}
                alt="Elipse laranja"
                className="block laptop:hidden absolute bottom-screen tablet:bottom-0 right-0"
              />
              <Image
                src={ellipseBottomDesktop}
                alt="Elipse laranja"
                className="hidden laptop:block absolute laptop:w-72 laptop:bottom-0 laptop:right-0"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

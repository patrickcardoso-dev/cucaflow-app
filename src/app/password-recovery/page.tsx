import Image from "next/image";
import purpleEllipse from "../../assets/shape/mobile/elipse-purple-1.png";
import orangeEllipse from "../../assets/shape/mobile/ellipse-orange-1.png";
import cucaLogo from "../../assets/logo/logo-cucaflow-desktop.png"
import { Input } from "@/components/ui/input";
import RecoveryForm from "@/components/form/passwordRecovery";
import { Button } from "@/components/ui/button";

export default function PasswordRecovery() {
    return ( 
        <main className="relative overflow-hidden h-full">
            <Image
                src={orangeEllipse}
                alt="ellipse roxa"
                className="absolute top-11 right-[-25px] translate-x-40 rotate-6 -translate-y-36 -z-10 max-w-md laptop:translate-x-36 laptop:rotate-2 laptop:-translate-y-24 desktop:translate-x-36"
            />
                <div className="flex flex-col items-center justify-center gap-4 py-24">
                    <Image
                        src={cucaLogo}
                        alt="Logo Cucaflow"
                        width={300}
                    />
                    <p className="w-72 text-center">
                    Digite o e-mail cadastrado para redefinição de senha.
                    </p>
                    <RecoveryForm />
                    <hr />
                    <Button className="mt-12 w-80 lg:w-96" type="reset" variant="orangeSecond">
                        Voltar
                    </Button>       
                </div>
            <Image
                src={purpleEllipse}
                alt="elipse roxa"
                className="max-w-sm absolute bottom-5 tablet:top-screen left-0 -z-10 translate-y-32 -translate-x-36 rotate-7 laptop:rotate-3 laptop:-translate-x-36 laptop:translate-y-20 laptop:max-w-lg"
      />
        </main>

     )
}
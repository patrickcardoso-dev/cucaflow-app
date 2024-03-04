import Image from "next/image";
import logo from "../assets/logo-cuca.png";
import orange from "../assets/elipse-orange.png";
import purple from "../assets/elipse-purple.png";

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
        <p className="text-sm text-neutral-700 font-bold text-center w-[235px] mt-2">
          Insira as informações para efetuar o cadastro
        </p>
      </div>

      <div className=" flex flex-col items-center">
        <form className="flex flex-col ">
          <label>Email</label>
          <input className="rounded border-gray-500 border" />

          <label>Senha</label>
          <input className="rounded border-gray-500 border mb-1" />
          <p className="text-right text-xs">Esqueceu sua senha?</p>

          <button className="w-[312px] h-[42px] flex justify-center items-center bg-orange-600 mt-11">
            Entrar
          </button>
        </form>
        <hr className="w-[180px] my-6 mx-auto" />
        <p className="text-center mt-1 text-sm text-purple-700 ">
          Não possui conta?{" "}
          <strong className="underline underline-offset-1">Cadastre-se</strong>
        </p>
      </div>

      <Image
        src={purple}
        alt="elipse roxa"
        width={290}
        className="absolute bottom-0 left-0 -z-10 w-48"
      />
    </main>
  );
}

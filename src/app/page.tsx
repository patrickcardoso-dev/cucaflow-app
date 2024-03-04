import Image from "next/image";
import logo from "../assets/logo-cuca.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-6">
      {/* <Image/> */}
      <Image src={logo} alt="logo de um jacaré" />
      <p className="font-sans text-sm text-neutral-700 font-bold text-center w-[248px]">
        Insira as informações abaixo para efetuar o cadastro
      </p>

      <form className="flex flex-col  ">
        <label>Email</label>
        <input className="rounded border-gray-500 border" />

        <label>Senha</label>
        <input className="rounded border-gray-500 border mb-1" />
        <p className="text-right text-xs">Esqueceu sua senha?</p>

        <button className="w-[312px] h-[42px] flex justify-center items-center bg-orange-600 mt-11">
          Entrar
        </button>
      </form>
      <hr className="w-[180px]" />
      <p className="text-right text-sm text-purple-700 ">
        Não possui conta?{" "}
        <strong className="underline underline-offset-1">Cadastre-se</strong>
      </p>

      {/* <Image/> */}
    </main>
  );
}

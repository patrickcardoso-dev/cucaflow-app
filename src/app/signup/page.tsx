import Image from "next/image";
import CucaflowLogo from "../../assets/logo_cucaflow-03.png"

export default function SignUp() {
    
    return (
        <main className="bg-[#FAFAFA] w-screen h-screen">
            <div className="flex justify-center">
                <Image
                    src={CucaflowLogo}
                    alt="Cucaflow logo"
                />
            </div>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="font-bold color text-3xl text-purple-800 cursor-pointer">Bem-vindo(a)</h1>
                    <p className="w-56 text-center text-sm text-gray-600 font-bold m-4">Insira as informações abaixo para efetuar o cadastro</p>
                </div>
                <form className="flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col w-[320px]">
                        <label htmlFor="user_name" className="text-black text-sm mb-1">Nome de usuário:</label>
                        <input
                            type="text"
                            placeholder="Ex: Seu Nome"
                            name="user_name"
                            id="user_name"
                            className="rounded-lg border-gray-500 border h-[42px] w-[315px] placeholder-slate-500"
                        />
                        <label htmlFor="user_email" className="text-black text-sm mb-1">E-mail</label>
                        <input
                            type="email"
                            placeholder="Ex: email@gmail.com"
                            name="user_email"
                        id="user_email"
                        className="rounded-lg border-gray-500 border h-[42px] w-[315px] mb-1 placeholder-slate-500"
                        />
                    </div>
                    <div className="flex flex-col w-[320px]">
                        <label htmlFor="user_pass" className="text-black text-sm mb-1">Senha</label>
                        <input
                            type="password"
                            placeholder="Insira sua senha"
                            name="user_pass"
                            id="user_pass"
                            className="rounded-lg border-gray-500 border h-[42px] w-[315px] mb-1 placeholder-slate-500"
                        />
                        <label htmlFor="user_confirm_pass" className="text-black text-sm mb-1">Confirmar Senha</label>
                        <input
                            type="text"
                            placeholder="Insira sua senha"
                            name="user_confirm_pass"
                            id="user_confirm_pass"
                            className="rounded-lg border-gray-500 border h-[42px] w-[315px] mb-1 placeholder-slate-500"
                        />
                    </div>
                    <div className="flex text-xs">
                        <input type="checkbox" className="w-6 h-6 border-purple-700 border-4 mr-2"/>
                        <p className="text-purple-500 text-xs">Eu aceito os Termos e Política de privacidade</p>
                    </div>
                    <div>
                        <button className="bg-purple-700 w-[312px] h-[42px] mb-2">
                            <a href="#" className="text-white text-bold text-sm">Cadastrar</a>
                        </button>
                    </div>
                </form>
                <hr />
                <div className="flex justify-center items-center">
                    <p className="text-purple-700 text-bold text-center text-sm">Já possui conta?</p>
                <strong>
                    <a href="#" className="text-purple-700 text-bold text-center text-sm underline ml-2">Faça o Login</a>
                </strong>
                </div>
       </main>
    )
}
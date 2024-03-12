import Image from "next/image";
import React from "react";
import CameraIcon from "@/../public/camera.png";
import { Button } from "@/components/ui/button";

function OptionProfile() {
  return (
    <dialog>
      <div>
        <h3>Seu perfil</h3>
        <Image
          width={120}
          height={120}
          className="rounded-full w-[120px] h-[120px]"
          src={CameraIcon}
          alt="teste"
        />
        <p>Beca</p>
        <p>recebecandrade@gmail.com</p>
      </div>
      <div>
        <Button type="submit" variant="purple">
          Editar cadastro
        </Button>
        <Button className="mt-3" type="reset" variant="orangeSecond">
          Voltar
        </Button>
      </div>
      <div>
        <hr className="w-[180px] my-6 mx-auto" />
        <p>
          Deseja excluir conta? <b>Excluir</b>
        </p>
      </div>
    </dialog>
  );
}

export default OptionProfile;

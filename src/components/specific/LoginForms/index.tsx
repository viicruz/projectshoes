//Components Imports
import CommonButton from "@/components/Common/CommonButton";

//Hooks Imports
import {useRouter} from "next/navigation";

//Libraries Imports
import { useState } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  loginEmail: z
    .string()
    .nonempty("Por favor preencha o campo de email")
    .email("Formato de email inválido"),
  loginPassword: z.string().min(8, "A senha precisa de no mínimo 8 caracteres"),
});
type SchemaType = z.infer<typeof schema>;

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //@ts-ignore - Probally error in the Library
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });
  const [output, setOutput] = useState("");

  const navigation = useRouter();

  function loginUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
    navigation.push("/dashboard");
  }

  return (
    <>
      <div>
        <form
          className="gap-2 flex-col flex"
          onSubmit={handleSubmit(loginUser)}
          action="submit"
        >
          <input
            className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
              errors.loginEmail ? "error" : ""
            }`}
            type="email"
            placeholder="E-MAIL*"
            {...register("loginEmail")}
          />

          {errors.loginEmail && (
            <span className="text-[#dc347c] ml-2">
              {errors.loginEmail.message}
            </span>
          )}
          <input
            className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
              errors.loginEmail ? "error" : ""
            }`}
            type="password"
            placeholder="SENHA*"
            {...register("loginPassword")}
          />
          {errors.loginPassword && (
            <span className="text-[#dc347c] ml-2">
              {errors.loginPassword.message}
            </span>
          )}

          <div className="ml-[6px] gap-4 flex">
            <CommonButton text="ENTRAR"/>
            <button className="underline">Esqueceu a Senha?</button>
          </div>
        </form>
      </div>
    </>
  );
}

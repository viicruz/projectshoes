//Components Imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CommonButton from "@/components/CommonButton";

//Libraries Imports
import { useState } from "react";
import z, { ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z
  .object({
    email: z
      .string()
      .nonempty("Por favor preencha o campo de email")
      .email("Formato de email inválido"),
    password: z
      .string()
      .min(8, "A senha precisa de no mínimo 6 caracteres"),
    formName: z
      .string()
      .min(3, "O nome do usuário deve conter pelo menos 3 caracteres")
      .max(20, "O nome do usuário deve conter no máximo 20 caracteres"),
    formCpf: z
      .string()
      .min(11, "Cpf deve conter 11 characteres")
      .max(11, "Cpf deve conter 11 characteres"),
    confirmPassword: z.string().min(8,"Por favor confira a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
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
  
  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
  }
  function loginUser(data:any){
    setOutput(JSON.stringify(data, null, 2));
  }

  return (
    <main className="w-full min-h-screen">
      <Header />

      <div className="w-full h-[100px] bg-gray-200 flex items-center">
        <h1 className="font-semibold text-2xl ml-16">ÁREA DO CLIENTE</h1>
      </div>

      <div className="w-full h-[600px] flex justify-center mt-5">
        <div className="w-[500px] mx-4">
          <h2 className="text-center font-semibold text-2xl border-b-2">
            Minha Conta
          </h2>
          <div>
            <form
              className="gap-2 flex-col flex"
              onSubmit={handleSubmit(loginUser)}
              action="submit"
            >
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="email"
                placeholder="E-MAIL*"
              />

              {errors.email && (
                <span className="text-red-600 ml-2">{errors.email.message}</span>
              )}
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="password"
                placeholder="SENHA*"
              />
              {errors.password && (
                <span className="text-red-600 ml-2">{errors.password.message}</span>
              )}

              <div className="ml-[6px] gap-4 flex">
                <CommonButton ButtonColor="yellow" text="ENTRAR" />
                <button className="underline">Esqueceu a Senha?</button>
              </div>
            </form>
          </div>
        </div>

        <div className="w-[500px] mx-4">
          <h2 className="text-center font-semibold text-2xl border-b-2">
            Criar Conta
          </h2>
          <div className="border-l-2 w-full h-[400px]">
            <form
              className="gap-2 flex-col flex"
              onSubmit={handleSubmit(createUser)}
            >
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                placeholder="NOME*"
                {...register("formName")}
              />
              {errors.formName && (
                <span className="text-red-600 ml-2">{errors.formName.message}</span>
              )}
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="email"
                placeholder="E-MAIL*"
                {...register("email")}
              />
              {errors.email && (
                <span className="text-red-600 ml-2">{errors.email.message}</span>
              )}
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="text"
                placeholder="CPF*"
                {...register("formCpf")}
              />
              {errors.formCpf && (
                <span className="text-red-600 ml-2">{errors.formCpf.message}</span>
              )}
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="password"
                placeholder="SENHA*"
                {...register("password")}
              />
              {errors.password && (
                <span className="text-red-600 ml-2">{errors.password.message}</span>
              )}
              <input
                className="w-full h-[50px] px-2 border-[1px]"
                type="password"
                placeholder="CONFIRME SUA SENHA*"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <span className="text-red-600 ml-2">{errors.confirmPassword.message}</span>
              )}

              <div className="ml-[6px]">
                <CommonButton text="CRIAR CONTA" />
              </div>
            </form>
          
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </main>
  );
}

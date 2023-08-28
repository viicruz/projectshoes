//Components Imports
import CommonButton from "@/components/CommonButton";

//Hooks Imports
import { useRouter } from "next/navigation";

//Libraries Imports
import { useState } from "react";
import z, { ZodNull } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";

type Props = {};
const schema = z
  .object({
    email: z
      .string()
      .nonempty("Por favor preencha o campo de email")
      .email("Formato de email inválido"),
    password: z.string().min(8, "A senha precisa de no mínimo 8 caracteres"),
    formName: z
      .string()
      .min(3, "O nome do usuário deve conter pelo menos 3 caracteres")
      .max(20, "O nome do usuário deve conter no máximo 20 caracteres"),
    formCpf: z
      .string()
      .min(14, "Cpf deve conter 11 characteres")
      .max(14, "Cpf deve conter 11 characteres"),
    confirmPassword: z.string().min(8, "Por favor confira a senha"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type SchemaType = z.infer<typeof schema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    //@ts-ignore - Probally error in the Library
  } = useForm<SchemaType>({ resolver: zodResolver(schema) });
  const [output, setOutput] = useState("");

  const navigation = useRouter();

  function createUser(data: any) {
    setOutput(JSON.stringify(data, null, 2));
    navigation.push("/dashboard");
  }

  return (
    <div className="border-l-2 w-full h-[400px]">
      <form className="gap-2 flex-col flex" onSubmit={handleSubmit(createUser)}>
        <input
          className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
            errors.formName ? "error" : ""
          }`}
          placeholder="NOME*"
          {...register("formName")}
        />
        {errors.formName && (
          <span className="text-[#dc347c] ml-2">{errors.formName.message}</span>
        )}

        <input
          className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
            errors.email ? "error" : ""
          }`}
          type="email"
          placeholder="E-MAIL*"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-[#dc347c] ml-2">{errors.email.message}</span>
        )}

        <InputMask
          mask={"999-999-999.99"}
          maskChar={null}
          className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
            errors.formCpf ? "error" : ""
          }`}
          type="text"
          placeholder="CPF*"
          {...register("formCpf")}
        />
        {errors.formCpf && (
          <span className="text-[#dc347c] ml-2">{errors.formCpf.message}</span>
        )}

        <input
          className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
            errors.password ? "error" : ""
          }`}
          type="password"
          placeholder="SENHA*"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-[#dc347c] ml-2">{errors.password.message}</span>
        )}

        <input
          className={`w-full h-[50px] px-2 border-[1px] transition-all duration-300 ${
            errors.confirmPassword ? "error" : ""
          }`}
          type="password"
          placeholder="CONFIRME SUA SENHA*"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-[#dc347c] ml-2">
            {errors.confirmPassword.message}
          </span>
        )}

        <div className="ml-[6px]">
          <CommonButton text="CRIAR CONTA" />
        </div>
      </form>
    </div>
  );
}

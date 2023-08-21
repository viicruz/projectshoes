import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InputBar from "@/components/InputBar";
import CommonButton from "@/components/CommonButton";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Header />

      <div className="w-full h-[100px] bg-gray-200 flex items-center">
        <h1 className="font-semibold text-2xl ml-16">ÁREA DO CLIENTE</h1>
      </div>

      <div className="w-full h-[500px] flex justify-center mt-5">
        <div className="w-[500px] mx-4">
          <h2 className="text-center font-semibold text-2xl border-b-2">
            Minha Conta
          </h2>
          <div>
            <InputBar placeHolder="E-MAIL*" />
            <InputBar type="password" placeHolder="SENHA*" />
            <div className="ml-[6px] gap-4 flex">
              <CommonButton ButtonColor="yellow" text="ENTRAR" />
              <button className="underline">Esqueceu a Senha?</button>
            </div>
          </div>
        </div>

        <div className="w-[500px] mx-4">
          <h2 className="text-center font-semibold text-2xl border-b-2">
            Criar Conta
          </h2>
          <div className="border-l-2 w-full h-[400px]">
            <InputBar placeHolder="NOME*" />
            <InputBar placeHolder="E-MAIL*" />
            <InputBar type="password" placeHolder="SENHA*" />
            <InputBar type="password" placeHolder="CONFIRME SUA SENHA*" />
            <div className="ml-[6px]">
              <CommonButton ButtonColor="yellow" text="CRIAR CONTA" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </main>
  );
}

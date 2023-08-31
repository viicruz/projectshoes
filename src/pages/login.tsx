//Components Imports
import Header from "@/components/Common/Header";
import Footer from "@/components/Common/Footer";
import LoginForms from "@/components/specific/LoginForms";
import SignInForms from "@/components/specific/SignUpForms";

//Libraries Imports

export default function Login() {
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

          <LoginForms />
        </div>

        <div className="w-[500px] mx-4">
          <h2 className="text-center font-semibold text-2xl border-b-2">
            Criar Conta
          </h2>
          <SignInForms />
        </div>
      </div>

      <div className="mt-4">
        <Footer />
      </div>
    </main>
  );
}

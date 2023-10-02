//Components Imports
import Header from "../../src/components/common/Header";
import Footer from "../../src/components/common/Footer";
import LoginForms from "@/components/specific/LoginForms";
import SignInForms from "@/components/specific/SignUpForms";

//Hook imports
import { useRouter } from "next/navigation";

//Libraries Imports
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { GoogleLogo } from "phosphor-react"


export default function Login() {


  const handleGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(() => {
      navigation.push('/dashboard')
    })

  }

  const navigation = useRouter();

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
          <div className="w-full ">
            <button className="bg-gray-500 text-white hover:bg-black text-LG w-[39%] h-10 rounded-sm flex p-2 text-center gap-1 ml-2 mt-2" onClick={handleGoogle}>
              <GoogleLogo size={24} />
              Login com Google
            </button>
          </div>

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

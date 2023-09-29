import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd5euxQk4Af0cmrep_K-blskraMUsO0vk",
  authDomain: "projetoboer-63e62.firebaseapp.com",
  projectId: "projetoboer-63e62",
  storageBucket: "projetoboer-63e62.appspot.com",
  messagingSenderId: "275076096703",
  appId: "1:275076096703:web:35eb5ce5080850b6659c0a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

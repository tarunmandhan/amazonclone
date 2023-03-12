import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGy7nnRCPVvGjqF2vmxAVHAf6_QYbHiJQ",
  authDomain: "clone-9f782.firebaseapp.com",
  projectId: "clone-9f782",
  storageBucket: "clone-9f782.appspot.com",
  messagingSenderId: "609109216483",
  appId: "1:609109216483:web:15e141f5f6c4b76e0fc9d6",
  measurementId: "G-3HH98M09MV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };

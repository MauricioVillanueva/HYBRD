import { useState, useEffect } from "react";
import { auth } from "../firebase/firebase.config";
import { createContext, useContext } from "react";
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    console.log("error creating auth context");
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [authReady, setAuthReady] = useState(false);
  useEffect(() => {
    const subscribed = onAuthStateChanged(auth, async (currentUser) => {
      console.log(currentUser);
      if (!currentUser) {
        console.log("no hay usuario suscrito");
        setUser("");
      } else {
        try {
          const createUserResponse = await axios.post(
            "http://localhost:3001/api/user/signUp",
            {
              clientId: currentUser.uid,
              email: currentUser.email,
              photo_secure_url: currentUser.photoURL,
              name: currentUser.displayName,
            }
          );
          if(createUserResponse.status === 200) console.log("Registro Exitoso");
        } catch (error) {
          console.log(error);
        }
        setUser(currentUser);
        setAuthReady(true);
      }
    });
    return () => subscribed();
  }, []);

  const register = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Registro exitoso:", response);
    } catch (error) {
      console.error("Error al registrar la cuenta:", error.message);
    }
  };

  const login = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    console.log(response);
  };

  const loginWithGoogle = async () => {
    const responseGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, responseGoogle);
  };

  const logout = async () => {
    const response = await signOut(auth);
    console.log(response);
  };

  return (
    <authContext.Provider
      value={{ register, login, loginWithGoogle, logout, user, authReady }}
    >
      {children}
    </authContext.Provider>
  );
}

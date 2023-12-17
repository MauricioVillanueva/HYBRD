import { useState, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/slices/userSlice";
import google from "./icons/google.png";
import axios from "axios";

const GoogleProvider = ({ isLogin, setLogin }) => {
  const dispatch = useDispatch();

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    image_secure_url: "",
  });

  useEffect(() => {
    dispatch(setUser(profile));
  }, [profile]);

  const handleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const credentials = await signInWithPopup(auth, provider);
      const values = {
        name: credentials.user.displayName,
        email: credentials.user.email,
        image_secure_url: credentials.user.image_secure_url,
      };
      const response = await axios.post(
        "http://localhost:3001/api/user/signup",
        values
      );

      const userPayload = {
        id: response.data.userToLogin.id,
        name: response.data.userToLogin.name,
        email: response.data.userToLogin.email,
        // ... otras propiedades ...
      };

      dispatch(setUser(userPayload));

      const token = response.data.token;
      localStorage.setItem("jwtToken", token);
      setLogin(!isLogin);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignin = async () => {
    const provider = new GoogleAuthProvider();
    const credentials = await signInWithPopup(auth, provider);
    const values = {
      email: credentials.user.email,
    };

    const response = await axios.post(
      "http://localhost:3001/api/user/signup",
      values
    );

    const userPayload = {
      id: response.data.userToLogin.id,
      name: response.data.userToLogin.name,
      email: response.data.userToLogin.email,
      // ... otras propiedades ...
    };


    dispatch(setUser(userPayload));
    const storedToken = localStorage.getItem("jwtToken");

    if (storedToken) {
      const headers = { Authorization: `Bearer ${storedToken}` };
      try {
        const response = await axios.post(
          "http://localhost:3001/api/user/login",
          values,
          { headers }
        );

        setProfile(() => ({ ...profile, ...response.data.userToLogin }));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log("No se encontró ningún token en el Local Storage.");
    }
  };

  return (
    <button
      type="button"
      onClick={isLogin ? handleSignin : handleSignup}
      className="w-full h-[58px] bg-white border border-gray-300 rounded-[10px] flex items-center justify-center text-black text-base font-medium mb-8"
    >
      <div className="w-6 h-6 mr-2">
        <img src={google} />
      </div>
      {isLogin ? "Log In with Google" : "Sign Up with Google"}
    </button>
  );
};

export default GoogleProvider;

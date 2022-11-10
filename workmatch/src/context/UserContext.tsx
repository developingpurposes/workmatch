import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services";
import { useNavigate } from "react-router-dom";
import profilePic from "../assets/account.png";
import { ToastError, ToastSuccess } from "../services/toast";
import { iTechs } from "./ProjectContext";

export interface iUserProfile {
  userName: string;
  password: string;
  email: string;
  name: string;
  avatar_url?: string;
  bio: string;
  level: string;
  contact: string;
  techs: iTechs[];
  id: number;
}

export interface iUserLogin {
  email: string;
  password: string;
}

export interface iRegisterUser {
  userName: string;
  name: string;
  email: string;
  password: string;
  verification: string;
}

interface iUserProviderChildren {
  children: ReactNode;
}

interface iUserContext {
  userLogin: (info: iUserLogin) => void;
  userRegister: (info: iRegisterUser) => void;
  profile: iUserProfile;
  setProfile: React.Dispatch<React.SetStateAction<iUserProfile>>;
  image: string;
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iUserProviderChildren) {
  const [profile, setProfile] = useState<iUserProfile>({} as iUserProfile);
  const navigate = useNavigate();
  const [image, setImage] = useState(profilePic);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("WorkMatch:token");
      const userId = localStorage.getItem("WorkMatch:userId");
      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;
          const response = await api.get(`/users/${userId}`);
          setProfile(response.data);
        } catch (error) {
          ToastError.fire({
            icon: "error",
            iconColor: "#EC8697",
            title: `Seu token expirou logue novamente`,
          });
          localStorage.clear();
          navigate("/");
        }
      }
    }
    loadUser();
  }, [navigate]);

  async function userLogin(info: iUserLogin) {
    try {
      const response = await api.post("/login", info);
      localStorage.setItem("WorkMatch:token", response.data.accessToken);
      localStorage.setItem("WorkMatch:userId", response.data.user.id);
      navigate("/home");
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Seja bem vindo, ${response.data.user.name}`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Conta ou senha inválida!`,
      });
    }
  }

  async function userRegister(info: iRegisterUser) {
    const newInfo = {
      email: info.email,
      password: info.password,
      userName: info.userName,
      name: info.name,
      bio: null,
      contact: null,
      level: null,
      techs: [],
      avatar_url: null,
    };
    try {
      const response = await api.post("/register", newInfo);

      localStorage.setItem("WorkMatch:token", response.data.accessToken);
      localStorage.setItem("WorkMatch:userId", response.data.user.id);
      navigate("./home");
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Conta criada com sucesso!`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Ops, alguma coisa esta errada`,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        profile,
        userLogin,
        userRegister,
        setProfile,
        image,
        setImage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

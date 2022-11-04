import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export interface iUserProfile {
  name: string;
  avatar_url: string;
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
  bio: null;
  contact: null;
  level: null;
  techs: [];
  avatar_url: null;
}

interface iUserProviderChildren {
  children: ReactNode;
}

interface iUserContext {
  userLogin: (info: iUserLogin) => void;
  userRegister: (info: iRegisterUser) => void;
  profile: iUserProfile | null;
  ToastSuccess: typeof Swal;
  ToastError: typeof Swal;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iUserProviderChildren) {
  const [profile, setProfile] = useState(null);

  const ToastSuccess = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#168821",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  const ToastError = MySwal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 1500,
    background: "#B53147",
    color: "#FFFFFF",
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", MySwal.stopTimer);
      toast.addEventListener("mouseleave", MySwal.resumeTimer);
    },
  });

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("WorkMatch:Token");
      const userId = localStorage.getItem("WorkMatch:userId");

      if (token) {
        try {
          api.defaults.headers.common["Userorization"] = `Bearer ${token}`;

          const { data } = await api.get(`/users/${userId}`);
          setProfile(data);
        } catch (error) {
          console.error(error);
          ToastError.fire({
            icon: "error",
            iconColor: "#EC8697",
            title: `Seu token expirou logue novamente`,
          });
        }
      }
    }
    loadUser();
  }, [ToastError]);

  async function userLogin(info: iUserLogin) {
    try {
      const response = await api.post("/login", info);

      localStorage.setItem("WorkMatch:token", response.data.accessToken);
      localStorage.setItem("WorkMatch:userId", response.data.user.id);
      window.location.replace("./home");
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
    console.log("oi");
    try {
      await api.post("/register", info);

      window.location.replace("./login");
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Conta criada com sucesso`,
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
        ToastSuccess,
        ToastError,
        profile,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;

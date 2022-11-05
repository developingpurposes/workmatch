import { createContext, useState, useEffect, ReactNode } from "react";
import api from "../services";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);

export interface iUserProfile {
  name: string;
  avatar_url: string;
  bio: string;
  level: string;
  contact: string;
  techs: [];
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
  editProfile: (info: iUserProfile) => void;
  profile: iUserProfile | null;
  setModalProfile: React.Dispatch<React.SetStateAction<boolean>>;
  modalProfile: boolean;
  logout: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

function UserProvider({ children }: iUserProviderChildren) {
  const [profile, setProfile] = useState(null);
  const [modalProfile, setModalProfile] = useState(false);
  const navigate = useNavigate();

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
        }
      }
    }
    loadUser();
  }, [ToastError, navigate]);

  function logout() {
    localStorage.clear();
    navigate("/");
  }

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

  async function editProfile(info: iUserProfile) {
    const token = localStorage.getItem("WorkMatch:Token");
    const userId = localStorage.getItem("WorkMatch:userId");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/${userId}`, info);

      setModalProfile(false);
      ToastSuccess.fire({
        icon: "success",
        iconColor: "#168821",
        title: `Usuario modificado com sucesso!`,
      });
    } catch (error) {
      ToastError.fire({
        icon: "error",
        iconColor: "#EC8697",
        title: `Não foi possivel atualizar seu perfil`,
      });
    }
  }

  return (
    <UserContext.Provider
      value={{
        profile,
        modalProfile,
        userLogin,
        userRegister,
        editProfile,
        setModalProfile,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
import { Link } from "react-router-dom";
import HeaderStyle from "./HeaderStyle";
import LogoComplete from "../../assets/logoInteira.png";
import Logo from "../../assets/logo.png";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <HeaderStyle isOpen={isOpen}>
      <div className="header__container">
        <img src={Logo} alt="Logo Imagem" />
        <Hamburger toggled={isOpen} toggle={setOpen} rounded color="#F8F8F8" />
      </div>
      <ul>
        <li>
          <Link to={"/notPage"}>Portifólio</Link>
        </li>
        <li>
          <Link to={"/notPage"}>Talentos</Link>
        </li>
        <li className="list__logo">
          <img src={LogoComplete} alt="Logo Imagem" />
        </li>
        <li>
          <Link to={"/register"}>Registrar</Link>
        </li>
        <li>
          <Link to={"/login"}>Login</Link>
        </li>
      </ul>
    </HeaderStyle>
  );
}
export default Header;

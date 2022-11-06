import FooterStyle from "./FooterStyle";
import logoComplete from "../../assets/logoInteira.png";
import Ana from "../../assets/Ana.png";
import Davidson from "../../assets/Davidson.png";
import Felipe from "../../assets/Felipe.png";
import Julio from "../../assets/Julio.png";
import Rafael from "../../assets/Rafael.png";
import Thiago from "../../assets/Thiago.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function Footer() {
  return (
    <FooterStyle>
      <div>
        <img src={logoComplete} alt="Imagem da Logo" />
        <h2>Direitos reservados</h2>
      </div>
      <div className="container__contatos">
        <div>
          <h3>Contatos</h3>
        </div>
        <ul>
          <li>
            <div>
              <a href="https://github.com/anaadx">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/ana-paula-duarte-ba036a185/">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Ana Duarte</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/davidsonq">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/davidson-quaresma/">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Davidson Quaresma</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/FelipeSiqueiraDev">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/felipe-o-siqueira/">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Felipe Siqueira</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/juliomello93">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/juliomello93/">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Julio Mello</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/zRafael012">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="s">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Rafael Soares</p>
            </div>
          </li>
          <li>
            <div>
              <a href="https://github.com/ThiagoKalac">
                <AiFillGithub color="#F8F8F8" size="20px" />
              </a>
              <a href="https://www.linkedin.com/in/thiagorodriguessilva1994/">
                <AiFillLinkedin color="#F8F8F8" size="20px" />
              </a>
            </div>
            <div className="list__container">
              <p>Thiago Silva</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="container__time">
        <h2>Time de Desenvolvedores</h2>
        <ul>
          <li>
            <img src={Ana} alt="Imagen de Ana" />
          </li>
          <li>
            <img src={Davidson} alt="Imagen de Davidson " />
          </li>
          <li>
            <img src={Felipe} alt="Imagen de Felipe" />
          </li>
          <li>
            <img src={Julio} alt="Imagen de Julio" />
          </li>
          <li>
            <img src={Rafael} alt="Imagen de Rafael" />
          </li>
          <li>
            <img src={Thiago} alt="Imagen de Thiago" />
          </li>
        </ul>
      </div>
    </FooterStyle>
  );
}
export default Footer;

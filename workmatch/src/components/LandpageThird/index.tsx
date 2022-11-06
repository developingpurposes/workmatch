import LandpageThirdStyle from "./LandpageThirdStyle";
import { MdGroup } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsCloudArrowUp } from "react-icons/bs";
import { FaPeopleCarry } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Footer from "../Footer";

function LandpagThird() {
  return (
    <LandpageThirdStyle>
      <h2>Porque nos escolher?</h2>
      <ul>
        <li>
          <MdGroup color="#F8F8F8" size="3rem" />
          <h3>Desenvolva soft skills</h3>
          <p>
            Aproveite a possibilidade de trabalhar em equipe e desenvolver suas
            habilidades comportamentais.
          </p>
        </li>
        <li>
          <CgProfile color="#F8F8F8" size="3rem" />
          <h3>Aprimore seu portfólio</h3>
          <p>
            Agregue experiência para a sua carreira e construa seu perfil de
            desenvolvedor de acordo com o seu estilo de trabalho pessoal.
          </p>
        </li>
        <li>
          <HiOutlineDesktopComputer color="#F8F8F8" size="3rem" />
          <h3>Expanda suas conexões</h3>
          <p>
            Construa conexões capazes de contribuir com o seu crescimento pessoa
            e profissional.
          </p>
        </li>
        <li>
          <BsCloudArrowUp color="#F8F8F8" size="3rem" />
          <h3>Traga visibilidade para o seu trabalho</h3>
          <p>
            Exponha suas criações e participações para que empresas alinhadas
            possam entrar em contato com seu trabalho.
          </p>
        </li>
        <li>
          <IoIosPeople color="#F8F8F8" size="3rem" />
          <h3>Inspire-se através da comunidade </h3>
          <p>
            Acesse outros projetos realizados por equipes diferentes e estimule
            a sua criatividade para desenvolver as suas próprias ideias.
          </p>
        </li>
        <li>
          <FaPeopleCarry color="#F8F8F8" size="3rem" />
          <h3>Contribua com o coletivo</h3>
          <p>
            Construa aplicações capazes de solucionar problemas sociais e ajudar
            a comunidade de desenvolvedores.
          </p>
        </li>
      </ul>
      <Footer />
    </LandpageThirdStyle>
  );
}
export default LandpagThird;

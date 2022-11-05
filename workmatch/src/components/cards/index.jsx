import * as C from "./cardStyle";
import imgLand from "../../assets/backgroundLandPage1.png";
import logo from "../../assets/logo.png";

function Card({tech, onDelete, onEdit}) {

  return (
    <C.Card>
    <img src={imgLand} alt="teste"></img>
    <div className="containerText">
        <h2>Novos negócios digitais</h2>
        <h3>Vivamus rhoncus tellus et nunc vestibulum, in sollicitudin nisl fermentum. Donec in est posuere, maximus lorem interdum, tristique ex. Nunc eget velit sodales ligula rhoncus convallis. Quisque sit amet leo nec est sagittis mattis. Morbi faucibus dui blandit ullamcorper pharetra. Donec at blandit enim, nec tincidunt orci. Nam vehicula faucibus lacus ut egestas. Morbi eget lacus vel dolor dictum vulputate.</h3>
        <h3>Lista de Participantes</h3>
        <C.ContainerImgTeam>
        {/* {tech.participantes?.img.map((img) => { */}
            {/* return ( */}
              <li className="imgTeam">
              <img src={imgLand} alt="teste"></img>
              </li>
              <li className="imgTeam">
              <img src={imgLand} alt="teste"></img>
              </li>
              <li className="imgTeam">
              <img src={imgLand} alt="teste"></img>
              </li>
            {/* ); */}
          {/* })} */}
        </C.ContainerImgTeam>
        <div className="divTechs">
            <p>tecnologias</p>
            <ul>
            {/* {tech.techs.img.map((img) => {
            return (
              <li>
                <img></img>
              </li>
            );
          })} */}
          <li>
              <img src={logo} alt="teste"></img>
              </li>
              <li>
              <img src={logo} alt="teste"></img>
              </li>
              <li>
              <img src={logo} alt="teste"></img>
              </li>
        </ul>
        </div>
        <C.ContainerButton>
            <button>Editar</button>
            <button>Deletar</button>
        </C.ContainerButton>
    </div>
    </C.Card>
  )
}

export default Card
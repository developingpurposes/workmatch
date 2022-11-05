import * as C from "./modalCardOnStyle";
import * as D from "./modalCardOffStyle";
import Card from "../cards";

function ModalCards ({handleModal, techs}){

  return (
    <C.ContainerModal>
     
       <D.DivModal>
          <C.TitleModal>
            <h2>Meus Projetos</h2>
            <button type="button">X</button>
          </C.TitleModal>
          <div className="container">
            <h2>Ops! Você ainda não possui nenhum projeto</h2>
            <button className="startButton">Começar um agora</button>
          </div>
       </D.DivModal>
      {/* )

    } */}
    </C.ContainerModal>     
  )
}

export default ModalCards
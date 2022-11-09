import { iTechs } from "../../context/ProjectContext";
import {DataBaseIcons} from "../../services/dataBaseTechs";


interface iRenderIcon{
     arrTechs: iTechs[],
}


function RenderIcon({arrTechs}:iRenderIcon) {
       
     const newArr = [] as any[]
     arrTechs.map(elt => {

          DataBaseIcons.map(eltIcons =>{
               if (elt.value === eltIcons.value) {
                   newArr.push(eltIcons.icon)
               
               }
         })
     
     })
     
     return (
          <>
               {newArr.map((elt) => elt)}
          </>
  
     )
}


export default RenderIcon;
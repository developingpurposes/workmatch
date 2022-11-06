import Input from "../../styles/input";
import {IoMdSearch as Search} from "react-icons/io";
import DivSearch from "./searchStyle";

function SearchProject() {
     return (
          <DivSearch>
               <Input padding={8} width={300} />
               <Search className="search"/>
          </DivSearch>
     )
}


export default SearchProject;
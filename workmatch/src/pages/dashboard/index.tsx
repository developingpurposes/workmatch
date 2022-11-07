import Header, { BodyDiv, CardProjects } from "./dashStyle";
import Logo from "../../assets/logo.png";
import { BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons";
import { AiOutlinePlus } from "react-icons/ai";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

function Dashboard() {
  const { profile } = useContext(UserContext);

  return (
    <>
      <Header>
        <div>
          <img src={Logo} alt="logo" />
          <IconContext.Provider
            value={{ color: "white", className: "iconSearch" }}
          >
            <div className="divIcons">
              <AiOutlinePlus />
              <BiSearchAlt2 />
            </div>
          </IconContext.Provider>
          <div className="userInfos">
            <img src={profile?.avatar_url} alt="" />
            <div className="containerUser">
              <h2>{profile?.name}</h2>
              <p>{profile?.level}</p>
            </div>
          </div>
        </div>
      </Header>
      <BodyDiv>
        <CardProjects>
          <div className="userInfos">
            <img src="" alt="" />
            <h2>a</h2>
            <p>b</p>
          </div>
          <div className="creationDate">
            <p>Data de criação:</p>
          </div>
        </CardProjects>
      </BodyDiv>
    </>
  );
}

export default Dashboard;

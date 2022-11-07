import { DashboardStyle, HeaderDashboard } from "./dashStyle";
import { CgFileAdd as AddPost, CgBell as BellNotificatin } from "react-icons/cg";
import Logo from "../../assets/logo.png";
import imgUserDf from "../../assets/account.png"
import { UserContext } from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import api from "../../services";
import Menu from "../../components/menuDropDashboard";
import Post from "../../components/post";



export interface iProject {
  description: string;
  techs: [];
  amount: string;
  date: string;
  avatar_url: string | null;
  id: number;
  admin: {
    adminId: string;
    adminName: string;
    adminLevel: string;
    adminAvatar: string | null;
  };
  
}

function Dashboard() {
  const { profile } = useContext(UserContext);
  const [projects, setProjects] = useState<iProject[]>([] as iProject[]);
  const token = localStorage.getItem("WorkMatch:token");
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    async function getProjects() {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const { data } = await api.get("/projects");
        setProjects(data);
      } catch (error) {}
    }
    getProjects();
  }, []);

  return (
    <DashboardStyle>
      <HeaderDashboard>
        <div className="container containerHeader">
          <img  src={Logo} alt="logo da workMatch" />
        
          <div className="userActionIconsField ">
            <AddPost className="svgHover" />
            <BellNotificatin className="svgHover"/>
          </div>
        
          <div className="userProfile" onClick={()=>setMenuOpen(true)}>
            {
              profile?.avatar_url?
                <img src={profile?.avatar_url} alt={profile?.userName}/>
                :
                <img src={imgUserDf} alt="ilustração de usuario" />
            }
            {
              menuOpen? <Menu/> : false
            }

            
            <div className="infoUser">
            
              <h2>{profile?.userName}</h2>

              {
              profile?.level? <p>{profile?.level}</p> : <p>Está sem nivel</p>
              } 
            </div>

          </div>
        </div> 
        
        
        
      </HeaderDashboard>

      <Post projects={projects} />        
        
    </DashboardStyle>
    );
}

export default Dashboard;

import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Dashboard() {
  const { profile } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("WorkMatch:token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [navigate, token]);

  console.log(profile);
  return (
    <>
      <h1>teste</h1>
    </>
  );
}

export default Dashboard;

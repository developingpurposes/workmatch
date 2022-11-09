import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import LandpageSecond from "../../components/LandpageSecond";
import LandpagThird from "../../components/LandpageThird";
import LandpageStyle from "./landpageStyle";

function LandPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("WorkMatch:token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  return (
    <>
      <LandpageStyle>
        <Header />
        <main>
          <h2>Conectando devs,</h2>
          <h3>desenvolvendo propósitos</h3>
          <Link to={"/login"}>Conecte-se agora!</Link>
        </main>
      </LandpageStyle>
      <LandpageSecond />
      <LandpagThird />
    </>
  );
}

export default LandPage;

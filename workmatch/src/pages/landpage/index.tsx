import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LandpageSecond from "../../components/LandpageSecond";
import LandpagThird from "../../components/LandpageThird";
import LandpageStyle from "./landpageStyle";

function LandPage() {
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

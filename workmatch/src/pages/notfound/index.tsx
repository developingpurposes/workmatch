import NotFoundStyle from "./notfoundStyle";
import ImgBackground from "../../assets/404Error.gif";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <NotFoundStyle>
      <h1>Em construção, nosso site esta em desenvolvimento</h1>
      <img src={ImgBackground} alt="" />
      <Link className="button" to={"/"}>
        voltar para a landpage
      </Link>
    </NotFoundStyle>
  );
}

export default NotFound;

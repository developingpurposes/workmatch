import NotFoundStyle from "./notfoundStyle";
import ImgBackground from "../../assets/404Error.gif";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <NotFoundStyle>
      <div>
        <h1>Em construção!!</h1>
        <p>Estamos preparando algo incrível e emocionante para você.</p>
      </div>
      <img src={ImgBackground} alt="" />
      <Link className="button" to={"/"}>
        Voltar para a landpage
      </Link>
    </NotFoundStyle>
  );
}

export default NotFound;

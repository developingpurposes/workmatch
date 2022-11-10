import LandpageSecondStyle from "./LandpageSecondeStyle";
import pcImg from "../../assets/pcParaInfor.png";
import groupImg from "../../assets/TrabalhoEquipo.png";

function LandpageSecond() {
  return (
    <LandpageSecondStyle>
      <div>
        <h2>
          A maneira <strong>WorkMatch</strong> para você encontrar as
          <strong> conexeções perfeitas</strong>
        </h2>
      </div>
      <section className="section__second">
        <img src={pcImg} alt="Imagem de um computador" />
        <h2>
          Foi idealizado para que você, desenvolvedor, possa ter acesso a uma
          rede capaz de te conectar com o seu propósito.
        </h2>
      </section>
      <section>
        <img src={groupImg} alt="Imagem de um grupo trabalhando" />
        <h2>
          Proporcionamos o acesso à pessoas com os interesses alinhados e que
          possuam as tecnologias que o seu projeto necessita!
        </h2>
      </section>
    </LandpageSecondStyle>
  );
}
export default LandpageSecond;

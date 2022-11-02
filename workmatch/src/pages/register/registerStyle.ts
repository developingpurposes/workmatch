import styled from "styled-components";
import backgroundImage from "../../assets/register.png";

const RegisterStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background-image: url(${backgroundImage});
  background-size: 110% 120%;

  img {
    width: 60px;
    height: 60px;

    margin: 25px auto;
  }

  section {
    background-color: var(--color-1);
    width: 450px;
    height: 500px;

    margin: 0 0 40px 80px;

    div {
      display: flex;
      justify-content: space-between;

      margin-bottom: 20px;

      h3 {
        color: var(--color-6);
        font-weight: 800;
        font-size: 25px;

        margin: 10px 0 0 20px;
      }

      a {
        margin: 10px 20px 0 0;

        text-decoration: none;
        color: var(--color-6);
      }
    }
  }
`;

export default RegisterStyle;

import styled from "styled-components";
import backgroundImage from "../../assets/register.png";

const RegisterStyle = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: 950px 100%;
  background-position: right;

  object-fit: cover;
  object-position: right;

  font-family: var(--font-df);

  img {
    width: 60px;
    height: 60px;

    margin: 25px auto;
  }

  section {
    background-color: var(--color-3);
    width: 90%;
    height: fit-content;

    div {
      width: 100%;
      height: 50px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      h3 {
        color: var(--color-6);
        margin-left: 15px;
        font-size: 1.5rem;
      }

      a {
        text-decoration: none;
        font-size: 0.8rem;

        color: var(--color-6);

        margin-right: 10px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 767px) {
    background-size: 100% 100%;

    align-items: flex-start;

    section {
      margin-left: 100px;
      width: 500px;
    }
  }
`;

export default RegisterStyle;

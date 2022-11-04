import styled from "styled-components";
import backgroundImage from "../../assets/register.png";

const RegisterStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-2);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-x: 50%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  object-fit: contain;

  img {
    width: 60px;
    height: 60px;
    align-self: center;
    margin-top: 25px;
  }

  section {
    width: 90%;
    padding: 20px;
    align-self: center;
    border-radius: 3px;
    margin-bottom: 100px;
    background-color: var(--color-bg-form);

    div {
      width: 100%;
      height: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        color: var(--color-6);
        font-weight: 800;
        font-size: 25px;
        margin-bottom: 3px;
      }

      a {
        align-self: center;
        text-decoration: none;
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
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 30px;
    }

    section {
      width: 400px;
      align-self: baseline;
      margin-left: 10%;
      

      div {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  }
`;

export default RegisterStyle;

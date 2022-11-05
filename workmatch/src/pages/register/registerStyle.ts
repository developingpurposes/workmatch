import styled from "styled-components";
import backgroundImage from "../../assets/register.png";
import "animate.css";

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

  .logo {
    width: 60px;
    height: 60px;
    align-self: center;
    margin-top: 25px;

    animation: pulse 2s infinite;
  }

  section {
    width: 90%;
    padding: 20px;
    align-self: center;
    border-radius: 3px;
    margin-bottom: 100px;
    background-color: var(--color-bg-form);
    animation: bounceInLeft 1.5s ease-out;

    div {
      width: 100%;
      height: 50px;

      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        color: var(--color-6);
        font-weight: bold;
        font-size: var(--font-size-3);
        margin-bottom: 3px;
        font-family: var(--font-df);
      }

      a {
        align-self: center;
        text-decoration: none;
        color: var(--gray-0);
        font-family: var(--font-df);
        font-weight: bold;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      button {
        animation: fadeInUp 1.5s ease-out;
        animation-delay: 1s;
        animation-fill-mode: backwards;
      }
    }
  }

  @media (min-width: 767px) {
    .logo {
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

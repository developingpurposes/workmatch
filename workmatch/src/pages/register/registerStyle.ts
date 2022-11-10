import styled from "styled-components";
import backgroundImage from "../../assets/register.png";
import "animate.css";

const RegisterStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: var(--color-2);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-x: 50%;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 16px;
 

  img{
    margin-top: 30px;
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
        font: var(--text-subTitle-register);
        text-align: center;
      }

      a {
        display: flex;
        align-items: center;
        gap: 6px;
        text-decoration: none;
        color: var(--gray-0);
        font-weight: bold;
      }

      a:hover, a:active{
        color: var(--color-6);
        text-decoration: underline;
        transition: 0.3s ease-in;
        font-style: italic;
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

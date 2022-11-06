import styled from "styled-components";
import ImgBackground from "../../assets/login.png";
import 'animate.css';

const LoginStyle = styled.div`
  background-image: url(${ImgBackground});
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  display: flex;
  flex-direction: column;
  padding: 16px;
  

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 20px;
    border-radius: 3px;
    animation:fadeIn 1.3s ease-in;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        color: var(--color-6);
        font: var(--text-subTitle-login);
        text-align: center;
      }

      span {
        font-family: var(--font-df);
        color: var(--color-4);
        font-size: var(--font-size-4);
        font-weight: bolder;
        align-self: center;
        text-decoration: none;
      }
    }

    form{

      button{
            animation: flipInX 1s linear;
            animation-delay: 1s;
            animation-fill-mode: backwards;
          }
    }

    .otherButton {
      width: 100%;
      max-width:500px;
      background-color:var(--gray-1);
      border-radius: 5px;
      text-decoration:none;
      text-align: center;
      padding: 8px 0px 8px 0px;
      margin-top: 15px;
      font:var(--text-button);
      color: var(--color-6);


     
      animation: zoomIn 1.2s ease-out;
      animation-delay: 1.5s;
      animation-fill-mode: both; 
    }

    .otherButton:hover, .otherButton:active {
      filter: brightness(1.5);
     
    }

   

    h4 {
      color: var(--color-6);
      font-weight: var(--font-weight-3);
      font-size: 20px;
      margin-top: 16px;
    }
  }

  @media (min-width: 767px) {
    img {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
    }

    section {
      width: 400px;
      align-self: baseline;
      margin-left: 10%;

      div {
        h3 {
          margin-bottom: 10px;
        }
      }

      h4 {
        margin-bottom: 30px;
      }
    }
  }
`;

export default LoginStyle;

import styled from "styled-components";
import ImgBackground from "../../assets/login.png";

const LoginStyle = styled.div`
  background-image: url(${ImgBackground});
  width: 100vw;
  height: 100%;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  object-fit: contain;

  img {
    width: 60px;
    height: 60px;
    align-self: center;
    margin-bottom: 5px;
  }

  section {
    margin-top: 50px;
    width: 90%;
    padding: 20px;
    align-self: center;
    border-radius: 3px;
    margin-bottom: 100px;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        font-family: var(--font);
        color: var(--color-6);
        font-weight: var(--font-weigth-3);
        font-size: var(--font-size-1);
        margin-bottom: 5px;
      }

      a {
        font-family: var(--font-df);
        color: var(--color-4);
        font-size: var(--font-size-3);
        font-weight: bolder;
        align-self: center;
        text-decoration: none;
      }
    }

    .otherButton {
      display: flex;
      width: 100%;
      background-color: #343a40;
      border: none;
      border-radius: 5px;
      color: white;
      justify-content: center;
      text-decoration: none;
      align-items: center;
      text-align: center;
      font-size: 22px;
      padding: 8px 0px 8px 0px;
      margin-top: 15px;
    }

    h4 {
      color: white;
      font-weight: 800;
      font-size: 20px;
      margin-bottom: 3px;
      margin-top: 25px;
      text-align: center;
    }
  }

  @media (min-width: 700px) {
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

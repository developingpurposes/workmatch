import styled from "styled-components";
import backgroundImage from "../../assets/backgroundLandPage1.png";
import "animate.css";

const LandpageStyle = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--color-2);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  main {
    display: flex;
    flex-direction: column;
    margin: 0 auto;

    justify-content: center;
    width: 75%;
    height: 100%;
    h2,
    h3 {
      font-size: 40px;
      font-weight: var(--font-weigth-3);
      font-family: var(--font);
      color: var(--color-6);
    }
    h3 {
      margin-left: 5px;
    }
    a {
      margin-top: 80px;

      width: 100%;
      max-width: 400px;
      height: 67px;
      background-color: var(--color-4);
      text-decoration: none;
      color: var(--color-6);
      font-size: var(--font-size-3);
      font-family: var(--font-df);
      font-weight: var(--font-weigth-1);
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  @media (min-width: 730px) {
    & {
      main {
        animation: fadeIn 0.5s ease-in;
        align-items: center;
        width: 100%;
        display: flex;
        h2,
        h3 {
          font-size: 88px;
        }
        h2 {
          margin-left: -250px;
        }
        a {
          margin-right: -40px;
          transition: 0.5s;
          &:hover {
            transition: 0.5s;
            filter: brightness(0.9);
          }
        }
      }
    }
  }
`;
export default LandpageStyle;

import styled from "styled-components";
import "animate.css";

const NotFoundStyle = styled.div`
  background-color: var(--color-bg-dashboard);
  width: 100vw;
  min-height: 100vh;
  background-size: cover;
  background-position-x: 50%;
  background-position-y: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  img {
    width: 80%;
    max-width: 650px;
  }
  p {
    color: var(--color-6);
    font-size: var(--font-size-3);
    text-align: center;
    font-family: var(--font-df);
    font-weigth: var(--font-weigth-1);
  }

  h1 {
    color: var(--color-4);
    font-size: 4.5rem;
    text-align: center;
    font-family: var(--font);
    font-weigth: var(--font-weigth-1);
  }

  a {
    background-color: var(--color-4);
    color: var(--color-6);
    width: 100%;
    max-width: 400px;
    height: 40px;
    text-decoration: none;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font: var(--text-button);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  a:hover button:active {
    filter: brightness(0.9);
    color: var(--color-6);
  }
`;

export default NotFoundStyle;

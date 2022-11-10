import styled from "styled-components";
import backgroundImage from "../../assets/land3.png";
import "animate.css";
const LandpageThirdStyle = styled.div`
  position: relative;
  width: 100vw;
  height: 300vh;
  background-color: var(--color-2);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: var(--font-size-1);
    font-family: var(--font);
    font-weight: var(--font-weigth-);
    color: var(--color-6);
    text-align: center;
    margin: 50px 0;
  }
  ul {
    width: 90%;
    margin: 0 auto;
    max-width: 1209px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 90%;
      margin: 0 auto;
      max-width: 374px;
      padding: 25px 25px;
      h3 {
        text-align: center;
        font-size: var(--font-size-2);
        font-family: var(--font);
        font-weight: 500;
        color: var(--color-6);
      }
      p {
        text-align: center;
        font-size: 18px;
        font-family: var(--font);
        font-weight: var(--font-weigth-3);
        color: var(--color-6);
      }
    }
    li:first-child {
      border-radius: 28px 28px 0 0;
    }
    li:last-child {
      border-radius: 0 0 28px 28px;
    }
    li:nth-child(odd) {
      background-color: var(--color-1);
    }
    li:nth-child(even) {
      background-color: var(--color-2);
    }
  }
  @media (min-width: 831px) {
    height: 150vh;
    & {
      h2 {
        margin: 80px 0;
      }
      ul {
        background-color: var(--color-1);
        border-radius: 28px;
        li {
          display: flex;
          align-items: flex-start;
          h3 {
            text-align: unset;
          }
          p {
            text-align: unset;
          }
        }
        li:nth-child(odd) {
          background-color: unset;
        }
        li:nth-child(even) {
          background-color: unset;
        }
        li:first-child {
          border-radius: unset;
        }
        li:last-child {
          border-radius: unset;
        }
      }
    }
  }
`;
export default LandpageThirdStyle;

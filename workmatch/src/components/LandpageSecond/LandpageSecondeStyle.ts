import styled from "styled-components";
import backgroundImage from "../../assets/landpage2.png";
import "animate.css";

const LandpageSecondStyle = styled.div`
  width: 100vw;
  height: 250vh;
  background-color: var(--color-2);
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  div {
    margin: 78px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 75%;
    h2 {
      font-size: var(--font-size-2);
      color: var(--color-6);
      font-family: var(--font);
      font-weight: var(--font-weigth-3);
      strong {
        color: var(--color-4);
      }
    }
  }
  section {
    width: 75%;
    margin: 200px auto 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    h2 {
      font-size: var(--font-size-3);
      color: var(--color-6);
      font-family: var(--font-df);
      font-weight: var(--font-weigth-2);
      line-height: 40px;
      text-align: center;
    }
    img {
      width: 221px;
    }
  }
  @media (min-width: 790px) {
    & {
      height: 220vh;
      div {
        h2 {
          font-size: var(--font-size-1);
        }
      }
      section {
        flex-direction: row;
        h2 {
          text-align: start;
          line-height: 60px;
          font-size: var(--font-size-2);
        }
      }
      .section__second {
        flex-direction: row-reverse;
      }
    }
  }
`;
export default LandpageSecondStyle;

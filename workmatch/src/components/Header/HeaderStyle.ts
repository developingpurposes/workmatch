import styled from "styled-components";
import "animate.css";
interface iHeaderStyle {
  isOpen: boolean;
}
const HeaderStyle = styled.header<iHeaderStyle>`
  display: flex;
  flex-direction: column;
  .header__container {
    height: 80px;
    display: flex;
    margin: 0 auto;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    img {
      width: 50px;
    }
  }
  ul {
    z-index: 2;
    position: fixed;
    top: 80px;
    left: 20px;
    width: 90%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 20px 0;
    background-color: var(--color-2);
    box-shadow: darkblue;
    border-radius: 8px;
    animation: bounceInLeft 1s ease-out;
    li {
      list-style: none;
      a {
        color: var(--color-6);
        font-size: var(--font-size-3);
        font-family: var(--font);
        font-weight: var(--font-weigth-3);
        text-decoration: none;
      }
    }
    .list__logo {
      display: none;
    }
  }
  @media (min-width: 630px) {
    & {
      .header__container {
        display: none;
        height: 0px;
      }
      ul {
        position: unset;
        display: flex;
        background-color: unset;
        flex-direction: row;
        justify-content: space-between;
        .list__logo {
          display: flex;
          img {
            width: 200px;
          }
        }
      }
    }
  }
`;

export default HeaderStyle;

import styled from "styled-components";

const FooterStyle = styled.footer`
  background-color: #060012;
  position: sticky;
  top: 4000px;

  div {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 250px;
    }
    h2 {
      color: var(--color-6);
      font-size: var(--font-size-3);
      font-weight: 500;
      font-family: var(--font);
      margin: unset;
      text-align: center;
    }
  }
  .container__contatos {
    display: flex;
    align-items: center;
    div {
      h3 {
        color: var(--color-6);
        font-size: var(--font-size-3);
        font-weight: 500;
        font-family: var(--font);
      }
    }
    ul {
      width: 250px;
      display: flex;
      flex-direction: column;
      background-color: unset;
      li:nth-child(odd) {
        background-color: unset;
      }
      li:nth-child(even) {
        background-color: unset;
      }
      li {
        margin-right: -17px;
        padding: unset;
        div {
          display: flex;
          flex-direction: row;
          gap: 10px;
          align-items: center;
          justify-content: center;
          margin: unset;
        }
        .list__container {
          width: 110px;
          display: flex;
          justify-content: flex-start;
        }
        justify-content: center;
        align-items: center;
        display: flex;
        flex-direction: row;
        gap: 10px;
      }
    }
  }
  .container__time {
    ul {
      margin: 30px 0;
      width: 70%;
      max-width: 222px;
      gap: 8px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
      li:nth-child(odd) {
        background-color: unset;
      }
      li:nth-child(even) {
        background-color: unset;
      }
      li {
        width: 50px;
        margin: unset;
        padding: unset;
        img {
          width: 50px;
        }
      }
    }
  }
  @media (min-width: 830px) {
    & {
      display: flex;
      padding: 30px;
      flex-direction: row;
      justify-content: space-between;

      div {
        margin-top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container__time {
        ul {
          width: 250px;
          background-color: unset;
        }
      }
    }
  }
`;

export default FooterStyle;

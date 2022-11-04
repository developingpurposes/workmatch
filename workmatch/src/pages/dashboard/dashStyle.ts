import styled from "styled-components";

const Header = styled.header`
  background-color: #080017;
  width: 100%;
  height: 60px;
  border-bottom: 2px solid var(--color-5);

  div {
    display: flex;
    justify-content: space-between;
    gap: 5px;
    padding: 5px;
  }

  .userInfos {
    display: flex;

    img {
      width: 30px;
      border-radius: 50%;
    }

    .containerUser {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: var(--font-size-4);
        color: var(--color-6);
      }
      p {
        font-size: 13px;
        color: var(--color-6);
      }
    }
  }

  div > img {
    max-width: 40px;
  }

  .divIcons {
    align-items: center;
  }
`;

export default Header;

export const BodyDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #080017;
`;

export const CardProjects = styled.div`
  background-color: #3a008b;
  opacity: 0.5;
  width: 300px;
  height: 250px;
`;

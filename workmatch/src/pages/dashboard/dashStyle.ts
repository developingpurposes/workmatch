import styled from "styled-components";

const DashboardStyle = styled.div`
  background-color: var(--color-bg-dashboard);
  width: 100vw;
  min-height: 100vh;
`;

const HeaderDashboard = styled.header`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: var(--color-headerDashboard);
  box-shadow: -1px -2px 9px 0px var(--color-6);
  z-index: 101;

  .containerHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1400px;
    padding: 16px;

    img {
      width: 60px;
      height: 60px;
      object-fit: cover;
    }

    .userActionIconsField {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;

      svg {
        color: var(--color-6);
        min-width: 30px;
        min-height: 30px;
      }

      .svgHover {
        padding: 5px;
        border-radius: 8px;
        transition: 0.2s ease-in;
      }

      .svgHover:hover {
        background-color: #392d54;
        transition: 0.2s ease-in;
      }

      button {
        background-color: transparent;
      }
    }

    .userProfile {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      cursor: pointer;

      .infoUser {
        display: none;
      }

      img {
        border-radius: 50%;
      }
    }
  }

  @media (min-width: 767px) {
    .containerHeader {
      .userProfile {
        .infoUser {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          color: var(--color-6);
          margin-right: 16px;
        }
      }

      .userActionIconsField {
        justify-content: flex-end;
        width: 216px;
      }
    }
  }
`;
export { DashboardStyle, HeaderDashboard };

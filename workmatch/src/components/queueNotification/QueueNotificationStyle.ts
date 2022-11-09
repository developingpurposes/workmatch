import styled from "styled-components";

const QueueNotificationStyle = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;

  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 110;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: var(--font-df);

  section {
    background-color: #100325;
    position: absolute;
    z-index: 2;
    top: 1px;
    margin: 10px 0;
    padding: 18px;
    border-radius: 5px;
    width: 60%;

    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      width: 100%;
      height: 50px;
      padding: 0 10px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-bottom: 5px;

      h3 {
        color: var(--color-6);
        font-weight: 700;
        font-size: var(--font-size-5);
        margin-left: 5px;
        font-family: var(--font-df);
      }
      span {
        color: var(--color-4);
        font-size: var(--font-size-4);
        margin-right: 5px;
        font-family: var(--font-df);
        cursor: pointer;
      }
    }

    .projectList {
      .projectHeader {
        background-color: var(--color-3);
        height: 60px;

        h2 {
          color: var(--color-6);
          font-weight: var(--font-weight-700);
          font-size: var(--font-size-4);
        }
      }

      li {
        display: flex;
        flex-direction: column;
      }
    }

    .participantList {
      li {
        display: flex;

        margin-bottom: 5px;

        background-color: var(--color-5);

        .participantInfo {
          img {
            width: 45px;
            height: 45px;
            border-radius: 50%;
          }

          div {
            display: flex;
            flex-direction: column;

            height: 40px;

            h4 {
              font-weight: var(--font-weight-700);
              font-size: var(--font-size-4);
            }

            p {
              font-size: var(--font-size-5);
              color: var(--gray-1);
            }
          }
        }
      }
    }

    .buttonsDiv {
      height: 30px;

      button {
        background-color: var(--color-4);
        color: var(--color-6);
        width: 55px;
        height: 25px;
        font-size: 10px;

        border-bottom-left-radius: 20px;
        border-top-right-radius: 20px;
      }

      button:hover button:active {
        filter: brightness(0.9);
        color: var(--color-6);
      }
    }
  }
`;
export default QueueNotificationStyle;

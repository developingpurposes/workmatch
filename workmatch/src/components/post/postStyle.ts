import styled from "styled-components";

const PostStyle = styled.div`
  width: 100vw;
  padding: 20px;

  ul {
    width: 100%;
    height: 87vh;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg-post);
    filter: brightness(0.9);
    border-radius: 12px;
    overflow: auto;
    box-shadow: 1px 1px 20px -8px white;
    gap: 20px;
    padding: 16px;
    animation: animationContPost 1s ease-in-out;

    @keyframes animationContPost {
      0% {
        transform: translateY(-850px);
        opacity: 0;
      }
      50% {
        opacity: 0.2;
      }
      90% {
        transform: translateY(50px);
        opacity: 0.5;
      }

      100% {
        transform: translateY(0px);
        opacity: 1;
      }
    }

    li {
      display: flex;
      flex-direction: column;
      background-color: #496f95;
      border-radius: 12px;
      width: 100%;
      padding: 2px;
      
      .containerImgPostAndTechs {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        border-top-left-radius: 12px;

        img {
          border-top-left-radius: 11px;
          border-top-right-radius: 11px;
          width: 100%;
          height: 202px;
          object-fit: cover;
        }
        .containerTechs {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 60px;
          overflow-x: auto;
          gap: 8px;
          
          svg {
            color: var(--color-6);
            width: 30px;
            height: 30px;
          }
        }
      }

      .containerInfoPost {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        .containerUserPost {
          display: flex;
          width: 100%;
          height: 70px;
          justify-content: space-between;
          align-items: center;
          padding: 16px;
          color: var(--color-6);
          font-size: var(--font-size-5);
          border-bottom: 2px solid var(--color-6);

          .infoUser {
            display: flex;
            flex-direction: column;
          }
        }
      }

      .containerDescription {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding: 16px;

        p {
          width: 100%;
          height: 115px;
          max-height: 80%;
          color: var(--color-6);
          font-size: va(--font-size-4);
        }

        button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          width: 100%;
          height: 40px;
          border-radius: 8px;
          background-color: var(--color-5);
          color: var(--color-1);

          svg {
            color: var(--color-3);
            width: 25px;
            height: 25px;
          }
        }

        button:hover {
          background-color: var(--color-4);
          filter: brightness(1.2);
          color: var(--color-6);

          svg {
            color: var(--color-6);
          }
        }
      }
    }
  }

  @media (min-width: 767px) {
    ul {
      li {
        flex-direction: row;
        height: 367px;

        .containerImgPostAndTechs {
          width: 50%;

          img {
            height: 80%;
            max-height: 80%;
            border-top-right-radius: 0;
          }
          .containerTechs {
            svg {
              width: 40px;
              height: 40px;
            }
          }
        }
        .containerInfoPost {
          width: 50%;

          .containerUserPost {
            font-size: var(--font-size-4);
            border-bottom: 2px solid var;
          }
        }

        .containerDescription {
          p {
            height: 241px;
          }
        }
      }
    }
  }
`;

export default PostStyle;

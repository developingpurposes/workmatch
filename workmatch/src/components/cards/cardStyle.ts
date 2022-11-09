import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  background-color: var(--color-6);
  height: 100%;
  min-height: 400px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  .imgProject {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }

  .containerTitle {
    margin-left: 10px;
    margin-top: 10px;
  }

  .containerText {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    height: 100%;

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 14px;
      max-height: 20px;
    }

    .containerTechs {
      display: flex;
      align-items: center;
      gap: 5px;
      flex-wrap: wrap;

      .divIcons {
        svg {
          width: 30px;
          height: 30px;
        }
      }
    }

    .divTechs {
      display: flex;
      justify-content: flex-start;

      p {
        font-size: var(--font-size-3);
        margin-right: 10px;
      }
    }
  }

  @media (min-width: 700px) {
    .imgProject {
      height: 200px;
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 80%;
  align-self: center;
  height: 100%;
  justify-content: flex-end;
  margin-bottom: 10px;

  button {
    background-color: var(--color-4);
    width: 90%;
    margin: 0 auto;
    padding: 5px 10px;
    border-radius: 7px;
    color: white;
    border: none;
    cursor: pointer;
    align-self: flex-end;

    &:hover,
    &:active {
      filter: brightness(1.5);
    }
  }
`;

export const ContainerImgTeam = styled.ul`
  display: flex;
  height: min-content;
  padding: 5px;
  margin: 0;
  width: 100%;
  align-self: baseline;
  gap: 5px;
  align-self: center;
  flex-wrap: wrap;

  .imgTeam {
    width: 50px;
    min-width: 50px;
    height: 50px;
    border-radius: 5px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 5px;
      object-fit: cover;
    }
  }
`;

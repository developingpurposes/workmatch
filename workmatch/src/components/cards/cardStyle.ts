import styled from "styled-components";

export const Card = styled.li`
  width: 100%;
  background-color: var(--color-6);
  height: 100%;
  min-height: 350px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .containerTitle{
    margin-left: 10px;
  }

  .containerText {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h2 {
      font-size: 18px;
    }

    h3 {
      font-size: 14px;
      max-height: 20px;
    }

    .containerTechs {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      min-height: 100px;
    }

    .divTechs {
      display: flex;
      justify-content: flex-start;

      p {
        font-size: var(--font-size-3);
        margin-right: 10px;
      }

      img {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  width: 80%;
  align-self: center;

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
  }
`;
export const ContainerImgTeam = styled.ul`
  display: flex;
  gap: 3px;
  height: min-content;
  padding: 5px;
  margin: 0;
  .imgTeam {
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

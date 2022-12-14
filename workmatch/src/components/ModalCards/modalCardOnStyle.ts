import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1;
`;

export const TitleModal = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 10px;
  height: min-content;

  h2 {
    font-size: 25px;
    color: var(--color-6);
  }

  button {
    border: none;
    background-color: var(--color-1);
    color: var(--color-6);
    border-radius: 3px;
    font-size: 22px;
    padding: 5px;

    &:hover{
      background-color: #392d54;
      transition: 0.2s ease-in;
    }
  }
`;

export const DivModal = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-1);
  align-self: center;
  padding: 20px;
  margin-left: 20px;
  border-radius: 5px;
  border: 2px solid var(--gray-1);

  .swiperUl {
    align-self: center;
    display: flex;
    flex-wrap: nowrap;
    width: 90%;
    gap: 10px;
    cursor: grab;
    height: 100%;
  }

  @media(min-width: 700px){
    width: 550px;
  }
`;

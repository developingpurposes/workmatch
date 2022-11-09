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

export const DivModal = styled.div`
  width: 80%;
  height: min-content;
  max-width: 456px;
  background-color: var(--color-1);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
  padding: 20px;
  height: min-content;
  flex-direction: column;
  align-self: center;
  border-radius: 5px;

  @media (min-width: 900px) {
    width: 50%;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 90%;
  align-items: center;

  img {
    width: 150px;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      transition: 0.5s;
      transform: scale(1.1);
    }
  }

  label {
    font-size: var(--font-size-5);
    color: white;
    align-self: baseline;
    margin-left: 3%;
  }

  input {
    width: 90%;
    padding: 8px;
    color: var(--color-6);
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
    &:focus {
      border: 2.5px solid var(--color-4);
      background-color: var(--color-bg-focus-input);
      font-weight: var(--font-weigth-1);
    }
  }

  input::placeholder {
    color: aliceblue;
    opacity: 0.7;
  }

  #SelectStyle {
    width: 95%;
    max-width: 394px;

    border: 2.5px solid var(--color-6);
    border-radius: 8px;
    div {
      font-size: 14px;
      font-family: var(--font-df);
      color: var(--color-6);
      background-color: #24163e40;
      border: none;
      border-radius: 8px;
    }
  }
`;

export const TitleModal = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  padding: 5px;
  height: min-content;
  color: var(--color-6);
  h2 {
    font-weight: 700;
    font-size: var(--font-size-4);
    font-family: var(--font-df);
  }
  .button__close {
    color: var(--color-4);
    font-size: var(--font-size-4);
    font-family: var(--font-df);
    cursor: pointer;
  }
  button {
    background-color: var(--color-1);
    color: var(--color-6);
  }
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const ButtonCreate = styled.button`
  background-color: var(--color-4);
  color: var(--color-6);
  width: 95%;
  height: 40px;

  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;

  font: var(--text-button);

  margin-top: 30px;
  margin-bottom: 20px;
`;

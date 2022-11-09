import Select from "react-select/dist/declarations/src/Select";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  justify-content: center;
  align-items: center;
  gap: 5px;

  &:focus-within {
    color: beige;
  }

  &:focus-within {
    color: beige;
  }

  label {
    color: var(--color-6);
    align-self: baseline;
    font: var(--label);
    margin-left: 3%;
  }

  label:focus-within {
    color: var(--color-4);
  }

  input {
    width: 90%;
    padding: 8px;
    color: var(--color-6);
    background-color: var(--color-bg-input);
    border: 2.5px solid var(--color-6);
    border-radius: 8px;
  }

  input::placeholder {
    color: aliceblue;
    opacity: 0.7;
  }

  input:focus {
    border: 2.5px solid var(--color-4);
    background-color: var(--color-bg-focus-input);
    font-weight: var(--font-weigth-1);

    border-radius: 8px;
  }

  input::placeholder {
    color: aliceblue;
  }

  input:focus {
    border: 2.5px solid var(--color-4);
    background-color: var(--color-bg-focus-input);
    font-weight: var(--font-weigth-1);
  }

  button {
    background-color: var(--color-4);
    color: var(--color-6);
    width: 94%;
    height: 40px;

    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;

    font: var(--text-button);

    margin-top: 30px;
    margin-bottom: 20px;
  }

  button:hover button:active {
    filter: brightness(0.9);
    color: var(--color-6);
  }

  .selectForm {
    width: 100%;
  }
`;

export default Form;
